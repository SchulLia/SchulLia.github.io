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

> **Was passiert hier?** Eine feste Abfolge wird zielweise geprüft: Jede Kachel muss im inhaltlich passenden Feld liegen. Dafür umschließt die Klasse `Kachel` die native LiaScript-Aufgabe. Das reihenfolgeunabhängige Kachelfolge-Makro wäre hier ungeeignet, weil es die richtigen Kacheln ausdrücklich in beliebiger Reihenfolge akzeptiert. Die native Musterlösung setzt deshalb die drei richtigen Inhalte ein und liefert keinen booleschen Skriptwert.

Ordne die Arbeitsschritte den Positionen 1 bis 3 so zu, dass die Reihenfolge **Planen – Überarbeiten – Prüfen** entsteht.

<div class="Kachel">

<!-- data-randomize="true" -->
Zuerst [->[(Planen)|Überarbeiten|Prüfen]], danach [->[Planen|(Überarbeiten)|Prüfen]] und zuletzt [->[Planen|Überarbeiten|(Prüfen)]].

**********
Die richtige Reihenfolge lautet: **Planen – Überarbeiten – Prüfen**.
**********

</div>
