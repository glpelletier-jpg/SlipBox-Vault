---
title: Understanding Basic Electronics
date: 2026-06-04
type: literature
source-type: book
source-title: Understanding Basic Electronics
source-author: 
source-link: 
tags: [literature]
book_note: "[[05-Resources/Books/Understanding Basic Electronics|Reading tracker]]"
---

# Understanding Basic Electronics

> Literature notes capture what a source says — **in your own words**. One note per source.
> Then ask: what does this mean *for me*? That answer becomes a permanent note.

---

## The source in one sentence

>

---

## Key ideas (in your own words)

1. The distinction between analog and linear circuits matters for troubleshooting: in a linear circuit, the output is proportional to the input. A 4-20mA process loop is linear — 4mA = 0%, 20mA = 100%, and any value in between scales proportionally. When a reading seems stuck or pegged, the linearity is broken somewhere.

2. Amplifiers increase signal amplitude while preserving the signal shape. In automation, signal conditioning performs the same role — boosting weak sensor signals to usable levels without distorting the measurement. Understanding amplifier classes matters for both HAM radio transmitters and industrial power electronics.

3. Electronics is the manipulation of electrons to process information and control power. The split between analog (continuous) and digital (discrete) circuits maps directly onto the IT/OT divide — analog sensors feeding digital PLCs, which drive analog actuators. That interface is where most field problems happen.

---

## Quotes worth keeping

> Analog circuits are sometimes called linear circuits, in which there generally is an input (such as the voice signal from the microphone in a public address system) and an output (a bigger, or amplified, version of the voice signal that comes out of the speaker). What makes such an amplifier linear is that if you increase the size (the fancy term for this is amplitude) of the input signal — perhaps by talking louder into the microphone — the output signal also gets bigger.

---

## My reaction

> The analog/digital framing connects directly to OT system architecture. The sensors are analog, the PLC is digital, and the interface between them (4-20mA loops, discrete I/O) is where most field problems happen. Understanding both domains makes me a better troubleshooter.

---

## Permanent notes spawned

- [[]]

---

## Connections

- [[]]

---

**Links:** [[06-Zettelkasten/06-Zettelkasten|Zettelkasten]]
