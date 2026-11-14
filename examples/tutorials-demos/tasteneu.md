<!--
author: Name
version: 0.0.1
language: de
comment: Tasten für die Navigation auf einzelnen Folien neu belegen.
tags: LiaScript, Tastatur, Navigation, Tastenkürzel
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-globalquiz/main/README.md
-->

# TasteNeu: weiter mit der Leertaste

> **Was passiert hier?** `@TasteNeu` weist der Leertaste nur auf dieser Folie die Aktion `naechsteFolie` zu. Eingabefelder und andere interaktive Komponenten behalten ihre eigene Tastaturbedienung.

@TasteNeu(Leertaste=naechsteFolie;lokal)

Drücke die Leertaste, um zur nächsten Folie zu wechseln. Die normalen Navigationsschaltflächen bleiben ebenfalls verfügbar.

# TasteNeu: zurück mit R

> **Was passiert hier?** Auf dieser Folie führt die Taste `R` mit `ersteFolie` zurück an den Kursanfang. Durch die lokale Geltung endet die Belegung beim Verlassen der Folie.

@TasteNeu(R=ersteFolie;lokal)

Drücke `R`, um zur ersten Folie zurückzukehren.
