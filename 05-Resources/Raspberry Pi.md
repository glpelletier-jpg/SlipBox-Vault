---
title: Raspberry Pi
date: 2026-06-04
tags: [resource, raspberry-pi, electronics, hardware]
---

# Raspberry Pi

> Navigation note for all Raspberry Pi knowledge in the vault — hardware, programming, projects, and course notes. Connects to the electronics interest area in the [[01-Vision/future-vision|Future Vision]].

---

## Active project — GPS Tracker

The Paul McWhorter series is the primary hands-on project. 6 lessons captured, covering hardware setup through GPS data parsing.

| Lesson | Topic |
|---|---|
| [[05-Resources/Courses/GPS-Tracker-Project/Gearing Up for the Raspberry Pi Pico Ultimate GPS Tracker Project! - Paul McWhor|Gearing Up]] | Project overview and parts list |
| [[05-Resources/Courses/GPS-Tracker-Project/Ultimate GPS Tracker Project 1 Learn to Solder for Absolute Beginner - Paul McWh|Lesson 1]] | Soldering fundamentals |
| [[05-Resources/Courses/GPS-Tracker-Project/Ultimate GPS Tracker Project 2 Connect and Fire Up the Adafruit GPS with the Pi|Lesson 2]] | Connect and fire up the GPS module |
| [[05-Resources/Courses/GPS-Tracker-Project/Ultimate GPS Tracker Project 3 How the Global GPS System Works - Paul McWhorter|Lesson 3]] | How GPS works — satellite triangulation |
| [[05-Resources/Courses/GPS-Tracker-Project/Ultimate GPS Tracker Project 4 Understanding Latitude and Longitude - Paul McWho|Lesson 4]] | Latitude and longitude |
| [[05-Resources/Courses/GPS-Tracker-Project/Ultimate GPS Tracker Project 5 Getting Latitude and Longitude from the GPS - Pau|Lesson 5]] | Parsing GPS data in Python |
| [[05-Resources/Courses/GPS-Tracker-Project/Ultimate GPS Tracker Project 6 Timing Challenges with UART Based GPS Module - Pa|Lesson 6]] | UART timing challenges |
| [[05-Resources/Courses/GPS-Tracker-Project/DroneBot Workshop - Build a Developers Linux Workstation|DroneBot — Linux Workstation]] | Building a developer workstation (related) |

**Study workflow:** [[05-Resources/Courses/Course Study Workflow|Course Study Workflow]]

---

## Reference notes

- [[06-Zettelkasten/Fleeting/Raspberry Pi 4|Raspberry Pi 4]] — general overview and specs
- [[06-Zettelkasten/Fleeting/I Built a 5 Portable Raspberry Pi Homelab|I Built a $5 Portable Raspberry Pi Homelab]] — homelab inspiration

---

## Literature in vault

- [[06-Zettelkasten/Literature/Raspberry Pi 4 Programming Made Simple for Beginners|Raspberry Pi 4 Programming Made Simple for Beginners]]
- [[05-Resources/Books/Raspberry Pi 4 Programming Made Simple for Beginners|Book entry]] — status: to-read

---

## Connection to other interests

**HAM Radio** — GPS and radio share RF fundamentals. A Raspberry Pi running APRS (Automatic Position Reporting System) or a software-defined radio (SDR) is a natural next project after getting the HAM license. The GPS Tracker project is direct preparation for this.

**Automation engineering** — Raspberry Pi is used in industrial prototyping, edge computing, and OT monitoring. Skills from the GPS Tracker project (Python, UART, hardware interfacing) transfer directly to PLC and automation contexts.

**MIT CS courses** — [[05-Resources/Courses/MIT-CS/MIT-CS|MIT Missing Semester]] covers Linux shell tools that are essential for Pi development. Study them together.

---

## Potential next projects

| Project | What it teaches | Prerequisites |
|---|---|---|
| Software-defined radio (SDR) | RF spectrum visualization, HAM band monitoring | GPS Tracker complete |
| APRS tracker | HAM radio + GPS combined | HAM license + GPS Tracker |
| Homelab server | Linux admin, networking, self-hosting | MIT Missing Semester |
| Industrial sensor monitor | OT data collection, Python, MQTT | GPS Tracker + networking basics |

---

## Equipment to get

- [ ] Raspberry Pi 4 (4GB) or Pi 5 🆔 Nfv78s
- [ ] Adafruit Ultimate GPS module (used in McWhorter series) 🆔 zXAe5A
- [ ] Soldering iron + solder (Lesson 1 covers this) 🆔 Wk68IU
- [ ] Breadboard and jumper wires 🆔 DDHkS1
- [ ] MicroSD card (32GB+) 🆔 p5YPDd
- [ ] Optional: RTL-SDR dongle for radio projects 🆔 iwcfHO

---

**Links:** [[05-Resources/05-Resources|Resources]] | [[05-Resources/Courses/GPS-Tracker-Project/GPS-Tracker-Project|GPS Tracker Course]] | [[05-Resources/Courses/HAM-Radio/HAM-Radio|HAM Radio]] | [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]]
