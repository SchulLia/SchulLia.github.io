<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Zweiweg- & Einwegportale“.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Zweiweg- & Einwegportale

> **Was passiert hier?** Das Zweiwegportal führt von dieser ersten Folie zur zweiten und erzeugt dort automatisch einen Rückweg. Auf der zweiten Folie führt ein Einwegportal weiter zur dritten; dort entsteht kein automatisches Rückportal.

@Portal(2)

## Ziel des Zweiwegportals

Hier erscheint nach der Portalreise automatisch das Rückportal zur ersten Folie.

@Einwegportal(3)

## Ziel des Einwegportals

Diese dritte Folie ist ein vorhandenes, von der zweiten Folie verschiedenes Ziel. Die normale Kursnavigation bleibt weiterhin nutzbar.
