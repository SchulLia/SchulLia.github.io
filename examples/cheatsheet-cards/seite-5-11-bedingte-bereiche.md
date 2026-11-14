<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Bedingte Bereiche“.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Bedingte Bereiche

> **Was passiert hier?** Der umschlossene Inhalt erscheint dauerhaft, sobald mindestens fünf Gold erreicht sind. `spawn` ist dafür die einzige gültige Aktion; Start und Ende müssen allein und korrekt verschachtelt auf derselben Folie stehen.

@Ressourcen(0, 0)

Sammle zuerst die Truhe mit fünf Goldmünzen ein.

@Schatztruhe(5)

@lootif(Gold >= 5; spawn)
Dieser Inhalt erscheint dauerhaft.
@Endelootif
