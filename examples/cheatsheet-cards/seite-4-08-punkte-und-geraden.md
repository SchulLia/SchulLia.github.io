<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Punkte & Geraden“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md
-->

# Punkte & Geraden

> **Was passiert hier?** Der erste Punkt wird an festen Koordinaten angezeigt, der zweite kann von Lernenden erzeugt werden. Gerade und Vektor greifen danach über ihre Namen auf bereits vorhandene Punkte zu.

@Koordinatensystem(`xmin=-5;xmax=5;ymin=-4;ymax=5;width=800;id=B`)

@Punkt(`B;A;2;3;#e63946;1;fix`)

@ErzeugePunkt(`B;P;1;2`,`<!-- -->`)

@Gerade(`B;[A;P];#457b9d;g`)

@Vektor(`B;[A;P];#2a9d8f;v`)
