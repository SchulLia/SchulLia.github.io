<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Funktionsscharen & Regler“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md
-->

# Funktionsscharen & Regler

> **Was passiert hier?** Auf dem interaktiven Board `B` erzeugt `@Schar` die Parameterregler für eine lineare Funktionsschar. Der zusätzliche Regler verändert den Parameter `a` der Parabel zwischen −3 und 3 in Schritten von 0,1.

@Koordinatensystem(`xmin=-5;xmax=5;ymin=-5;ymax=5;width=800;id=B`)

@AchsenBeschriftung(`id=B;xlabel=$x$;ylabel=$y$`)

@Schar(`f;x;mx+n;B;term=1;blue`)

@Regler(`B;a;-3;3;0.1;1;red`)
@PlotFunktion(`B;g;a*x^2;red`)
