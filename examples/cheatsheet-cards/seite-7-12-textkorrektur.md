<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Textkorrektur“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/main/README.md
-->

# Textkorrektur

> **Was passiert hier?** Das Makro stellt ein mehrzeiliges Eingabefeld bereit und vergleicht den vollständig korrigierten Satz mit dem hinterlegten Zieltext. `doublespacehelp="on"` gleicht dabei zusätzliche Leerzeichen, Tabulatoren und Zeilenumbrüche aus. Nach zwei Fehlversuchen kann die Lösung eingeblendet werden.

Gib den vollständig korrigierten Satz an.
@orthographytext(`<!-- data-solution-button="2" doublespacehelp="on" -->`,`Der Hnd rennt.`,`Der Hund rennt.`)
