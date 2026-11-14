<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Puzzleteile & Puzzletore“.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Puzzleteile & Puzzletore

> **Was passiert hier?** Die roten Puzzleteile 1 und 2 müssen am Tor in der geforderten Reihenfolge 2, 1 eingesetzt werden. Ohne Folienbindung wirkt das Tor als Navigationstor; mit `anker` würde es den folgenden Folieninhalt sperren.

@Puzzleteil(rot; 1)
@Puzzleteil(rot; 2)

Ordne die roten Puzzleteile den Positionen 2, 1 zu.
@Puzzletor(rot; [[2;1]])

@Puzzleteil(blau; 1)

Ordne das blaue Puzzleteil der einzigen Position zu.
@Puzzletor(blau; [[1]]; anker)

## Bereich hinter dem Tor

Dieser Folieninhalt wird erst nach dem korrekt gelösten blauen Puzzletor freigegeben.
