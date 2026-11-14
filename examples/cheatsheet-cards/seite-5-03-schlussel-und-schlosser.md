<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Schlüssel & Schlösser“.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Schlüssel & Schlösser

> **Was passiert hier?** Zwei sichtbare blaue Schlüssel stehen für zwei unabhängige Schlösser bereit. Eines sperrt die Prüfschaltfläche des Quiz, das andere das Inhaltsverzeichnis; jedes Öffnen verbraucht genau einen passenden Schlüssel.

@Schluessel(blau)
@Schluessel(blau)

Berechne die Summe.

2 + 3 = [[5]]
**********
$2+3=5$
**********

@Schloss(check, blau)
@Schloss(toc, blau)
