<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Erklärhinweis & Tooltip“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/master/README.md
-->

# Erklärhinweis & Tooltip

> **Was passiert hier?** Das Explain-Makro erzeugt einen gestuften Lösungshinweis passend zu den Themen, die beim Quiz über ADetails hinterlegt sind. Der umschließende `notip`-Bereich unterdrückt automatische Glossar-Tooltips.

Berechne die Summe.
3 + 4 = [[7]]
[[?]] @Explain
**********
$3+4=7$
**********

<div class="notip">
Ohne Glossar-Tooltip
</div>
