<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zu Schaufel und Erde.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Schaufel & Erde

> **Was passiert hier?** Die Schaufel muss vor dem ersten Erdhaufen erreichbar sein. Nach dem Einsammeln und Aktivieren legt sie den Inhalt des Blockes sowie den kurzen Fund im Fließtext frei. Suchmechaniken der Lupe werden hier bewusst nicht beigemischt.

@Schaufel

@Erdhaufen
Vergrabener Inhalt
@EndeErdhaufen

Mitten im Satz liegt @Erdhaufen.inline(ein vergrabener Hinweis).
