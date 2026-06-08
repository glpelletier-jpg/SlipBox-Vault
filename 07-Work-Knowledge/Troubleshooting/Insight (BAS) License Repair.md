---
title: Insight (BAS) License Repair
id: 20260526144222
date: 2026-05-26
type: fleeting
tags: [fleeting, manual, hardware, HowTo, AutomationEngineering]
---

# Insight (BAS) License Repair

If the Siemans Insight Server loses its license
1) On the Insight Server
a. Navigate to Program Files (x86)\Siemans\APOGEE\Common
b. Click and drag the 80-1E6E0… file onto the ApogeeLicense batch file
c. The batch file will run, press Enter to continue
d. Click and drag the 80-1E6E0 file onto the ApogeeLicense batch file
e. The batch file will run again, press Enter to continue
f. Restart the SentinelLM service
g. The license should be reapplied now
2) For InfoCenter
a. Navigate to Program Files (x86)\Siemans\APOGEE\Common
b. Click and drag the 18249_80-26FD6 file onto the ApogeeLicense batch file
c. The batch file will run, press Enter to continue
d. Restart the SentinelLM service
The license should be reapplied now

