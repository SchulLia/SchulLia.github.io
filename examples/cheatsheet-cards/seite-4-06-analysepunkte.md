<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Analysepunkte“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md
-->

# Analysepunkte

> **Was passiert hier?** Die benannte Funktion `f` wird dynamisch auf Nullstellen, Extrem- und Wendepunkte untersucht. Das letzte Makro markiert zusätzlich die Schnittpunkte zweier Funktionen, Geraden oder Kreise.

@Koordinatensystem(`xmin=-4;xmax=4;ymin=-5;ymax=5;width=800;id=B`)

@PlotFunktion(`B;f;x^3-3*x;red`)
@PlotFunktion(`B;g;x;blue`)

@Nullstellen(`B;f;blue;N;wert=1`)

@Extrempunkte(`B;f;green;E;wert=1`)

@Wendepunkte(`B;f;magenta;W;wert=1`)

@Schnittpunkt(`B;f;g;orange;S;wert=1`)
