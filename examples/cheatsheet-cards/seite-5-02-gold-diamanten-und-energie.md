<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Gold, Diamanten & Energie“.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Gold, Diamanten & Energie

> **Was passiert hier?** Die drei Funde vergeben jeweils ihre angegebene Ressourcenmenge: Gold in Inhaltsverzeichnis und Menü, Diamanten foliengebunden und Energie im Modusbereich. Energie funktioniert nur, wenn `@Ressourcen` einen dritten Startwert enthält.

@Ressourcen(0, 0, 0)

@Schatztruhe(3; toc; menu)

@Diamanttruhe(2; anker)

@Energiekiste(3; mode)
