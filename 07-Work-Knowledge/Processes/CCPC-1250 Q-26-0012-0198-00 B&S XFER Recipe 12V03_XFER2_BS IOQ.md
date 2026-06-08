---
title: "CCPC-1250 Q-26-0012-0198-00 B&S XFER Recipe 12V03_XFER2_BS IOQ"
id: 20260527130113
date: 2026-05-27
type: fleeting
tags: [fleeting, SOP, References, validation]
---

# CCPC-1250 Q-26-0012-0198-00 B&S XFER Recipe 12V03_XFER2_BS IOQ

+-----------------------------------+-----------------------------------+
| media/image1.jpeg{width="1.4 |   ------------------------------- |
| 245286526684164in"                | ------------------                |
| height="0.9572025371828522in"}    |   **B&S Filler Transfer Recipe 12 |
|                                   | V03_XFER2_BS**                  |
|                                   |   ------------------------------- |
|                                   | ------------------                |
+-----------------------------------+-----------------------------------+
|                                   | **IOQ**                           |
+-----------------------------------+-----------------------------------+

+----------------------+-------------------------------+
| **IOQ**              |                               |
+======================+===============================+
| **Equipment/System** | Tank 12V03 / B&S Filler       |
+----------------------+-------------------------------+
| **Location:**        | Shawnee II, Rooms 2204 / 1213 |
|                      |                               |
|                      | Argenta                       |
|                      |                               |
|                      | 12707 Shawnee Mission Parkway |
|                      |                               |
|                      | Shawnee, KS 66216-1846        |
+----------------------+-------------------------------+
| **Protocol Number**  | Q-26-0012-0198-00             |
+----------------------+-------------------------------+
| **Written By**       | Christian Porras              |
+----------------------+-------------------------------+

**CONTENTS**

1. PURPOSE 3 ()

2. SYSTEM DESCRIPTION 3 ()

3. PROCEDURE 4 ()

3.1 EXECUTION 4 ()

3.2 PROTOCOL COMPLETION 4 ()

3.3 ACCEPTANCE CRITERIA 4 ()

4. SIGNATURE TABLE 5 ()

5. TEST EQUIPMENT CALIBRATION LIST 6 ()

6. INSTALLATION COMMISIONING PROCEDURE
6 ()

6.1 ALTERATION NAMEPLATE DATA VERIFICATION
6 ()

6.2 CALIBRATED INSTRUMENTS TABLE 6 ()

6.3 UTILITY VERIFICATION 6 ()

6.4 DRAWINGS LIST 6 ()

6.5 REFERENCE DOCUMENT LIST 7 ()

6.6 MATERIALS OF CONSTRUCTION VERIFICATION 7 ()

6.7 LUBRICANTS VERIFICATION 7 ()

6.8 RECOMMENDED SPARE PARTS 7 ()

6.9 CHANGE PARTS 7 ()

6.10 STANDARD OPERATING PROCEDURES / PREVENTATIVE MAINTENANCE
PROCEDURES
8 ()

6.11 SAFETY DEVICE / RELIEF VALVE VERIFICATION 8 ()

6.12 HEALTH, ENVIRONMENT AND SAFETY REVIEW AND APPROVAL
8 ()

6.13 FILTER HOUSINGS AND ELEMENTS VERIFICATIONS
8 ()

6.14 EQUIPMENT PASSIVATION VERIFICATION
8 ()

6.15 SYSTEM VERIFICATION 8 ()

6.16 I/O VERIFICATION 8 ()

6.17 SOFTWARE AND CONFIGURATION BACK-UP
9 ()

7. OPERATIONAL COMMISSIONING PROCEDURE
10 ()

7.1 HMI GRAPHICS TESTING 10 ()

7.1.1 TANK SELECTION GRAPHICS VERIFICATION
10 ()

7.2 BOUNDARY TESTING 11 ()

7.3 ALARMS TESTING 11 ()

7.4 SAFETY INTERLOCKS TESTING 11 ()

7.5 COMMUNICATIONS TESTING 11 ()

7.5.1 COMPOUNDING PLC-201 DATA TO CP-7 PLC VERIFICATION
11 ()

7.5.2 COMPOUNDING PLC-12 DATA TO PLC-201 VERIFICATION
12 ()

7.6 BATCH SERVER CONFIGURATION VERIFICATION
13 ()

7.7 PROCESS PHASE LOGIC VERIFICATION
15 ()

7.7.1 TRANSFER PHASE LOGIC VERIFICATION 16 ()

7.8 RECIPE VERIFICATION 19 ()

7.9 RECIPE EXECUTION 20 ()

7.10 DISTURBANCE TESTS AND VERIFICATIONS
20 ()

7.11 CLEANING TESTS AND VERIFICATIONS
20 ()

7.12 VACUUM HOLD TEST 20 ()

7.13 PRESSURE HOLD TEST 20 ()

8. ATTACHMENT LIST 21 ()

# PURPOSE

> This Installation/Operational/Qualification (IOQ) protocol defines the
data required to characterize the equipment modifications and field
verifications that confirm the operation according to applicable
specifications, manufacturer's recommendations, and Argenta
requirements. Successful completion of this protocol will provide
assurance that the equipment modifications were properly administered,
and the equipment/system is ready for operation.

