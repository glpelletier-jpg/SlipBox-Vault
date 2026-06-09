@echo off
title Git Index Fix
cd /d "C:\Vault\Slip Box"
echo.
echo === Git Index Fix ===
echo Working in: %CD%
echo.

echo Step 1: Removing lock file...
if exist .git\index.lock (
    del /f /q .git\index.lock
    echo   Deleted index.lock
) else (
    echo   No lock file found
)

echo Step 2: Removing corrupt index...
if exist .git\index (
    del /f /q .git\index
    echo   Deleted index
) else (
    echo   No index file found
)

echo Step 3: Rebuilding index from HEAD...
git read-tree HEAD
if %errorlevel%==0 (
    echo   Index rebuilt OK
) else (
    echo   ERROR: git read-tree failed
)

echo.
echo Step 4: Staging ghost file deletions...
git ls-files --deleted -z | xargs -0 git rm --cached --

echo.
echo Step 5: Committing...
git commit -m "Remove ghost _docs files with illegal path characters"

echo.
echo Step 6: Pushing...
git push origin master

echo.
echo === Final status ===
git status

echo.
pause
