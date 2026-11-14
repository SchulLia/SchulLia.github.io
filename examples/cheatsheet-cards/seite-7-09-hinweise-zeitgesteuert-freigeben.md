<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Hinweise zeitgesteuert freigeben“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/main/README.md
-->

# Hinweise zeitgesteuert freigeben

> **Was passiert hier?** Der Hinweis wird 20 Sekunden nach dem ersten Prüfen freigeschaltet. Dieser Hinweistimer läuft unabhängig von einem möglichen Lösungstimer und könnte alternativ beim Öffnen oder per Klick starten.

Berechne die Summe.

<!-- data-hint-timer="20s" data-hint-timer-start="oncheck" data-hint-badge="off" -->
7 + 8 = [[15]]
[[?]] Ergänze zuerst auf 10.
**********
$7+8=15$
**********
