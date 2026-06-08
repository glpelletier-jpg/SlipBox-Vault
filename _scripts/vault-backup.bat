@echo off
REM Slip Box Vault — Git Backup Script
REM Scheduled via Windows Task Scheduler — runs hourly
REM
REM Paths derived from script location — no hardcoding needed.
REM %~dp0 = directory of this .bat file (_scripts\)
REM VAULT  = one level up = vault root

pushd "%~dp0.."
set VAULT=%CD%
popd

for %%i in ("%VAULT%") do set VAULT_PARENT=%%~dpi
set VAULT_PARENT=%VAULT_PARENT:~0,-1%
set LOG="%VAULT_PARENT%\backup-log.txt"

echo. >> %LOG%
echo ============================= >> %LOG%
echo Backup started: %DATE% %TIME% >> %LOG%
echo Vault: %VAULT% >> %LOG%

REM ── Locate git.exe ──────────────────────────────────────────────────────────
REM Try PATH first, then the two standard Git for Windows install locations.
set GIT=
where git >nul 2>&1
if %errorlevel% == 0 (
    set GIT=git
) else if exist "C:\Program Files\Git\bin\git.exe" (
    set GIT="C:\Program Files\Git\bin\git.exe"
) else if exist "C:\Program Files (x86)\Git\bin\git.exe" (
    set GIT="C:\Program Files (x86)\Git\bin\git.exe"
) else (
    echo ERROR: git.exe not found. Install Git for Windows or add it to PATH. >> %LOG%
    echo Backup aborted. >> %LOG%
    exit /b 1
)
echo Git: %GIT% >> %LOG%

cd /d "%VAULT%"

REM Read vault version
set VERSION=unknown
if exist "_version" (
    set /p VERSION=<"_version"
)
echo Vault version: %VERSION% >> %LOG%

REM Get current branch
for /f %%i in ('%GIT% rev-parse --abbrev-ref HEAD') do set BRANCH=%%i
echo Branch: %BRANCH% >> %LOG%

REM Pull, stage, commit, push
%GIT% pull origin %BRANCH% >> %LOG% 2>&1
%GIT% add -A >> %LOG% 2>&1

%GIT% diff --cached --quiet
if errorlevel 1 (
    %GIT% commit -m "v%VERSION% backup: %DATE% %TIME%" >> %LOG% 2>&1
    %GIT% push origin %BRANCH% >> %LOG% 2>&1
    if errorlevel 0 (
        echo Backup pushed to GitHub successfully >> %LOG%
    ) else (
        echo ERROR: Push failed - check GitHub remote and credentials >> %LOG%
    )
) else (
    echo No changes to commit >> %LOG%
)

echo Backup finished: %DATE% %TIME% >> %LOG%
