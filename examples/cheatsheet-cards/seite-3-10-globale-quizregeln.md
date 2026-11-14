<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Globale Quizregeln“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-globalquiz/main/README.md
-->

# Globale Quizregeln

> **Was passiert hier?** Die Makros setzen Vorgaben für alle folgenden Quizze. Bei `@global` dürfen lokale Werte abweichen, während `@globalforced` lokale Einstellungen verbindlich überschreibt.

@global(data-solution-button=3 data-hint-button=2)

Berechne die Summe.

3 + 4 = [[7]]
[[?]] Zerlege die 4 in 3 und 1.
[[?]] $3+3+1=7$
**********
$3+4=7$
**********

@globalforced(data-hint-button=4)

Berechne die zweite Summe.

5 + 6 = [[11]]
[[?]] Verdopple zuerst die 5.
[[?]] Es fehlt dann noch 1.
[[?]] $5+5+1=11$
[[?]] Die Lösung ist zweistellig.
**********
$5+6=11$
**********
