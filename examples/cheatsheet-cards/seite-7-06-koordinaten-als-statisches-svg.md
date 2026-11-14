<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Koordinaten als statisches SVG“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md
-->

# Koordinaten als statisches SVG

> **Was passiert hier?** `static=1` rendert das Koordinatensystem mit seinen festen Objekten als skalierbares SVG. Die Darstellung eignet sich für Abbildungen, bietet aber keine DGS-Interaktion oder interaktiven Quizze.

@Koordinatensystem(`xmin=-3;xmax=3;ymin=-2;ymax=4;id=S;static=1`)

@Punkt(`S;A;1;2;red;1;fix`)
