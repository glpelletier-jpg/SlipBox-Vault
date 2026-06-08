# fix-moc-names.ps1
# Renames the 4 IA MOC files from triple-dash to em-dash
# Run this from your Slip Box vault root folder:
#   cd "C:\path\to\Slip Box"
#   .\fix-moc-names.ps1
#
# After running, open Obsidian — it will detect the renames
# and update all wikilinks automatically.

$mocFolder = "06-Zettelkasten\MOC"

$renames = @(
    @{ From = "MOC --- PLC Architecture.md";           To = "MOC — PLC Architecture.md" },
    @{ From = "MOC --- Process Safety (IEC 61511).md"; To = "MOC — Process Safety (IEC 61511).md" },
    @{ From = "MOC --- OT Networking.md";              To = "MOC — OT Networking.md" },
    @{ From = "MOC --- Instrumentation.md";            To = "MOC — Instrumentation.md" }
)

foreach ($r in $renames) {
    $from = Join-Path $mocFolder $r.From
    $to   = Join-Path $mocFolder $r.To

    if (Test-Path $from) {
        Rename-Item -Path $from -NewName $r.To
        Write-Host "RENAMED: $($r.From) -> $($r.To)" -ForegroundColor Green
    } else {
        Write-Host "NOT FOUND (already renamed?): $from" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Done. Open Obsidian and check that the 4 MOC files show em-dashes." -ForegroundColor Cyan
Write-Host "Obsidian should auto-update all wikilinks on next vault load." -ForegroundColor Cyan
