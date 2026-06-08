---
title: IO-Link
id: 20260225081600
date: 2026-02-25
type: fleeting
tags: [fleeting, Sensor, AutomationEngineering, PLC]
---

# IO-Link

---

date: 2025-06-10 19:06:32
created: 2025-04-24 20:51:38
categories:

- Obsidian Files

---

## IO-Link

- [IO-Link](https://io-link.com/en/index.php)

- IEC 61131-9 Edition1 (based on IO-Link Interface and System, V1.1.2)

- IEC 61131-9 Edition2 (based on IO-Link Interface and System, V1.1.3)

- IEC 61139-2 (based on IO-Link Safety – System Extensions)

- IEC 61139-3 (based on IO-Link Wireless – System Extensions)

- [https://io-link.com/gfx_content/Safety/IO-Link-Safety-Hierarchy_Stripf_210325_klein.jpg](https://io-link.com/gfx_content/Safety/IO-Link-Safety-Hierarchy_Stripf_210325_klein.jpg){:height 325, :width 632}

## Safety

- [Technology](https://io-link.com/en/Technology/what_is_IO-Link.php)

- [What is IO-Link?](https://io-link.com/en/Technology/what_is_IO-Link.php)

- [IO-Link Safety](https://io-link.com/en/Technology/Safety/safety.php)

- [What is IO-Link?](http://io-link.com/en/Technology/what_is_IO-Link.php?thisID=76)

    - [IO-Link Safety](http://io-link.com/en/Technology/Safety/safety.php?thisID=156)

    - [IO-Link Wireless](https://io-link.com/en/Technology/Wireless/wireless.php?thisID=160)

    - [Integration](https://io-link.com/en/Technology/Integration/integration.php?thisID=161)

    - [Profiles](https://io-link.com/en/Technology/Profiles/profiles.php?thisID=162)

    - [Did you know...?](https://io-link.com/en/Technology/DidYouKnow/DidYouKnow_Article_report.php?thisID=118)

- [Standardization (IEC)](https://io-link.com/en/Technology/standardization.php?thisID=74)

- [Quality management](https://io-link.com/en/Technology/quality_management.php?thisID=75)

- [Use IO-Link](https://io-link.com/en/Technology/Applications.php?thisID=94)

    - [Machine Tools](https://io-link.com/en/Technology/Machinetools.php?thisID=95)

    - [Handling Assembly Automation](https://io-link.com/en/Technology/HandlingAssemblyAutomation.php?thisID=96)

    - [Intralogistics](https://io-link.com/en/Technology/Intralogistics.php?thisID=97)

    - [Pharmaceutical Packaging](https://io-link.com/en/Technology/PharmaceuticalPackaging.php?thisID=98)

## What is IO-Link Safety?

IO-Link Safety is the new option for expanding machines and systems automated via IO-Link with functionally safe components and communication. In addition to the well-known Masters, there are now the FS-Masters and, for the Devices, the FS-Devices. The connection and transmission technologies of IO-Link can be used unchanged. This makes it easy to deploy safety functions. IO-Link Safety will also be standardized worldwide as IEC 61139-2.

Here is how the extension in automation architecture can look like:


Example of "system architecture with safety components"

**The advantages of IO-Link naturally also apply without restriction to the safety extension. Further more there are also other “highlights” (qualities).**
- ### Universal Safety
- An FS-Master builds on the standard IO-Link Master and offers additional safety communications, i.e.
- Communicating FS-Devices with all three transmission rates also fit to an FS-Master,
- Conventional switching safety sensors with OSSD fit on an FS-Master,
- Any non-safe IO-Link Devices can also be connected to an FS-Master.
- An FS-Master can be integrated in safety field buses (like FSCPs according to IEC 61784-3-x
- FS-Devices can now be safety sensors or actuators, a combination of these or mechatronics with safety
- Only one type of FS-Device required for the global market instead of different safety devices for several safety buses
- IO-Link Safety is independent from the upper level systems
- IO-Link Safety meets the requirements of IEC 61784-3 and can be used in SIL3 / PLe applications
- IO-Link Safety becomes an international standard as IEC 61139-2
- IO-Link is universal ... it has worldwide distribution and acceptance
- ### Smart Safety
- FS-Devices can be parameterized with IO-Link tools (IODD) and thus, for example, the variety of types can be reduced
- IO-Link Safety meets the growing demand for cost-effective, measuring safety sensors extremely
- FS-Devices can now be extremely miniaturized
- Even with safety, the simple device replacement (FS-Device) is possible without a tool
- Detection of incorrect connections is possible (Port detection)
- IO-Link Safety offers safety sensors a transition from switching mode (OSSD) to safe communication, i.e.
- FS-Devices can be parameterized with IO-Link tools for use on safe digital inputs of safety field buses (OSSD)
- IO-Link Safety is smart ... it safely thinks for itself
- ### Easy Safety
- IO-Link Safety is as lean as IO-Link
- Power supply comes within the same cable
- Device descriptions of FS-Devices (IODD) together with a "Dedicated Tool" are available directly in the IODD-Finder Server (see [www.io-link.com](https://io-link.com/en/IODDfinder/IODDfinder.php))
- Planning of safety functions (e.g. determination of reaction times) simplified through parameter specifications in the IODD
- IO-Link Safety has standardized the switching operation (OSSDe) and thus greatly simplifies the use of switching safety devices
- IO-Link Safety is easy ... and ... makes the customer friendly

- {{video [https://www.youtube.com/watch?v=zsV-D7jW1gA}}](https://www.youtube.com/watch?v=zsV-D7jW1gA%7D%7D)

    ## Notes

    - {{youtube-timestamp 27}} Test note

    - {{youtube-timestamp 59}} Industrial Networks

    - {{youtube-timestamp 240}} Why IO-Link?

    - {{youtube-timestamp 509}} How is IO-Link used?

    - {{youtube-timestamp 624}} installation and Setup

# IO-Link Use Examples

## Application Report

### Sector: Machine tools

### Application: Automatic setting of sensor parameters

IO-Link offers you clear advantages for initial parameter setting as well as for parameter setting when a unit needs to be replaced. - #### Objective

A machine tool contains multiple sensors for detecting pressures, levels and temperature. The sensors used today are set manually using keys and a 7-segment display. Initial parameter setting and resetting when a unit needs to be replaced is time-consuming and costly. Nor can the risk of a parameter setting error be precluded. The customer is looking for a way to automatically identify sensors and set parameters in an automated manner. - #### Problem solution

IO-Link capable sensors are identifiable through their Vendor and Device ID. The program recognizes the connected sensor, checks for correctness and sets the sensor parameters using the associated parameter record. With this solution even sensors from different manufacturers can be used. IO-Link also offers a solution for the standard sensors installed on the machine: The signals from these sensors are ìcollectedî in a simple way using IO-Link sensor hubs and passed along to the controller. - #### Products used - 1 x IO-Link Master IP67 for Profibus with 4 IO-Link channels - 3 x IO-Link sensors for pressure, level and temperature - 1 x IO-Link Sensor hub for ìcollectingì standard sensors - #### Customer benefits - Fast initial startup of the machine - Drastically simplified sensor replacement when failures occur, shorter downtimes - End use does not have to worry about setting sensor parameters - Greater security through errorless parameter setting - Centralized documentation of the parameter sets - Simple connection of standard sensors using IO-Link - Remote diagnostics possible down to the sensor level (maintenance support through the manufacturer) - ## Application Report - ### Sector: Handling and assembly automation - ### Application: Simplified installation using IO-Link

IO-Link enables a drastic simplification of installation, since only a simple standard sensor cable is used. - #### Objective

A valve assembly line uses a 20-stage process to fully automatically assemble various components such as plastic parts, O-rings and compression springs into ready-to-install and seal tested valves,. An industrial RFID system with read stations at a total of 17 locations provides information exchange between material flow and the controller. A large number of standard sensors such as diffuse photoelectric, inductive proximity switches and cylinder switches are also used, whose signals need to be carried to the controller in as simple a manner as possible. On the actuator side a larger number of parallel wired pneumatic valve terminals need to be connected. The system is strictly modular, and each module needs to be capable of being added, started up and transported independently. - #### Problem solution

Just connecting the IO-Link capable RFID devices results in an enormous simplification of the installation. In contrast to the previous installation, now only a simple standard sensor cable such as already found on the equipment needs to be used. This connects the RFID device to the closest IO-Link Master over the shortest distance and ready to plug in. The use of IO-Link valve terminal plugs along with IO-Link sensor hubs for collecting standard sensor signals means on the sensor and actuator side that parallel wiring is for the most part replaced by the serial IO-Link. - #### Products used - 22 x IO-Link Master IP67 for Profibus with 4 IO-Link channels - 17 x IO-Link capable RFID read head - 28 x IO-Link sensor hub for -collectingì standard sensors - 19 x IO-Link valve terminal plugs - #### Customer benefits - Drastically simplified connection of RFID read heads, valve terminals and standard sensors - Most parallel wiring replaced by IO-Link - Modular construction of the equipment, modules linked via connectors - Ready to plug in, no cable assembly and no tedious connecting of cable to terminal clamps. - Drastically simplified electrical connection already accomplished at the time of installation by the mechanical personnel. - Saves resourced: Less copper, no wasted worker time - ## Application Report - ### Sector: Intralogistics - ### Application: Dynamic collision protection

IO-Link enables dynamic sensor parameter setting during the production process. - #### Objective

Overhead conveyors have varying braking distances depending on their load and travel speed. With conventional anti-collision approaches therefore the setting is for maximum load and max. travel speed. This means the speed change and vehicle stop point is often set much earlier than necessary, which is not an ideal solution. - #### Problem solution

The trigger points for speed change and vehicle stop can be changed dynamically at any desired time using IO-Link and depending on the load and travel speed. - #### Customer benefits - Optimizing of collision positions - Reduction in creep speed travel cycles - Faster base speed - Greater system efficiency - ## Application Report - ### Sector: Pharmaceutical packaging - ### Application: Validation in blister packaging equipment

IO-Link assists in validation of equipment and machines down to the smallest sensor and actuator. - #### Objective

Different materials are used in the feeding of deep-draw film. The differentiation between aluminum deep-draw film and transparent film should take place right at the feed point of the machine. All the settings and adjustment to the sensor should be reported to the controller. Sensor operation should be possible using various access codes. - #### Problem solution

An optical sensor makes the distinction between aluminum and transparent plastic film. The returned degree of transmission is accomplished using IO-Link in the form of a percent value from 0% to 100% (high-transparent to opaque). IO-Link is used to report all direct operator actions on the sensor to the controller and log them there. - #### Customer benefits - Each film change is detected by the sensor and logged in the controller - A broad material distinction is made at the earliest possible point in time - Sensor parameters such as contamination level can be logged during the production process - The sensor can be set directly from the controller - Machine and process validation down to the lowest automation level - - # Publications - ![IO-Link Power Distribution.pdf](../assets/IO-Link_Power_Distribution_1745546233251_0.pdf) - ![IO-Link_Design_Guideline_eng_2018.pdf](../assets/IO-Link_Design_Guideline_eng_2018_1745546305392_0.pdf) - ![io-link-handbook.pdf](../assets/io-link-handbook_1745546315091_0.pdf) - ![1734-um020_-en-e.pdf](../assets/1734-um020_-en-e_1745546427241_0.pdf) - ![IO-Link_System_Description_eng_2018.pdf](../assets/IO-Link_System_Description_eng_2018_1745636241135_0.pdf) - ![IO-Link_Safety_System_Description_eng_2018.pdf](../assets/IO-Link_Safety_System_Description_eng_2018_1745636256156_0.pdf) - [IO-Link_Safety_Technology_Event_Name_220926.pptx](../assets/IO-Link_Safety_Technology_Event_Name_220926_1745636268388_0.pptx) - ![IO-Link_Wireless_Exposé_eng_2018.pdf](../assets/IO-Link_Wireless_Exposé_eng_2018_1745636279758_0.pdf) - ![IO-Link_Wireless_Flyer_2025_Web.pdf](../assets/IO-Link_Wireless_Flyer_2025_Web_1745636287422_0.pdf) - ![Shutdown_IO_Link.pdf](../assets/Shutdown_IO_Link_1745972394250_0.pdf) -

