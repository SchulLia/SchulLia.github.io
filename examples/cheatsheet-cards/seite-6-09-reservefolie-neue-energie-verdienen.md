<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Reservefolie: neue Energie verdienen“.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Reservefolie: neue Energie verdienen

> **Was passiert hier?** Beim Prüfen der Startaufgabe fällt der Energiebestand von eins auf null und öffnet automatisch die Folie **„Energiereserve“**. Auf dieser Reservefolie kostet das Prüfen keine Energie; die erstmals richtig gelöste Aufgabe gibt zwei Energie und führt anschließend zurück in den Kurs.

@Ressourcen(0, 0, 1)

Löse die Startaufgabe. Beim Prüfen sinkt die Energie von eins auf null und die Reservefolie öffnet sich automatisch.

1 + 1 = [[2]]
**********
$1+1=2$
**********

## Energiereserve

@Reservefolie(2)

Berechne die Summe.
3 + 3 = [[6]]
**********
$3+3=6$
**********
