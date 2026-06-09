# Slip Box - Navigation Improvement Script
# Run from C:\Vault with: .\apply-nav-improvements.ps1

$VaultRoot      = "C:\Vault\Slip Box"
$CmdrConfig     = "$VaultRoot\.obsidian\plugins\cmdr\data.json"
$AppearancePath = "$VaultRoot\.obsidian\appearance.json"
$AppJsonPath    = "$VaultRoot\.obsidian\app.json"
$SnippetsDir    = "$VaultRoot\.obsidian\snippets"

Write-Host "Starting navigation improvements..."

# --- Backup Commander config ---
if (Test-Path $CmdrConfig) {
    $ts = Get-Date -Format "yyyyMMdd-HHmm"
    Copy-Item $CmdrConfig "$CmdrConfig.bak-$ts"
    Write-Host "Backed up Commander config"
}

# --- Build Commander JSON ---
$cmdr = [ordered]@{
    leftRibbon = [ordered]@{
        reorder = $true
        items = @(
            [ordered]@{ id = "homepage:open-homepage";           name = "Home";           icon = "lucide-home";           mode = "any" }
            [ordered]@{ id = "periodic-notes:open-daily-note";  name = "Today";          icon = "lucide-calendar-days";  mode = "any" }
            [ordered]@{ id = "periodic-notes:open-weekly-note"; name = "This Week";      icon = "lucide-calendar-range"; mode = "any" }
            [ordered]@{ id = "global-search:open";              name = "Search";         icon = "lucide-search";         mode = "any" }
            [ordered]@{ id = "switcher:open";                   name = "Quick Switcher"; icon = "lucide-zap";            mode = "any" }
        )
    }
    rightRibbon = [ordered]@{ reorder = $true; items = @() }
    titleBar = [ordered]@{
        reorder = $true
        items = @(
            [ordered]@{ id = "app:go-back";                      name = "Back";    icon = "lucide-arrow-left";  mode = "any" }
            [ordered]@{ id = "app:go-forward";                   name = "Forward"; icon = "lucide-arrow-right"; mode = "any" }
            [ordered]@{ id = "homepage:open-homepage";           name = "Home";    icon = "lucide-home";        mode = "any" }
            [ordered]@{ id = "periodic-notes:open-daily-note";  name = "Today";   icon = "lucide-calendar";    mode = "any" }
        )
    }
    statusBar  = [ordered]@{ reorder = $true; items = @() }
    pageHeader = [ordered]@{ reorder = $true; items = @() }
    explorer   = [ordered]@{ reorder = $true; items = @() }
    macros     = @()
}

$cmdrJson = $cmdr | ConvertTo-Json -Depth 10
[System.IO.File]::WriteAllText($CmdrConfig, $cmdrJson, [System.Text.Encoding]::UTF8)
Write-Host "Commander config written"

# --- Appearance: force tab title bar ON ---
if (Test-Path $AppearancePath) {
    $raw = [System.IO.File]::ReadAllText($AppearancePath)
    $obj = $raw | ConvertFrom-Json
} else {
    $obj = New-Object PSObject
}
if (-not ($obj.PSObject.Properties.Name -contains "showViewHeader")) {
    $obj | Add-Member -NotePropertyName "showViewHeader" -NotePropertyValue $true
} else {
    $obj.showViewHeader = $true
}
$newRaw = $obj | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText($AppearancePath, $newRaw, [System.Text.Encoding]::UTF8)
Write-Host "Appearance updated (showViewHeader = true)"

# --- CSS snippet ---
if (-not (Test-Path $SnippetsDir)) {
    New-Item -ItemType Directory -Path $SnippetsDir | Out-Null
}

$css = "/* Slip Box - Navigation Polish */" + "`n"
$css += "" + "`n"
$css += "/* Slim the left ribbon */" + "`n"
$css += ".workspace-ribbon.side-dock-ribbon.mod-left { width: 36px; }" + "`n"
$css += ".workspace-ribbon.side-dock-ribbon.mod-left .side-dock-ribbon-action { width: 36px; height: 36px; padding: 6px; }" + "`n"
$css += "" + "`n"
$css += "/* Hide default vault/help ribbon icons */" + "`n"
$css += ".workspace-ribbon.side-dock-ribbon.mod-left .side-dock-ribbon-action[aria-label='Open another vault']," + "`n"
$css += ".workspace-ribbon.side-dock-ribbon.mod-left .side-dock-ribbon-action[aria-label='Help'] { display: none; }" + "`n"
$css += "" + "`n"
$css += "/* File tree: tighter spacing and folder nesting lines */" + "`n"
$css += ".nav-folder-title { font-weight: 600; padding-top: 2px; padding-bottom: 2px; }" + "`n"
$css += ".nav-file-title { padding-top: 1px; padding-bottom: 1px; font-size: 0.9em; }" + "`n"
$css += ".nav-folder-children { border-left: 1px solid var(--background-modifier-border); margin-left: 10px; }" + "`n"
$css += "" + "`n"
$css += "/* Active note highlight in file tree */" + "`n"
$css += ".nav-file-title.is-active { font-weight: 600; background: var(--interactive-accent-hover); border-radius: 4px; }" + "`n"
$css += "" + "`n"
$css += "/* Compact tab headers */" + "`n"
$css += ".mod-root .workspace-tab-header { min-width: 80px; max-width: 180px; }" + "`n"

$snippetPath = "$SnippetsDir\nav-polish.css"
[System.IO.File]::WriteAllText($snippetPath, $css, [System.Text.Encoding]::UTF8)
Write-Host "CSS snippet written to $snippetPath"

# --- Enable snippet in app.json ---
if (Test-Path $AppJsonPath) {
    $appRaw = [System.IO.File]::ReadAllText($AppJsonPath)
    $appObj = $appRaw | ConvertFrom-Json
} else {
    $appObj = New-Object PSObject
}
if (-not ($appObj.PSObject.Properties.Name -contains "enabledCssFiles")) {
    $appObj | Add-Member -NotePropertyName "enabledCssFiles" -NotePropertyValue @("nav-polish")
} else {
    $list = [System.Collections.ArrayList]@($appObj.enabledCssFiles)
    if ($list -notcontains "nav-polish") { $list.Add("nav-polish") | Out-Null }
    $appObj.enabledCssFiles = $list.ToArray()
}
$appNew = $appObj | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText($AppJsonPath, $appNew, [System.Text.Encoding]::UTF8)
Write-Host "nav-polish snippet enabled in app.json"

Write-Host ""
Write-Host "Done! Close and reopen Obsidian to apply."
Write-Host "Left Ribbon : Home, Today, This Week, Search, Quick Switcher"
Write-Host "Title Bar   : Back, Forward, Home, Today"
Write-Host "CSS snippet : nav-polish (slim ribbon, file tree polish)"
