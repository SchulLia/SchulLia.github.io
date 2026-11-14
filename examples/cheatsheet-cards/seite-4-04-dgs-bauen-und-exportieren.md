<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „DGS: bauen & exportieren“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md
-->

# DGS: bauen & exportieren

> **Was passiert hier?** Das DGS stellt ausgewählte Konstruktionswerkzeuge im Board `B` bereit, hier zusätzlich einen Zirkel. Über die Objektliste kann die fertige Konstruktion als Makroblock exportiert und anschließend im LiveEditor weiterbearbeitet werden.

@Koordinatensystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=800;id=B`)

@DGS(`B;tools=[200;310;700];restrictions=[200;300]`)

@Zirkel(`B`)

@Geodreieck(`B`)
