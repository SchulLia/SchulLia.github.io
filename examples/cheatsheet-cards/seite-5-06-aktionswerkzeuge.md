<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zu Gießkanne und Pflanze.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Gießkanne & Pflanze

> **Was passiert hier?** Die Gießkanne muss vor den Pflanzen erreichbar sein. Nach dem Einsammeln und Aktivieren bringt sie jede Pflanze zum Blühen; erst ein anschließender Klick auf die Blüte gibt den Inhalt frei. Das Beispiel zeigt die Blockform und die ungepaarte Inline-Form gemeinsam.

@Giesskanne

@Pflanze
Die geöffnete Blüte gibt diesen Text frei.
@EndePflanze

Mitten im Satz wächst @Pflanze.inline(eine sprechende Blüte).
