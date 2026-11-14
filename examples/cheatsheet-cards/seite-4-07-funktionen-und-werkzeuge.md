<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Funktionen & Werkzeuge“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md
-->

# Funktionen & Werkzeuge

> **Was passiert hier?** Eine Funktion wird im Board gezeichnet, am angegebenen Berührpunkt um eine Tangente und anschließend um eine Wertetabelle ergänzt. Regression und Rekonstruktion stellen weitere Zeichen- und Prüfwerkzeuge bereit.

@Koordinatensystem(`xmin=-5;xmax=5;ymin=-4;ymax=5;width=800;id=B`)

@PlotFunktion(`B;f;0.5*x^2-2;red`)

@Tangente(`B;f;[2;0];magenta;t;T`)

@Tabelle(`n=3;x;f;P;id=B`)

@Regression(`B`)

@Rekonstruktion(`B;2x-1;0.1`)
