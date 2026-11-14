<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Textkorrektur & Strichlisten“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/main/README.md
-->

# Textkorrektur & Strichlisten

> **Was passiert hier?** Das erste Makro stellt ein mehrzeiliges Feld bereit und prüft den vollständig korrigierten Satz. Das zweite rendert die Zahl 12 als Strichliste mit der üblichen Fünferbündelung und kann auch inline oder in Tabellen verwendet werden.

Gib den vollständig korrigierten Satz an.
@orthographytext(`<!-- data-solution-button="2" -->`,`Der Hnd rennt.`,`Der Hund rennt.`)

Stelle die Zahl 12 als Strichliste dar.
@Strichliste(12)
