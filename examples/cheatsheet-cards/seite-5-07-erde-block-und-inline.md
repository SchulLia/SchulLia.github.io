<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Erde: Block & Inline“.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Erde: Block & Inline

> **Was passiert hier?** Der Block verbirgt beliebigen LiaScript-Inhalt unter einer Erdschicht, bis er mit der Schaufel geöffnet wird. Die Inline-Variante gibt nur einen einzeiligen Inhalt frei und benötigt deshalb kein Endmakro.

@Lupe
@Schaufel

@Erdhaufen(unsichtbar)
Vergrabener Inhalt
@EndeErdhaufen

Text @Erdhaufen.inline(Hinweis)
