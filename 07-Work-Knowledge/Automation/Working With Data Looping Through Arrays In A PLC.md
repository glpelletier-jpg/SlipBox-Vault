---
title: "Working With Data: Looping Through Arrays In A PLC"
id: 20260227232900
date: 2026-02-27
type: fleeting
tags: [fleeting, AutomationEngineering, PLC, HowTo]
---

# Working With Data: Looping Through Arrays In A PLC

**Source**

[https://control.com/technical-articles/working-with-data-looping-through-arrays-in-a-plc/?user_mcid=39a25405bc&utm_source=Control.com+Members&utm_campaign=70e3b496b5-EMAIL_CAMPAIGN_2026_02_25_05_26&utm_medium=email&utm_term=0_-70e3b496b5-283643497](https://control.com/technical-articles/working-with-data-looping-through-arrays-in-a-plc/?user_mcid=39a25405bc&utm_source=Control.com+Members&utm_campaign=70e3b496b5-EMAIL_CAMPAIGN_2026_02_25_05_26&utm_medium=email&utm_term=0_-70e3b496b5-283643497)

**Content**

]([https://control.com](https://control.com))

../../_resources/Logo-Large_07105efd41fa4c2ab233f03d9d3002cd.png

- [Log In](https://control.com/forums/login/?redirect=https://control.com/technical-articles/working-with-data-looping-through-arrays-in-a-plc/)

- [Join](https://control.com/forums/register/)

- Explore ()

- [Articles](https://control.com/latest/)

- [Forums](https://control.com/forums/)

- [Education](https://control.com/education/)

- [Tools](https://control.com/tools/)

- [Videos](https://control.com/videos/)

- [Giveaways](https://control.com/giveaways/)

- [Partner Content Hub](https://control.com/partner-content-hub/)

]([https://control.com](https://control.com))

../../_resources/Logo-Large_07105efd41fa4c2ab233f03d9d3002cd.png

Technical Article

## Working With Data: Looping Through Arrays In A PLC

- 

- 

- [Home](https://control.com/)

- [Technical Articles](https://control.com/technical-articles/)

- Working With Data: Looping Through Arrays In A PLC

# Working With Data: Looping Through Arrays In A PLC

Arrays can handle large amounts of data, but when you need to extract a portion of that data, you might need to execute a loop. Learn a few examples and tips for creating loops in PLC logic.

---

Technical Article February 16, 2026 by [Shawn Dietrich](https://control.com/author/shawn-dietrich)

[https://www.facebook.com/cntrldotcom](https://www.facebook.com/cntrldotcom)[https://twitter.com/ctrlautomation](https://twitter.com/ctrlautomation)[https://www.linkedin.com/company/30577157/](https://www.linkedin.com/company/30577157/)[https://instagram.com/control_dot_com](https://instagram.com/control_dot_com)[https://www.youtube.com/channel/UCySxpGeffBeCj82-pu1In6Q](https://www.youtube.com/channel/UCySxpGeffBeCj82-pu1In6Q)

---

A common technique in PLC programming is creating ***loops***, which are program structures that cycle through a portion of code a certain number of times. This technique is often used for searching through arrays. These common PLC tags are a cohesive set of identical data types (like INT, REAL, etc.) all bundled into a single tag with a name and a pointer (index) for each of the entries in the tag. Loops can increment the pointer value, then use that value to choose a specific index of data.

There are two fundamental ways of looping through a PLC: one is to use the process scan of the PLC logic, while the other uses jumps and labels.

If executed correctly, a loop offers compact code that can search through large data structures with ease. However, if not executed correctly, the loop can cause processor faults that will halt all program scanning and may even result in equipment damage.

In this article, I’ll showcase a couple of homegrown loop solutions along with some built-in function blocks. I’ll also share some tips that will hopefully prevent a processor fault.

 

../../_resources/Looping_Arrays_1_9401937671a64c7abd01de6c66ef267f.jpg

#### ***Figure 1.*** *Developing code that needs to loop through data. Image used courtesy of* [Unsplash](https://unsplash.com/photos/woman-in-black-and-white-jacket-sitting-in-front-of-computer-monitor-iQqRM0XJvn8)

 

### Looping With a Processor Scan

The PLC logic is always scanned from top to bottom and left to right. We can use the known scan order to increment our pointer and execute some logic along the way. I prefer this style of looping as it can be easier to debug, and there is no risk of slowing down the processor.

Let’s say we have an array that is ten indexes long, so Array1[0..9]. For every scan of the PLC, we want to evaluate the contents of the array at the pointer index, then increment our pointer.

We set up our logic with indirect addressing of our evaluation logic using our pointer, see figure 3. For every increment of the pointer, we see new data, and any logic we place between the first evaluation and the add block can be placed in a clear, readable order. We will need to reset the pointer once we have reached the end of the array, which can be done with a greater-than-or-equal-to compare block. Using this method, there are no special blocks or functions, and we keep the scan order of the PLC intact.

 

../../_resources/Looping_Arrays_2_258244e9d6b044afb52495f389f02f8d.jpg

#### ***Figure 2.*** *Looping with processor scan.*

 

### Scanning With Jump/Labels

A jump is a special function that will alter the scan of the PLC, so it must be used with caution. When the PLC executes a jump, it will move the program pointer to the label of the same name. This label can be forward or backward in the logic. For every jump, there needs to be a corresponding label with the same name. The name of the jump/label is not a tag and doesn’t need to be created, but the label name does need to be unique, and a label must be the first object on a rung.

If we have the same array as before, Array[0..9], we can use the jump/label logic to create a loop that will index our pointer, allowing us to loop through our array. Using the same indirect logic as before, we can evaluate new data with every increment of the pointer; the difference being we don’t have to wait for the scan of the PLC for the next index. Once the evaluation logic is complete and the program pointer has executed the jump, the program pointer will jump back to the label, and the evaluation logic will execute again, this time with the new index position.

In this style of looping, we place a reset at the top, before the label, and we condition our jump with a less-than compare block. So as long as our pointer is in the range of the array size, we keep jumping back.

 

../../_resources/Looping_Arrays_3_c7140f60f2924e49b1254140c67a3302.jpg

#### ***Figure 3.*** *Looping with jumps.*

 

### Possible Processor Faults

Whenever you are using indirect addressing on array variables, you run the risk of faulting the processor.

Typically, there are two faults: data overrun and watchdog timer. Both of these faults refer to an issue with your loop instruction, and if you get either of these faults, the PLC program stops executing, and all the outputs turn off.

 

Figure 4. A fault in a scan cycle. (../../_resources/Looping_Arrays_4_50f4dcd615684997b383a832bc56cca3.jpg)

#### ***Figure 4.*** *A fault in a scan cycle.*

 

The **data overrun faults** happen when the pointer is outside of the array length, so in our earlier example (which used an index range of 0 to 9), if the pointer reached 10 and we tried to evaluate an indirect tag, we would receive a processor error.

Loops with jumps are prone to **watchdog faults**. This happens when the scan time of the PLC has been slowed down beyond a threshold. This can happen if you have too many loops in a routine or you have multiple nested loops with no exit condition, creating an endless loop. While a processor fault doesn’t sound horrible, they can cause damage if the conditions are just right.

 

Figure 5. This is a loop that would cause a fault. (../../_resources/Looping_Arrays_5_30c238770cf24d22ad8ae98394d7955d.jpg)

#### ***Figure 5.*** *This is a loop that would cause a fault.*

 

### Tips and Tricks for Looping

- One of the simplest tricks is to add extra placeholders in your arrays. If you only need five indexes, make the array seven or even ten in length. A couple more indexes will occupy more memory, but might save you from a process or error.

- Another tip is to limit your nested loops; it is easier to debug multiple loops than nested loops. Try to move multidimensional array data into an intermediate array to prevent nested loops.

- Keep your index increment above your compare block. This way, you always add one to your index and then compare if you are outside of the array, and the actual size of the array can be used when comparing instead of the zero-based size of the array.

- To help with reading your logic, use a suffix like “_Idx” or “_Pnt” to denote your pointer tag.

 

### Loops for PLC Arrays

Loops are a great way to analyze data that is stored in an array. They are often used in part tracking applications, such as searching through pallet data or nest data. Provided they are used sparingly and correctly, you will find looping in a PLC very useful.

[Partner Content## Advanced GNSS Solutions for Reliable PositioningExplore Telit Cinterion modules designed for next level tracking and navigation.* * *Content from Future Electronics](https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsto2O-pWznbHmlWgvB8A_bcyfiICZ_GWGMdOiMfvr4FbbaWwY1JKTsGkS_owF6KKnC0N1wja_PvWLJ37mTQ4HJH7ODnkDA_bM2dTcUS_Ql0kvkxu8FiI_HNBr9g1Xr_0_qfjICZUzC0aWesLvO6qJuT0I8ZnzGznL6j3lzCA3AX6fzIFMSVqYrMm1jMNUT7YAnW9pqxRtQBl4ow6XcO_fMPA5V76j3k5k8nKq7TLql1EwvPqkL3kNQIUwaIeX6lnVFkJ-bOFmle1_mZVWGQ5QqeMWZ0j9zPtszuM6qrFEvESCYjEP5kLgrNtIK0R3dFMZw8z5W_rlouYLdRvHOMoq2JulylFT1h6qbTIEUVOg6L0H-Jw8sQHH86ZnyeK69QThuj&sai=AMfl-YSVq20WhiwG-rdXEOSJLwyf6c_mlDI4gxVBBWzEJPtDcZ-caF-SaAEdfEn3RpWO1jafZfzljO8newHgqO9YHZWxc58H2LMH3L0GMMkeaRMxmX531LYY8UKBYOP0ik9GsT1a5iSIfR9WAVs0nBLhFCPUtapHZFfZHHFEktTpgILWBX3Q10SMz1HCkp45u9WKRIfx85k9xeOIDumiZH4YXQUTwhjpfjoy3SICLF42x1j7P4xkU3xpWMUPm-l9ZpT9cHJSOA&sig=Cg0ArKJSzMhqQ8cNPXjgEAE&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://www.futureelectronics.com/resources/featured-products/telit-cinterion-se868sy-sl871k2l-gnss?utm_medium=display&utm_source=allaboutcircuits&utm_campaign=coop-telitcinterion-gnss-se868series&utm_content=v1)

## Related Content

]([https://control.com/industry-white-papers/capturing-edge-data-through-cellular-networks/](https://control.com/industry-white-papers/capturing-edge-data-through-cellular-networks/))

../../_resources/control-automation-cellular-whit_dc98ad11fcbd4dbfb.png

[Capturing Edge Data Through Cellular Networks](https://control.com/industry-white-papers/capturing-edge-data-through-cellular-networks/)

---

[industry white papers](https://control.com/industry-white-papers/)

]([https://control.com/industry-white-papers/adaptive-computing-in-robotics/](https://control.com/industry-white-papers/adaptive-computing-in-robotics/))

../../_resources/avnet_robotics_no_tagline_315x22_bc52a901d82c4d15b.jpg

[Adaptive Computing in Robotics](https://control.com/industry-white-papers/adaptive-computing-in-robotics/)

---

[industry white papers](https://control.com/industry-white-papers/)

]([https://control.com/industry-white-papers/modernize-with-electric-motion/](https://control.com/industry-white-papers/modernize-with-electric-motion/))

../../_resources/unnamed_1271e2fbe7a040478c52a4eb10b6856d.jpg

[Modernize with Electric Motion](https://control.com/industry-white-papers/modernize-with-electric-motion/)

---

[industry white papers](https://control.com/industry-white-papers/)

]([https://control.com/industry-white-papers/manufacturing-a-better-workplace/](https://control.com/industry-white-papers/manufacturing-a-better-workplace/))

../../_resources/universal_robots_manufacturing_a_400496c7f66746439.jpg

[Manufacturing a Better Workplace](https://control.com/industry-white-papers/manufacturing-a-better-workplace/)

---

[industry white papers](https://control.com/industry-white-papers/)

]([https://control.com/industry-white-papers/machine-monitoring-with-edge-devices/](https://control.com/industry-white-papers/machine-monitoring-with-edge-devices/))

../../_resources/iPad_800x450_3939fb930dc149cd816d9fa2825e5240.jpg

[Machine Monitoring with Edge Devices](https://control.com/industry-white-papers/machine-monitoring-with-edge-devices/)

---

[industry white papers](https://control.com/industry-white-papers/)

]([https://control.com/technical-articles/python-tutorial-part-8-conditional-flow-while-loops/](https://control.com/technical-articles/python-tutorial-part-8-conditional-flow-while-loops/))

../../_resources/PythonTutorial_Part1_featured_0b4279de6f994d5b9f39.jpg

[Python Tutorial Part 8 | Conditional Flow: While Loops](https://control.com/technical-articles/python-tutorial-part-8-conditional-flow-while-loops/)

---

[Technical Articles](https://control.com/technical-articles/)

]([https://control.com/industry-white-papers/unlock-the-potential-of-the-arduino-opta-micro-plc/](https://control.com/industry-white-papers/unlock-the-potential-of-the-arduino-opta-micro-plc/))

../../_resources/Arduino_ota_800x450_4c0ca536adb147d2ade1c555625c13.jpg

[Unlock the Potential of the Arduino Opta Micro PLC in HMI Applications](https://control.com/industry-white-papers/unlock-the-potential-of-the-arduino-opta-micro-plc/)

---

[industry white papers](https://control.com/industry-white-papers/)

]([https://control.com/industry-white-papers/dataman-8700-series-handheld-barcode-readers/](https://control.com/industry-white-papers/dataman-8700-series-handheld-barcode-readers/))

../../_resources/Cognex_Dataman_8700_315x220_70a42ad6b74f455f828ba1.jpg

[Dataman 8700 Series Handheld Barcode Readers](https://control.com/industry-white-papers/dataman-8700-series-handheld-barcode-readers/)

---

[industry white papers](https://control.com/industry-white-papers/)

## Learn More About

[programming](https://control.com/search?q=programming) [PLC programming](https://control.com/search?q=PLC%20programming) [array data](https://control.com/search?q=array%20data) [looping](https://control.com/search?q=looping) [PLCs](https://control.com/search?q=PLCs)

Comments (0) ()

../../_resources/default_avatar_bcca4fa91f2d4acea05128a709d3c1d5.png

Log in to comment ()

### You May Also Like

### Turck Presents Smart ID, Sensing, and Fieldbus Solutions at PACK EXPO* * *]([https://control.com/news/turck-presents-smart-id-sensing-and-fieldbus-solutions-at-pack-expo/)[News](https://control.com/news/turck-presents-smart-id-sensing-and-fieldbus-solutions-at-pack-expo/)[News)]([https://control.com/news/](https://control.com/news/))

../../_resources/Turck_Pack2025_featured_47a6c34dba6f478e90efc80036.jpg

### MassRobotics, AWS, and NVIDIA Announce 2026 Physical AI Fellowship* * *]([https://control.com/news/massrobotics-aws-and-nvidia-announce-2026-physical-ai-fellowship/)[News](https://control.com/news/massrobotics-aws-and-nvidia-announce-2026-physical-ai-fellowship/)[News)]([https://control.com/news/](https://control.com/news/))

../../_resources/SecondPhysicalAIFellowship_featu_725d4abb895943b8b.jpg

### Emerson Demonstrates Floor-to-Cloud Solutions at PACK EXPO* * *]([https://control.com/news/emerson-demonstrates-floor-to-cloud-solutions-at-pack-expo/)[News](https://control.com/news/emerson-demonstrates-floor-to-cloud-solutions-at-pack-expo/)[News)]([https://control.com/news/](https://control.com/news/))

../../_resources/Emerson_Pack2025_featured_81638fb4877f4f9fbb752cdc.jpg

### Autonics Introduces Door Lock Switches To Boost Machine Safety* * *]([https://control.com/news/autonics-introduces-door-lock-switches-to-boost-machine-safety/)[News](https://control.com/news/autonics-introduces-door-lock-switches-to-boost-machine-safety/)[News)]([https://control.com/news/](https://control.com/news/))

../../_resources/AutonicsSFDL_1_03307fbbfc56487fb0c5b88b22057605.jpg

../../_resources/Logo-Large_07105efd41fa4c2ab233f03d9d3002cd.png

[More About Us](https://control.com/about-us/) [Advertise](https://eetech.com/solutions/) [Write For Us](https://control.com/write-for-us/) [Contact Us](https://control.com/contact-us/)

#### Connect With Us

- [https://www.facebook.com/cntrldotcom/](https://www.facebook.com/cntrldotcom/)

- [https://twitter.com/ctrlautomation](https://twitter.com/ctrlautomation)

- [https://www.linkedin.com/company/30577157/](https://www.linkedin.com/company/30577157/)

- [https://instagram.com/control_dot_com](https://instagram.com/control_dot_com)

- [https://www.youtube.com/channel/UCySxpGeffBeCj82-pu1In6Q](https://www.youtube.com/channel/UCySxpGeffBeCj82-pu1In6Q)

#### SIGN UP FOR OUR NEWSLETTER

#### Products

- [Cabinets & Panel Components](https://control.com/latest/cabinets-panel-components/)

- [CNC Machines](https://control.com/latest/cnc-machines/)

- [Communication & Security](https://control.com/latest/communication-security/)

- [Connectors, Wire & Cable](https://control.com/latest/connectors-wire-cable/)

- [Data Analytics & Simulation](https://control.com/latest/data-analytics-simulation/)

- [Electrical Power Control](https://control.com/latest/electrical-power-control/)

- [HMIs & SCADA](https://control.com/latest/hmis-scada/)

- [Motors & Controls](https://control.com/latest/motors-controls/)

- [PLCs & PACs](https://control.com/latest/plc-pac/)

- [Pneumatics & Hydraulics](https://control.com/latest/pneumatics-hydraulics/)

- [Robotics](https://control.com/latest/robotics/)

- [Sensors & Instruments](https://control.com/latest/sensors-instruments/)

- [Safety](https://control.com/latest/safety/)

#### Industry

- [Advanced Mfg](https://control.com/latest/advanced-manufacturing/)

- [Agriculture](https://control.com/latest/agriculture/)

- [Automotive](https://control.com/latest/automotive/)

- [Building](https://control.com/latest/building/)

- [Chemical](https://control.com/latest/chemical/)

- [Electronics](https://control.com/latest/electronics/)

- [Energy & Infrastructure](https://control.com/latest/energy-and-infrastructure/)

- [Food & Beverage](https://control.com/latest/food-beverage/)

- [Forest Products](https://control.com/latest/forest-products/)

- [Logistics](https://control.com/latest/logistics/)

- [Medical & Pharma](https://control.com/latest/pharmaceutical/)

- [Metal](https://control.com/latest/metal/)

- [Military & Aerospace](https://control.com/latest/military-aerospace/)

- [Natural Resources](https://control.com/latest/natural-resources/)

- [Plastics & Polymers](https://control.com/latest/plastics-polymers/)

- [Product Mfg](https://control.com/latest/product-manufacturing/)

#### Content

- [Control Automation Day](https://control.com/events/)

- [Ebooks](https://control.com/ebooks/)

- [Forums](https://control.com/forums/)

- [Giveaways](https://control.com/giveaways/)

- [Industry Articles](https://control.com/industry-articles/)

- [Industry Videos](https://control.com/industry-videos/)

- [Industry Webinars](https://control.com/industry-webinars/)

- [Industry White Papers](https://control.com/industry-white-papers/)

- [News](https://control.com/news/)

- [Partner Content Hub](https://control.com/partner-content-hub/)

- [Technical Articles](https://control.com/technical-articles)

- [Textbook](https://control.com/textbook/)

- [Tools](https://control.com/tools/)

- [Video Lectures](https://control.com/video-lectures/)

- [Worksheets](https://control.com/worksheets/)

#### MORE FROM THE EETECH NETWORK

- [https://eetech.com/](https://eetech.com/)

- [https://allaboutcircuits.com](https://allaboutcircuits.com)

- [https://eepower.com](https://eepower.com)

- [https://maker.pro](https://maker.pro)

- [https://www.mikrocontroller.net/](https://www.mikrocontroller.net/)

[© EETech Group, LLC](https://eetech.com). All rights reserved

[Privacy Policy](https://control.com/privacy-policy/) · [User Agreement](https://control.com/user-agreement/)