# SYSTEM DESCRIPTION

> This IOQ supports the addition of a new B&S filler product transfer
InBatch recipe and associated PLC phase and PLC communications to
accommodate sterile transfers from tank 12V03 (located in room 2204),
down to the B&S filler (located in room 1213), via a filter cart in
room 2203. This IOQ references CCPC-1250.

# PROCEDURE

## EXECUTION

- Follow the instructions for each table and testing procedure in this

    > document.

- Document IQ activities, inspections, and tables at execution.

- Enter initials and the date in the "Verified By" column or signature

    > and the date in the field at the bottom of the page to indicate an
    acceptable result.

- Enter signature and the date in the "Reviewed By" field at the

    > bottom of the page to indicate the page has been completed per
    Argenta documentation standards,

- A shaded area in a table does not require an entry.

## PROTOCOL COMPLETION

- After completing the execution of the IQ package, complete the

    > summary report per SOP.

## ACCEPTANCE CRITERIA

- The applicable manufacturer's recommendations and Argenta

    > requirements are listed in the specific test sections of this
    document.

- All inspections, verifications, reviews and documentation

    > requirements for manuals, certificates, and other documentation
    for the equipment have been completed and are acceptable.

- The applicable revisions of the specifications are identified, and

    > copies are included, or a storage location is referenced, if
    applicable.

# SIGNATURE TABLE

> All personnel assigned to execute or review this protocol, attached
exceptions and/or supporting documentation must sign and initial in
the space provided below.

---

**Printed Name**   **Signature and Initials**   **Affiliation**

---

# TEST EQUIPMENT CALIBRATION LIST

> N/A -- There is no expected test equipment calibration list needed for
this protocol.

# INSTALLATION COMMISIONING PROCEDURE

Completion of the following activities will document and verify the
installation of equipment.

## ALTERATION NAMEPLATE DATA VERIFICATION

> N/A -- There are no expected alteration nameplate data verifications
needed for this protocol.

## CALIBRATED INSTRUMENTS TABLE

> N/A -- There are no expected calibrated instruments needed for this
protocol.

## UTILITY VERIFICATION

> N/A -- There are no expected utility verifications needed for this
protocol.

## DRAWINGS LIST

> List and attach a list of all engineering drawings used to define the
modified system. Drawings include but are not limited to machine
layout, power and control, utilities, etc. Initial and date in the
"Verified By/Date" column to indicate that each drawing has been
verified and attached.

+-----------+-----------+-----------+-----------+-----------+-----------+
| **Drawing |** **Drawing |** **Revisio |** **Date** **|** **Attache |** **Verifie |
| Number** **| Title** **| n** **|           | d** **| d         |
|           |           |           |           |           | By/Date** |
|           |           |           |           | **(Y/N)   |           |
|           |           |           |           | -- list   |           |
|           |           |           |           | location* |           |
|           |           |           |           | *         |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
|           |           |           |           |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
|           |           |           |           |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
|           |           |           |           |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+

## REFERENCE DOCUMENT LIST

> List all documents used as references during the generation and
execution of the installation/operational/qualification package.
Documents include but are not limited to Operation, Maintenance
Manuals, Installation Manuals, specifications, catalog information,
and component lists.

Verify that information from the following documents is in accordance
with the as-built conditions. Mark each document in red to indicate
equipment procedures and as-built conditions as required. All redlined
documents require the signature of the Argenta Project Engineer or
representative to signify accuracy and approval of the as-built
conditions. Documents such as Manufacturer supplied manuals need not
be redlined unless equipment modifications are present.

---

**Document Number**   **Document Title**   **Redlined? (Y/N)**   **Attached? (Y/N) -- list location**   **Revision**   **Verified By/Date**

---

## MATERIALS OF CONSTRUCTION VERIFICATION

> N/A -- There are no expected materials of construction verifications
needed for this protocol.

## LUBRICANTS VERIFICATION

> N/A -- There are no expected lubricant verifications needed for this
protocol.

## RECOMMENDED SPARE PARTS

> N/A -- There are no expected recommended spare parts needed for this
protocol.

## CHANGE PARTS

> N/A -- There are no expected change parts needed for this protocol.

## STANDARD OPERATING PROCEDURES / PREVENTATIVE MAINTENANCE PROCEDURES

> List all Standard Operating Procedures (SOPs) and Preventive
Maintenance Procedures (PMs) required for PPORT4. SOPs should include
procedures for operation, maintenance, and cleaning activities. SOPs /
PMs for IOQ packages may be in draft stage of approval and the
Operational Qualification may proceed with SOPs / PMs in draft form.

---

**SOP / PM Number**   **SOP / PM Name**   **Draft / Approval Date**   **Verified By/Date**

---

## SAFETY DEVICE / RELIEF VALVE VERIFICATION

> N/A -- There are no expected safety device / relief valve
verifications needed for this protocol.

## HEALTH, ENVIRONMENT AND SAFETY REVIEW AND APPROVAL

> N/A -- There are no expected health, environment, and safety review
and approvals needed for this protocol.

