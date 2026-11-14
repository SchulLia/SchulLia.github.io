<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Kachelfolgen“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/main/README.md
-->

# Kachelfolgen

> **Was passiert hier?** Die Buchstabenkacheln werden den passenden Zielfeldern zugeordnet. Die einfache Variante akzeptiert die Ziele in beliebiger Reihenfolge; die nummerierte Variante könnte sie schrittweise aufdecken.

Ordne die Buchstaben den passenden Gruppen zu.

@Kachelfolge(`[->[(A)|B]] [->[(C)|D]]`)
**********
A gehört zur ersten und C zur zweiten Gruppe.
**********

Bringe die Zahlen in die vorgegebene Reihenfolge.

@KachelfolgeN(`[->[(1)|2]] [->[(2)|3]]`)
**********
Die richtige Reihenfolge lautet 1, 2.
**********
