<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Algebrite: Einheiten mitprüfen“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
-->

# Algebrite: Einheiten mitprüfen

> **Was passiert hier?** Algebrite prüft neben dem Zahlenwert auch die Einheit und erkennt `1500 m` als gleichwertig zu `1.5 km`. Eine fehlende oder unpassende Einheit wird deshalb abgelehnt.

Gib die Länge in einer gleichwertigen Einheit an.
Länge: [[1.5km]]
@Algebrite.check(1.5km,units=1)
**********
Beispielsweise sind $1{,}5\,\mathrm{km}$ und $1500\,\mathrm{m}$ gleichwertig.
**********

Gib eine Länge innerhalb der Toleranz von 20 Metern an.
Länge: [[1.5km]]
@Algebrite.check2(1.5km,20m)
**********
Gültig sind Längen zwischen $1{,}48\,\mathrm{km}$ und $1{,}52\,\mathrm{km}$.
**********