## FILTER HOUSINGS AND ELEMENTS VERIFICATIONS

> N/A -- There are no expected filter housings and elements
verifications needed for this protocol.

## EQUIPMENT PASSIVATION VERIFICATION

> N/A -- There are no expected equipment passivation verifications
needed for this protocol.

## SYSTEM VERIFICATION

> N/A -- There are no expected system verifications needed for this
protocol.

## I/O VERIFICATION

> N/A -- There is no expected I/O verification needed for this protocol.

## SOFTWARE AND CONFIGURATION BACK-UP

> Verify and document the software and configuration back-up locations
in the table below.

+-----------------+-----------------+-----------------+-----------------+
| Device          | File Name       | Back-Up         | **Verified By & |
|                 |                 | Location        | Date**          |
+=================+=================+=================+=================+
| PLC-201 --      | PLC201.ACD      | FactoryTalk     |                 |
|                 |                 | AssetCentre\SH |                 |
| Compounding     |                 | AWNEE           |                 |
| ControlLogix    |                 | 2\\            |                 |
| PLC Prog.       |                 | COMP\PLC-201\ |                 |
|                 |                 | PLC\           |                 |
+-----------------+-----------------+-----------------+-----------------+
| PLC12 --        | PLC12.ACD       | FactoryTalk     |                 |
|                 |                 | AssetCentre\SH |                 |
| Compounding     |                 | AWNEE           |                 |
| ControlLogix    |                 | 2\\            |                 |
| PLC Prog.       |                 | COMP\CP-12\PL |                 |
|                 |                 | C12\           |                 |
+-----------------+-----------------+-----------------+-----------------+
| CP-07 --        | CP-07.ACD       | FactoryTalk     |                 |
|                 |                 | AssetCentre\SH |                 |
| Compounding SLC |                 | AWNEE           |                 |
| PLC Prog.       |                 | 2\\            |                 |
|                 |                 | COMP\CP-07\PL |                 |
|                 |                 | C07\           |                 |
+-----------------+-----------------+-----------------+-----------------+
| COMPSERVER --   | Config_A.zip   | FactoryTalk     |                 |
|                 |                 | AssetCentre\PC |                 |
| Compounding     |                 | T\Wonderware   |                 |
| Batch Server    |                 | Servers\COMPSE |                 |
|                 |                 | RVER\Config_A |                 |
| Configuration   |                 |                 |                 |
| Directory       |                 |                 |                 |
| Config_A       |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| SCADA_COMP --  | SCADA_COMP.zip | FactoryTalk     |                 |
|                 |                 | AssetCentre\PC |                 |
| Compounding HMI |                 | T\Wonderware   |                 |
| Application     |                 | SCADA\COMPOUND |                 |
|                 |                 | ING\           |                 |
+-----------------+-----------------+-----------------+-----------------+
|                 |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
|                 |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+

# OPERATIONAL COMMISSIONING PROCEDURE

> Completion of the following activities will document and verify
operation of the new valves and affected phases.

## HMI GRAPHICS TESTING

> Objective:

The objective of this test is to ensure that the HMI device objects
operate as expected.

Procedure:

1. Logon to the system.

2. Navigate to the appropriate HMI screen and device object or popup.

3. Manipulate the HMI object as necessary to test the associated

    > functionality and animation.

4. Observe the actual response of the device and of the HMI object to

    > the test conditions.

5. Indicate whether the actual response passes or fails the acceptance

    > criteria.

6. Initial and date after the test is completed.

> Acceptance Criteria:

1. Graphic and Screen objects operate as expected.

2. Navigation to screens operates as expected.

### TANK SELECTION GRAPHICS VERIFICATION

+-----------+-----------+-----------+-----------+-----------+-----------+
| No.       | Screen    | Screen    | Expected  | Pass\     | Verified  |
|           |           | Object    | Results   | /Fail     | By/ Date  |
|           |           |           |           |           |           |
|           |           |           |           | ()        |           |
+===========+===========+===========+===========+===========+===========+
| 1         | PARENTERA | 12V03     | Tank      | ☐ Pass    |           |
|           | LS        | SELECTION | 12V03     |           |           |
|           | COMPOUNDI | BUTTON    | selection | ☐ Fail    |           |
|           | NG        |           | button is |           |           |
|           | OVERVIEW  |           | shown on  |           |           |
|           | (LP_PC_ |           | the       |           |           |
|           | OVERVIEW) |           | screen.   |           |           |
|           |           |           | When      |           |           |
|           |           |           | clicked,  |           |           |
|           |           |           | the 12V03 |           |           |
|           |           |           | tank      |           |           |
|           |           |           | graphics  |           |           |
|           |           |           | are       |           |           |
|           |           |           | displayed |           |           |
|           |           |           | as        |           |           |
|           |           |           | expected. |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+

## BOUNDARY TESTING

> N/A -- There is no expected boundary testing needed for this protocol.

## ALARMS TESTING

> N/A -- There is no expected alarms testing needed for this protocol.

## SAFETY INTERLOCKS TESTING

> N/A -- There is no expected safety interlocks testing needed for this
protocol.

## COMMUNICATIONS TESTING

