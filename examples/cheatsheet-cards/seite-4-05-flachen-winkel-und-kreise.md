<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Flächen, Winkel & Kreise“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md
-->

# Flächen, Winkel & Kreise

> **Was passiert hier?** Die Makros erzeugen aus benannten Punkten eine Polygonfläche, einen Winkel, einen Kreis und einen Kreisbogen. Der Kreissektor verwendet Mittelpunkt, Radiuspunkt und einen zweiten Schenkelpunkt.

@Koordinatensystem(`xmin=-4;xmax=4;ymin=-2;ymax=4;width=800;id=B`)

@Punkt(`B;A;-3;0;#e63946;0;fix`)
@Punkt(`B;P;0;3;#e63946;0;fix`)
@Punkt(`B;C;3;0;#e63946;0;fix`)
@Punkt(`B;M;0;0;#457b9d;0;fix`)
@Punkt(`B;Q;3;0;#457b9d;0;fix`)

@Flaeche(`B;[A;P;C];#e9c46a;0.25;inhalt=1;umfang=1`)

@Winkel(`B;alpha;[A;P;C];#e76f51;0.8;Wert=1`)

@Kreis(`B;k;M;#264653;0.2;radius=P;inhalt=1`)

@Kreissektor(`B;[M;P;Q];#e9c46a;0.25;s;inhalt=1;umfang=1`)
