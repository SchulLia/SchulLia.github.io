<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Funde & Schlösser in anderen Templates“.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://cdn.jsdelivr.net/gh/LiaTemplates/algebrite@0.6.3/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Funde & Schlösser in anderen Templates

> **Was passiert hier?** Der Kurskopf enthält bereits alle benötigten Importe für Canvas/OCR und Loot. Sammle den roten Schlüssel, öffne das Schloss und anschließend die Zeichenfläche – erst dort erscheint die Schatztruhe.

@Ressourcen(0, 0)

@Schluessel(rot)

Berechne die Summe.

10 + 5 = [[15]]
@canvas
**********
$10+5=15$
**********

@Schatztruhe(canvasocr)
@Schloss(canvasocr, rot)