> Objective:

The objective of this test is to ensure that PLC message communication
data between PLCs is configured properly and functions as expected.

Procedure:

1. Go online with the following PLCs: CP-7, PLC-12, and Compounding
PLC-201.

2. Change PLC message data values in the source PLC and verify that the
corresponding value in the destination PLC matches the value changed
in the source PLC.

3. Indicate whether the actual response passes or fails the acceptance
criteria.

4. Initial and date after the test is completed.

> Acceptance Criteria:

1. PLC message communication data between PLCs is configured properly
and functions as expected.

### COMPOUNDING PLC-201 DATA TO CP-7 PLC VERIFICATION

+---------+---------+---------+---------+---------+---------+---------+
| No.     | Data    | PLC-201 | CP-7    | Expecte | Pass\   | Verifie |
|         | Tag/    |         |         | d       | /Fail   | d       |
|         | Descrip | Source  | Destina | Results |         | By/     |
|         | tion    |         | tion    |         | ()      | Date    |
|         |         | PLC Tag |         |         |         |         |
|         |         |         | PLC     |         |         |         |
|         |         |         | Registe |         |         |         |
|         |         |         | r       |         |         |         |
+=========+=========+=========+=========+=========+=========+=========+
| 1       | P12V03  | P12V03\ | N20:251 | Source/ | ☐ Pass  |         |
|         | Transfe | _XFER_ | /12     | Destina |         |         |
|         | r       | BS.RUN  |         | tion    | ☐ Fail  |         |
|         | to      |         |         | PLC     |         |         |
|         | 13X03   |         |         | data    |         |         |
|         | Phase   |         |         | matches |         |         |
|         | Run     |         |         | as      |         |         |
|         | Status  |         |         | expecte |         |         |
|         |         |         |         | d.      |         |         |
+---------+---------+---------+---------+---------+---------+---------+
| 2       | P12V03  | P12V03\ | N20:251 | Source/ | ☐ Pass  |         |
|         | Transfe | _XFER_ | /13     | Destina |         |         |
|         | r       | BS.HELD |         | tion    | ☐ Fail  |         |
|         | to      |         |         | PLC     |         |         |
|         | 13X03   |         |         | data    |         |         |
|         | Phase   |         |         | matches |         |         |
|         | Held    |         |         | as      |         |         |
|         | Status  |         |         | expecte |         |         |
|         |         |         |         | d.      |         |         |
+---------+---------+---------+---------+---------+---------+---------+
| 3       | P12V03  | P12V03\ | N20:251 | Source/ | ☐ Pass  |         |
|         | Transfe | _XFER_ | /14     | Destina |         |         |
|         | r       | BS.ABRT |         | tion    | ☐ Fail  |         |
|         | to      | D       |         | PLC     |         |         |
|         | 13X03   |         |         | data    |         |         |
|         | Phase   |         |         | matches |         |         |
|         | Aborted |         |         | as      |         |         |
|         | Status  |         |         | expecte |         |         |
|         |         |         |         | d.      |         |         |
+---------+---------+---------+---------+---------+---------+---------+
| 4       | P12V03  | P12V03\ | N20:251 | Source/ | ☐ Pass  |         |
|         | Transfe | _XFER_ | /15     | Destina |         |         |
|         | r       | BS.DONE |         | tion    | ☐ Fail  |         |
|         | to      |         |         | PLC     |         |         |
|         | 13X03   |         |         | data    |         |         |
|         | Phase   |         |         | matches |         |         |
|         | Done    |         |         | as      |         |         |
|         | Status  |         |         | expecte |         |         |
|         |         |         |         | d.      |         |         |
+---------+---------+---------+---------+---------+---------+---------+

### COMPOUNDING PLC-12 DATA TO PLC-201 VERIFICATION

+---------+---------+---------+---------+---------+---------+---------+
| No.     | Data    | PLC-12  | PLC-201 | Expecte | Pass\   | Verifie |
|         | Tag/    |         |         | d       | /Fail   | d       |
|         | Descrip | Source  | Destina | Results |         | By/     |
|         | tion    |         | tion    |         | ()      | Date    |
|         |         | PLC Tag |         |         |         |         |
|         |         |         | PLC     |         |         |         |
|         |         |         | Registe |         |         |         |
|         |         |         | r       |         |         |         |
+=========+=========+=========+=========+=========+=========+=========+
| 1       | P12V03  | P12V03\ | P12V03\ | Source/ | ☐ Pass  |         |
|         | Tank    | _Unit.\ | _Unit.\ | Destina |         |         |
|         | Unit    | Allocat | Allocat | tion    | ☐ Fail  |         |
|         | Allocat | ed      | ed      | PLC     |         |         |
|         | ion     |         |         | data    |         |         |
|         | Status  |         |         | matches |         |         |
|         |         |         |         | as      |         |         |
|         |         |         |         | expecte |         |         |
|         |         |         |         | d.      |         |         |
+---------+---------+---------+---------+---------+---------+---------+
| 2       | P12V03  | S12V03W | S12V03W | Source/ | ☐ Pass  |         |
|         | Tank    | 01.WALF | 01.WALF | Destina |         |         |
|         | Weight  |         |         | tion    | ☐ Fail  |         |
|         | Loop    |         |         | PLC     |         |         |
|         | Failure |         |         | data    |         |         |
|         | Alarm   |         |         | matches |         |         |
|         |         |         |         | as      |         |         |
|         |         |         |         | expecte |         |         |
|         |         |         |         | d.      |         |         |
+---------+---------+---------+---------+---------+---------+---------+
| 3       | P12V03  | S12V03W | S12V03W | Source/ | ☐ Pass  |         |
|         | Tank    | 01.WT   | 01.WT   | Destina |         |         |
|         | Weight  |         |         | tion    | ☐ Fail  |         |
|         | Scaled  |         |         | PLC     |         |         |
|         |         |         |         | data    |         |         |
|         |         |         |         | matches |         |         |
|         |         |         |         | as      |         |         |
|         |         |         |         | expecte |         |         |
|         |         |         |         | d.      |         |         |
+---------+---------+---------+---------+---------+---------+---------+

