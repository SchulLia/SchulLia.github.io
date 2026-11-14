<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Polyominos: eine Zielsumme legen“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-pentominos/main/README.md
-->

# Polyominos: eine Zielsumme legen

> **Was passiert hier?** Ein einzelner Polyomino-Stein wird verschoben und gedreht, bis die Zahlen seiner belegten Felder zusammen 45 ergeben. Es werden nicht mehrere Steine addiert; JSXGraph, Coordinate und Pentominos müssen in dieser Reihenfolge importiert sein.

Bestimme eine Lage des Steins, in der seine Felder die Zielsumme 45 ergeben.
@PentominoQuiz(45,`name=P;type=I2;numbers=[1,2]`,`<!-- data-solution-button="off" -->`)
**********
Gültig ist jede Lage des Steins, deren belegte Felder zusammen 45 ergeben.
**********

Bestimme eine angebotene Form und Lage mit der Zielsumme 65.
@PentominoDockQuizAuswahl(65,`I2,L3,O4`,`<!-- data-solution-button="off" -->`)
**********
Gültig ist jede angebotene Form, deren belegte Felder zusammen 65 ergeben.
**********
