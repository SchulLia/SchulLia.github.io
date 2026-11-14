<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Algebrite: Einheiten mitprüfen“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/LiaTemplates/Algebrite/b5a675525d0be71e3cc37476a7fba065e9590f62/README.md
-->

# Algebrite: Einheiten mitprüfen

> **Was passiert hier?** Algebrite prüft Zahlenwert und Einheit gemeinsam und erkennt, dass `1500 m` und `1,5 km` dieselbe Länge angeben. Eine fehlende oder unpassende Einheit wird deshalb abgelehnt.

Eine Strecke ist $1{,}5\,\mathrm{km}$ lang. Gib dieselbe Länge in Metern an.
Länge: [[1.5km]]
@Algebrite.check(1.5km,units=1)
**********
Beispielsweise sind $1{,}5\,\mathrm{km}$ und $1500\,\mathrm{m}$ gleichwertig.
**********

Eine Messung soll $1{,}5\,\mathrm{km}$ ergeben. Gib einen Messwert an, der höchstens $20\,\mathrm{m}$ davon abweicht.
Länge: [[1.5km]]
@Algebrite.check2(1.5km,20m)
**********
Zulässig sind Längen von $1{,}48\,\mathrm{km}$ bis $1{,}52\,\mathrm{km}$ einschließlich der beiden Grenzen.
**********
