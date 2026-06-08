---
title: CIP – The Common Industrial Protocol
id: 20260225081600
date: 2026-02-25
type: fleeting
tags: [fleeting, AutomationEngineering, PLC, hardware]
---

# CIP – The Common Industrial Protocol

---

date: 2025-06-10 19:06:26
created: 2025-05-02 23:18:59
categories:

- Obsidian Files

---

## CIP – The Common Industrial Protocol

- If you pay any attention to Rockwell Automation at all, you know that Rockwell Automation is 100% committed to the Common Industrial Protocol (CIP). Over the last 20 years, the vast majority of their products have been CIP enabled. From everything I have heard them say and from everything I’ve read, they are going to continue to support CIP as their primary communications technology well into the future.

I applaud that decision. I think CIP is not only elegantly designed, it works well in practice as evidenced by the hundreds of thousands of CIP nodes in use today. There is much to like about CIP technology. It’s not as plain and simple as a Modbus while not as overly complex, heavy, and burdensome as PROFINET IO. It has exactly the right mix of simplicity, functionality, and elegance. That’s hard to achieve, and the designers did a great job with it. It is very understandable why Rockwell would remain committed to this technology.

But here’s a question that many of you probably can’t answer, “What is CIP?” And, even more important, where does CIP end and EtherNet/IP begin?

Let’s start with a quick overview.

CIP, the Common Industrial Protocol, is a mechanism for organizing and sharing data in industrial devices. CIP is the core technology behind CompoNet, [EtherNet/IP]([https://www.rtautomation.com/technologies/ethernetip/),](https://www.rtautomation.com/technologies/ethernetip/),) [DeviceNet]([https://www.rtautomation.com/technologies/devicenet/)](https://www.rtautomation.com/technologies/devicenet/)) and ControlNet. It provides both a common data organization and a common messaging to solve various kinds of manufacturing application problems. - ### CIP Organization

CIP can actually be defined very simply. It is a well-defined data representation, connection management, and messaging protocol that operates over an independent transport and physical layer.

The **CIP Data Representation** defines how CIP devices represent data. CIP is an object-based technology, and data exposed over a CIP network is presented as a collection of attribute values grouped in common categories called objects. Common objects with common attributes and services can be defined as a Classes of Objects with occurrences of that Class called Instances. For example, a four-unit pneumatic valve might be organized as a Valve Class with four instances of the Class: one for each valve. To provide commonality across similar device types, a set of application objects specific to an application can be grouped together. These application groupings are termed application profiles.

**CIP Connection and Messaging** defines the connection management and messaging that all CIP protocols use. CIP defines specific objects that are used to manage connections and the connection types that specify how data moves over those connections. There are two connection types available in all CIP protocols: Explicit and Implicit. Explicit message connections are message/response oriented and are used to asynchronously access data in a device. Implicit message connections (I/O messages) are used for control. Inputs flow cyclically from a CIP Target to a CIP Message Originator. Outputs flow cyclically from the CIP Message Originator to a CIP Target device. Explicit messages, used to transfer non-control data, use a TCP connection while Implicit messages, used to transfer inputs and outputs, use a UDP connection.

**Physical, Transport, and Media Access** defines how the data bytes of a message physically move from one device to another. CIP is completely independent from the Transport, Encoding, Media Access and Physical layers that are used to move messages. In principle, any physical layer (including [RS232 serial]([https://www.rtautomation.com/industrial-library/serial-device-isolation-grounding/))](https://www.rtautomation.com/industrial-library/serial-device-isolation-grounding/))) and any transport (OPC UA) could be used to implement the communication link between two CIP devices. However, each CIP implementation specifies a specific physical layer, media access, and transport layer. DeviceNet uses CAN (Controller Area Networking). EtherNet/IP uses TCP/IP and Ethernet. ControlNet uses a custom, ControlNet specific transport and media access.

The following figure presents these layers in more detail. DeviceNet, ControlNet, EtherNet/IP, and CompoNet all use the same CIP application layers with different Transport, Media Access, and Physical layers. Any other physical Layer could also be used to send CIP messages.

![]([https://www.rtautomation.com/wp-content/uploads/2018/09/CIP-Protocol-Layers-Diagram.jpg)](https://www.rtautomation.com/wp-content/uploads/2018/09/CIP-Protocol-Layers-Diagram.jpg)) - ### CIP Device Types

Among CIP technology professionals, there is an unofficial way to classify CIP device types as to their overall functionality:

**Messaging Server –** Messaging Server devices only support Explicit Messaging operations. This kind of device might be used to move ASCII data that occurs intermittently in a barcode or RFID application.

**I/O Server –** I/O Server devices support both Explicit and Implicit operations. These devices are used in simple I/O applications like I/O muxes, photoeyes, and valves. Most DeviceNet and EtherNet/IP devices fit this category.

**Messaging Client –** Messaging Client devices only support Explicit Messaging operations but can both initiate and respond to Explicit messages. This kind of device might be used to pull ASCII data from barcode or RFID applications using Explicit messaging.

**I/O Scanner –** I/O Scanner devices includes everything offered in the I/O Server but add the capabilities to open connections and initiate message transfers. They can serve as both originators of output data and targets for devices that want to send them output data.

And that’s really all there is to this important technology. This is the elegance and simplicity of CIP. It can be explained very simply, implemented easily, and operated reliably and efficiently.

