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

@global(data-solution-button=3
        data-hint-button=2)

@globalforced(
  data-hint-button=4)
