<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Geschenke & verschachtelte Items“.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Geschenke & verschachtelte Items

> **Was passiert hier?** Ein Geschenk wird per Klick geöffnet; erst dann entsteht das enthaltene Item. Hat dieses Item eigene Klammerparameter, muss sein vollständiger Makroaufruf – wie beim blauen Schlüssel – in Backticks stehen.

@Geschenk(@Katze)

@Geschenk(`@Schluessel(blau)`)
