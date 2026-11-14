<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Ressourcenbonus & Timerkosten“.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Ressourcenbonus & Timerkosten

> **Was passiert hier?** Im ersten Beispiel geben übriges Gold und Diamanten am Kursende zusätzliche Highscorepunkte; Energie selbst zählt nicht als Bonus. Nur mit einem dritten Ressourcenwert ist Energie begrenzt, und dann kostet auch ein erfolgreicher manueller Timerstart eine Energie.

@Ressourcen(10, 3, 2, goldwert=100, diamantwert=250)

Starte den Timer und berechne die Summe.

<!-- data-solution-timer="10s" data-solution-timer-start="onclick" -->
4 + 5 = [[9]]
**********
$4+5=9$
**********