## BATCH SERVER CONFIGURATION VERIFICATION

> Objective:

The objective of this test is to ensure that all phase data links,
including phase status, control commands, and parameters, between
InBatch and the PLC program function as expected.

Procedure:

1. Log on to Compounding Batch Management server (COMPSERVER) and go
online with the Compounding PLC program.

2. For each phase with parameters:

    a.  Change each parameter Target value in InBatch and observe the
    change in the PLC program.

    b.  Change each parameter Actual value in the PLC program and
    observe the change in InBatch.

3. For each phase:

    c.  Manually issue each phase control command (Start, Hold, Restart,
    Abort, Reset)

    d.  Observe each phase status (Interlocked, Ready, Run, Held, Done,
    Aborted) in InBatch.

4. Confirm that phase status, control commands, and parameters from
InBatch function as expected.

5. Indicate whether the actual response passes or fails the acceptance
criteria.

6. Initial and date after the test is completed.

> Acceptance Criteria:

1. Phase status, control commands, and parameter data links between
InBatch and the PLC program function as expected.

#### PHASE Transfer

*Phase Control / Status Testing*

+-----------+-----------+-----------+-----------+-----------+-----------+
| No.       | Unit/     | Phase     | Expected  | Pass\     | Verified  |
|           |           |           | Results   | /Fail     | By/ Date  |
|           | Connectio |           |           |           |           |
|           | n         |           |           | ()        |           |
+===========+===========+===========+===========+===========+===========+
| 1         | P12V03_P | Transfer  | Phase     | ☐ Pass    |           |
|           | 13X03     |           | status/co |           |           |
|           |           |           | ntrol     | ☐ Fail    |           |
|           |           |           | command,  |           |           |
|           |           |           | and       |           |           |
|           |           |           | parameter |           |           |
|           |           |           | data      |           |           |
|           |           |           | links     |           |           |
|           |           |           | between   |           |           |
|           |           |           | InBatch   |           |           |
|           |           |           | and PLC   |           |           |
|           |           |           | program   |           |           |
|           |           |           | function  |           |           |
|           |           |           | as        |           |           |
|           |           |           | expected. |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+

*Phase Parameter Verification*

+-----+-------------------------------+-----------------+--------+------------------+
| No. | (Parameter Name) Description  | Target / Actual | Pass\  | Verified By/Date |
|     |                               |                 | /Fail  |                  |
|     |                               |                 |        |                  |
|     |                               |                 | ()     |                  |
+=====+===============================+=================+========+==================+
| 1   | (Weight) Tank/ Product Weight | Target          | ☐ Pass |                  |
|     |                               |                 |        |                  |
|     |                               |                 | ☐ Fail |                  |
+-----+-------------------------------+-----------------+--------+------------------+

