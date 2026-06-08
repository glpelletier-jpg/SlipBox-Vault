---
title: Automation Book of Knowledge (BOK)
id: 20260225081600
date: 2026-02-25
type: fleeting
tags: [fleeting, AutomationEngineering, PLC, Sensor]
---

# Automation Book of Knowledge (BOK)

---

date: 2025-06-29 14:08:36
created: 2021-04-07 14:49:14
categories:

- Obsidian Files

---

## Automation BOK



# Automation Book of Knowledge (BOK)

FCV would be the control valve, FZ would be the valve position command, FIC would be the PID loop

#### Tank Level Calculations

All of the finished product storage tanks and the raw material tanks use differential pressure transmitters for level. The different types don’t matter for the math. The transmitter sends a 4-20 mA reading to the control system that correlates linearly with pressure. Knowing the range of the pressure transmitter (i.e. 4-20 mA=0-15 PSI=0-415 IWC) and the density of the material is all we need for calculating the height of the material. The formula looks like this:

            *Level [Inches] = (Pressure transmitter reading [mA] – 4 [mA]) X (415 [IWC] / 16 [mA]) X (8.33 [Lbs/Gal of Water]/ Density of Material [Lbs/Gal]) + Offset [Inches]*

Once we have the height of the material we can calculate the volume using the dimensions of the tank and converting units to gallons.

               *Volume [Gallons] = Level [In] X Diameter2 [In2] X (π / 4) X (1 [gal] / 231 [In3/Gal])*

When we have gallons we can convert to weight using the material density.

               *Weight [Lbs] = Volume [Gal] X Density [Lbs/Gal]*

To get percent full we use the scaling in the analog input instruction. Since we know the height of the tank (say 200 inches) we can get to a percentage with the linear relationship. So 0-200 = 0-100%. This relationship is configured from the faceplate for this value.

Ideally the level offset should only be the height of the transmitter from the bottom of the tank. I know Rich worked quite a bit on getting these as accurate as he could. Error has probably worked its way in in a few forms though. Air trapped in there could cause skewed readings. If tanks are run empty and material dries up on the diaphragm interface that may cause an issue as well. I believe this type of device is intended to be submerged in liquid at all times. The transmitters used are mostly oversized for the application. Some of the transmitters operate in the bottom 25-50% of their range even when the tank is completely full. This will result in poorer resolution. Any error in the reading will be multiplied by many times because of the calculations. The density of the material also fluctuates with temperature, although probably not by much. All of these compound to increase error. For the tanks with cone bottoms, the transmitter is lined up with the transition to the straight side of the tank. The math does not account for the material in the cone bottom.

Ways to improve the reading include: transmitters that more closely match the application range, ensuring there is no trapped air and that the transmitter always stays submerged, verifying product densities and tank dimensions, and making sure you’re making comparisons at similar temperatures. If far more accurate readings are required I would suggest investigating level transmitters that use a different principal of operation, such as guided wave radar, sonar, or capacitance.

#### Studio 5000 language Element not showing

Studio 5000 Logix Designer does not support zoomed-in 4K/higher resolution displays at this time. We are currently investigating 4K display support, but there is no date for when support will be available.

Please try the workarounds below that may help you to resolve the problem. 

#### Workaround 1

To view the full height of the Language Element toolbar in Studio 5000 running on a Windows 10 machine or to eliminate the swaths of open space on the Properties windows, the Display Scaling needs to be adjusted.

See the steps below:

1. Right click on the desktop

2. Select *Display Settings*

3. In left pane select *Display*

4. Move the slider to the left to get 100% Or select 100% from the drop-down menu

#### Workaround 2

Try changing the screen resolution to FullHD (1920x1080).

#### Workaround 3

Start Studio 5000 with the PC resolution set to 1920x1080 or lower, then set it the higher resolution (3200x1800 or 4K) once the project is open.

#### Workaround 4

Windows 10 offers an option to make a non-DPI aware application compatible with high DPI scaling - this can be applied to Logix Designer without changing the global scaling setting. Refer to [Studio 5000: Problem with Toolbar display with high-DPI devices](https://rockwellautomation.custhelp.com/app/answers/answer_view/a_id/1085123)

1. Navigate to `C:\Program Files (x86)\Rockwell Software\Studio 5000\Logix Designer\ENU\Vxx\Bin\` where `xx` corresponds to the version of Logix Designer

2. Right-click on `LogixDesigner.exe`, select *Properties* and go to the *Compatibility* tab

3. Click Change high DPI Settings

4. In **High DPI scaling override** section select Override high DPI scaling behavior checkbox 

5. Select **Scaling performed by****:** Application. You may also select System or System (Enhanced) if selecting Application does not work

6. Click *Apply*, then click *OK*

