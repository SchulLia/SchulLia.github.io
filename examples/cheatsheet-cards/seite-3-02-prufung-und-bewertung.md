<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Prüfung & Bewertung“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/master/README.md
-->

# Prüfung & Bewertung

> **Was passiert hier?** Die Prüfung wird auf 60 Minuten begrenzt. `@ADetails(2;Addition,Grundrechenarten)` ordnet dem unmittelbar vorhergehenden Quiz zwei Bewertungseinheiten und die Themen „Addition“ und „Grundrechenarten“ zu; `@Auswertung` fasst Punkte und Themen zusammen.

@Exam(60min)

Berechne die Summe.
3 + 4 = [[7]]
[[?]] @Explain
**********
$3+4=7$
**********

@ADetails(2;Addition,Grundrechenarten)

@Auswertung(F12;Tab;Time)