{#section-1 .ListParagraph}

## PROCESS PHASE LOGIC VERIFICATION

> Objective:

The objective of this test is to ensure that, for each phase:

- Phase interlock conditions are installed and successfully interlock
the phase.

- Phase alarm conditions are installed and successfully hold the
phase.

- Phase run, hold, and abort sequences function as expected.

> Procedure:

1. Logon to Compounding Batch Management server (COMPSERVER) and go
online with the Compounding PLC program and HMI application.

2. In the PLC program, verify phase interlock conditions specified are
installed and successfully interlock each phase.

3. In the PLC program, verify phase alarm conditions specified are
installed and successfully hold each phase.

4. From InBatch, execute Run, Hold, Restart, Abort, and Reset commands
for each phase.

5. Verify each phase successfully executes the specified run, hold, and
abort sequences.

6. Indicate whether the actual response passes or fails the acceptance
criteria.

7. Initial and date after the test is completed.

> Acceptance Criteria:

1. Phase interlock conditions are installed and successfully interlock
each phase.

2. Phase alarm conditions are installed and successfully hold each
phase.

3. Phase successfully executes the run, hold, and abort sequences as
expected.

### TRANSFER PHASE LOGIC VERIFICATION

#### Transfer Phase Interlock Condition Testing

+-------------+-------------+-------------+-------------+-------------+
| No.         | Interlock   | Expected    | Pass\       | Verified    |
|             | Condition   | Phase       | /Fail       | By/Date     |
|             |             | Status      |             |             |
|             |             |             | ()          |             |
+=============+=============+=============+=============+=============+
| 1           | S12V02X01.Y | Interlocked | ☐ Pass      |             |
|             | A.0         |             |             |             |
|             |             |             | ☐ Fail      |             |
|             | ROOM 2203   |             |             |             |
|             | ESTOP       |             |             |             |
|             | PRESSED     |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| 2           | S88V01A02.Y | Interlocked | ☐ Pass      |             |
|             | A.0         |             |             |             |
|             |             |             | ☐ Fail      |             |
|             | ROOM 2203   |             |             |             |
|             | O2 IN ALARM |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| 3           | NOT         | Interlocked | ☐ Pass      |             |
|             | P12V03_Uni |             |             |             |
|             | t.Allocated |             | ☐ Fail      |             |
|             |             |             |             |             |
|             | P12V03 NOT  |             |             |             |
|             | ALLOCATED   |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| 4           | NOT         | Interlocked | ☐ Pass      |             |
|             | P12V03_P13 |             |             |             |
|             | X03_Connec |             | ☐ Fail      |             |
|             | tion.Alloca |             |             |             |
|             | ted         |             |             |             |
|             |             |             |             |             |
|             | P12V03      |             |             |             |
|             | CONNECTION  |             |             |             |
|             | TO 13X03    |             |             |             |
|             | FILLER NOT  |             |             |             |
|             | ALLOCATED   |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| 5           | S12V03W01.W | Interlocked | ☐ Pass      |             |
|             | ALF\        |             |             |             |
|             | P12V03 TANK |             | ☐ Fail      |             |
|             | WEIGHT LOOP |             |             |             |
|             | FAILURE     |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| 6           | Comms_Comp | Interlocked | ☐ Pass      |             |
|             | _CP12.Faul |             |             |             |
|             | ted         |             | ☐ Fail      |             |
|             |             |             |             |             |
|             | PLC12 --    |             |             |             |
|             | PLC-201 PLC |             |             |             |
|             | COMMS       |             |             |             |
|             | FAILURE     |             |             |             |
+-------------+-------------+-------------+-------------+-------------+

#### Transfer Phase Run Sequence Testing

+-----------+-----------+-----------+-----------+-----------+-----------+
| No.       | Test      | Phase     | Expected  | Pass\     | Verified  |
|           | Instructi | Sequence  | Phase     | /Fail     | By/Date   |
|           | on        | /         | Status    |           |           |
|           |           |           |           | ()        |           |
|           |           | Expected  |           |           |           |
|           |           | Result    |           |           |           |
+===========+===========+===========+===========+===========+===========+
| 1         | Set phase | Phase     | Ready     | ☐ Pass    |           |
|           | parameter | parameter |           |           |           |
|           | s         | s         |           | ☐ Fail    |           |
|           |           | are       |           |           |           |
|           |           | configure |           |           |           |
|           |           | d         |           |           |           |
|           |           | as        |           |           |           |
|           |           | follows:  |           |           |           |
|           |           |           |           |           |           |
|           |           |   **No.** |           |           |           |
|           |           |    **Para |           |           |           |
|           |           | meter**   |           |           |           |
|           |           |  **Target |           |           |           |
|           |           |  Value**  |           |           |           |
|           |           |   ------- |           |           |           |
|           |           | -- ------ |           |           |           |
|           |           | --------- |           |           |           |
|           |           |  -------- |           |           |           |
|           |           | --------- |           |           |           |
|           |           | -         |           |           |           |
|           |           |   1       |           |           |           |
|           |           |    Weight |           |           |           |
|           |           |           |           |           |           |
|           |           |  50       |           |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| 2         | Start the | On Phase  | Run       | ☐ Pass    |           |
|           | phase     | START     |           |           |           |
|           |           | command,  |           | ☐ Fail    |           |
|           |           | phase     |           |           |           |
|           |           | RUNS. The |           |           |           |
|           |           | current   |           |           |           |
|           |           | weight of |           |           |           |
|           |           | S12V03W01 |           |           |           |
|           |           | .WT       |           |           |           |
|           |           | is        |           |           |           |
|           |           | captured, |           |           |           |
|           |           | and the   |           |           |           |
|           |           | target    |           |           |           |
|           |           | weight    |           |           |           |
|           |           | parameter |           |           |           |
|           |           | is        |           |           |           |
|           |           | subtracte |           |           |           |
|           |           | d         |           |           |           |
|           |           | from it   |           |           |           |
|           |           | to        |           |           |           |
|           |           | determine |           |           |           |
|           |           | the       |           |           |           |
|           |           | minimum   |           |           |           |
|           |           | weight on |           |           |           |
|           |           | the scale |           |           |           |
|           |           | needed to |           |           |           |
|           |           | complete  |           |           |           |
|           |           | the       |           |           |           |
|           |           | phase.    |           |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| 3         | Phase     | While     | Run       | ☐ Pass    |           |
|           | Continues | phase is  |           |           |           |
|           |           | running,  |           | ☐ Fail    |           |
|           |           | productio |           |           |           |
|           |           | n         |           |           |           |
|           |           | mode is   |           |           |           |
|           |           | requested |           |           |           |
|           |           | from the  |           |           |           |
|           |           | B+S       |           |           |           |
|           |           | Filler    |           |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| 4         | Allow     | Phase is  | Done      | ☐ Pass    |           |
|           | phase to  | DONE      |           |           |           |
|           | end       | after     |           | ☐ Fail    |           |
|           |           | S12V03W01 |           |           |           |
|           |           | .WT       |           |           |           |
|           |           | has       |           |           |           |
|           |           | reached   |           |           |           |
|           |           | the       |           |           |           |
|           |           | calculate |           |           |           |
|           |           | d         |           |           |           |
|           |           | minimum   |           |           |           |
|           |           | weight    |           |           |           |
|           |           | and the   |           |           |           |
|           |           | CMPLT     |           |           |           |
|           |           | button is |           |           |           |
|           |           | pressed   |           |           |           |
|           |           | on        |           |           |           |
|           |           | InBatch.  |           |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| 5         | Phase is  | Productio | Done      | ☐ Pass    |           |
|           | ending    | n         |           |           |           |
|           |           | mode is   |           | ☐ Fail    |           |
|           |           | no longer |           |           |           |
|           |           | requested |           |           |           |
|           |           | from the  |           |           |           |
|           |           | B+S       |           |           |           |
|           |           | Filler    |           |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| 6         | Reset the | On Phase  | Ready     | ☐ Pass    |           |
|           | phase     | RESET     |           |           |           |
|           |           | command,  |           | ☐ Fail    |           |
|           |           | phase is  |           |           |           |
|           |           | RESET.    |           |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+

#### Transfer Phase Hold Condition Testing

+-------------+-------------+-------------+-------------+-------------+
| No.         | Hold        | Expected    | Pass\       | Verified    |
|             | Condition   | Phase       | /Fail       | By/Date     |
|             |             | Status      |             |             |
|             |             |             | ()          |             |
+=============+=============+=============+=============+=============+
| 1           | S12V02X01.Y | Held        | ☐ Pass      |             |
|             | A.0         |             |             |             |
|             |             |             | ☐ Fail      |             |
|             | ROOM 2203   |             |             |             |
|             | ESTOP       |             |             |             |
|             | PRESSED     |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| 2           | S88V01A02.Y | Held        | ☐ Pass      |             |
|             | A.0         |             |             |             |
|             |             |             | ☐ Fail      |             |
|             | ROOM 2203   |             |             |             |
|             | O2 IN ALARM |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| 3           | NOT         | Held        | ☐ Pass      |             |
|             | P12V03_Uni |             |             |             |
|             | t.Allocated |             | ☐ Fail      |             |
|             |             |             |             |             |
|             | P12V03 NOT  |             |             |             |
|             | ALLOCATED   |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| 4           | NOT         | Held        | ☐ Pass      |             |
|             | P12V03_P13 |             |             |             |
|             | X03_Connec |             | ☐ Fail      |             |
|             | tion.Alloca |             |             |             |
|             | ted         |             |             |             |
|             |             |             |             |             |
|             | P12V03      |             |             |             |
|             | CONNECTION  |             |             |             |
|             | TO 13X03    |             |             |             |
|             | FILLER NOT  |             |             |             |
|             | ALLOCATED   |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| 5           | S12V03W01.W | Held        | ☐ Pass      |             |
|             | ALF\        |             |             |             |
|             | P12V03 TANK |             | ☐ Fail      |             |
|             | WEIGHT LOOP |             |             |             |
|             | FAILURE     |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| 6           | Comms_Comp | Held        | ☐ Pass      |             |
|             | _CP12.Faul |             |             |             |
|             | ted         |             | ☐ Fail      |             |
|             |             |             |             |             |
|             | PLC12 --    |             |             |             |
|             | PLC-201 PLC |             |             |             |
|             | COMMS       |             |             |             |
|             | FAILURE     |             |             |             |
+-------------+-------------+-------------+-------------+-------------+

#### Transfer Phase Hold Sequence Testing

+-----------+-----------+-----------+-----------+-----------+-----------+
| No.       | Test      | Phase     | Expected  | Pass\     | Verified  |
|           | Instructi | Sequence  | Phase     | /Fail     | By/Date   |
|           | on        | /         | Status    |           |           |
|           |           |           |           | ()        |           |
|           |           | Expected  |           |           |           |
|           |           | Result    |           |           |           |
+===========+===========+===========+===========+===========+===========+
| 1         | Hold the  | On Phase  | Held      | ☐ Pass    |           |
|           | phase     | HOLD      |           |           |           |
|           |           | command,  |           | ☐ Fail    |           |
|           |           | phase is  |           |           |           |
|           |           | HELD.     |           |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| 2         | Phase is  | Productio | Held      | ☐ Pass    |           |
|           | held      | n         |           |           |           |
|           |           | mode is   |           | ☐ Fail    |           |
|           |           | no longer |           |           |           |
|           |           | requested |           |           |           |
|           |           | from the  |           |           |           |
|           |           | B+S       |           |           |           |
|           |           | Filler    |           |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+

#### Transfer Phase Abort Condition Testing

+-----------+-----------+-----------+-----------+-----------+-----------+
| No.       | Abort     | Phase     | Expected  | Pass\     | Verified  |
|           | Condition | Sequence  | Phase     | /Fail     | By/Date   |
|           |           | /         | Status    |           |           |
|           |           |           |           | ()        |           |
|           |           | Expected  |           |           |           |
|           |           | Result    |           |           |           |
+===========+===========+===========+===========+===========+===========+
| 1         | N/A       |           |           |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+

#### Transfer Phase Abort Sequence Testing

+-----------+-----------+-----------+-----------+-----------+-----------+
| No.       | Test      | Phase     | Expected  | Pass\     | Verified  |
|           | Instructi | Sequence  | Phase     | /Fail     | By/Date   |
|           | on        | /         | Status    |           |           |
|           |           |           |           | ()        |           |
|           |           | Expected  |           |           |           |
|           |           | Result    |           |           |           |
+===========+===========+===========+===========+===========+===========+
| 1         | Abort the | On Phase  | Aborted   | ☐ Pass    |           |
|           | phase     | ABORT     |           |           |           |
|           |           | command,  |           | ☐ Fail    |           |
|           |           | phase is  |           |           |           |
|           |           | ABORTED.  |           |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| 2         | Phase is  | Productio | Aborted   | ☐ Pass    |           |
|           | aborted   | n         |           |           |           |
|           |           | mode is   |           | ☐ Fail    |           |
|           |           | no longer |           |           |           |
|           |           | requested |           |           |           |
|           |           | from the  |           |           |           |
|           |           | B+S       |           |           |           |
|           |           | Filler    |           |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+
| 3         | Reset the | On Phase  | Ready     | ☐ Pass    |           |
|           | phase     | RESET     |           |           |           |
|           |           | command,  |           | ☐ Fail    |           |
|           |           | phase is  |           |           |           |
|           |           | RESET.    |           |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+

## RECIPE VERIFICATION

> Objective:

The objective of this test is to ensure that the new phases were added
to the recipes as expected.

Procedure:

1. Logon to Compounding Batch Management server (COMPSERVER).

2. Confirm that the appropriate phases were added to the recipes listed
below.

3. Indicate whether the actual response passes or fails the acceptance
criteria.

4. Initial and date after the test is completed.

> Acceptance Criteria:

1. Recipes include the new phases.

+-----------+-----------+-----------+-----------+-----------+-----------+
| No.       | Recipe    | Phase[s\ | Expected  | Pass\     | Verified  |
|           |           | ]         | Results   | /Fail     | By/ Date  |
|           |           |           |           |           |           |
|           |           |           |           | ()        |           |
+===========+===========+===========+===========+===========+===========+
| 1         | 12V03_XF | -   Trans | Recipe    | ☐ Pass    |           |
|           | ER2_BS   | fer       | includes  |           |           |
|           |           |           | specified | ☐ Fail    |           |
|           |           |           | phases as |           |           |
|           |           |           | expected. |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+

## RECIPE EXECUTION

> Objective:

The objective of this test is to ensure that the new phases added to
the recipes function as expected.

Procedure:

1. Logon to Compounding Batch Management server (COMPSERVER).

2. Execute the recipes specified below.

3. Indicate whether the actual response passes or fails the acceptance
criteria.

4. Initial and date after the test is completed.

> Acceptance Criteria:

1. Recipe executes as expected.

+-----------+-----------+-----------+-----------+-----------+-----------+
| No.       | Recipe    | Test      | Expected  | Pass\     | Verified  |
|           |           | Instructi | Results   | /Fail     | By/ Date  |
|           |           | on        |           |           |           |
|           |           |           |           | ()        |           |
+===========+===========+===========+===========+===========+===========+
| 1         | 12V03_XF | Execute   | Transfer  | ☐ Pass    |           |
|           | ER2_BS   | the       | phase     |           |           |
|           |           | recipe    | executes  | ☐ Fail    |           |
|           |           | and       | successfu |           |           |
|           |           | ensure    | lly.      |           |           |
|           |           | that the  |           |           |           |
|           |           | Transfer  |           |           |           |
|           |           | phase     |           |           |           |
|           |           | executes  |           |           |           |
|           |           | successfu |           |           |           |
|           |           | lly.      |           |           |           |
+-----------+-----------+-----------+-----------+-----------+-----------+

## DISTURBANCE TESTS AND VERIFICATIONS

> N/A -- There are no expected disturbance tests and verifications
needed for this protocol.

## CLEANING TESTS AND VERIFICATIONS

> N/A - There are no expected cleaning tests and verifications needed
for this protocol.

## VACUUM HOLD TEST

> N/A -- There is no expected vacuum hold test needed for this protocol.

## PRESSURE HOLD TEST

> N/A -- There is no expected pressure hold test needed for this
protocol.

# ATTACHMENT LIST

> List all attachments expected and created in the execution of this
protocol. Verify that all attachments are labeled correctly;
indicating a title, attachment number, and page numbers.

---

**Document Number**   **Document Title**   **Verified By/Date**

---
