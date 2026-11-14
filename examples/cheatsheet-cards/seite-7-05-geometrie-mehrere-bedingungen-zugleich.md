<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Geometrie: mehrere Bedingungen zugleich“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md
-->

# Geometrie: mehrere Bedingungen zugleich

> **Was passiert hier?** Alle Bedingungen beziehen sich auf dasselbe von Lernenden konstruierte Polygon im Board `B`. Akzeptiert wird nur ein Rechteck, das kein Quadrat ist und zugleich Fläche 20 sowie Umfang 18 innerhalb der angegebenen Toleranz besitzt.

@Koordinatensystem(`xmin=-2;xmax=7;ymin=-2;ymax=6;id=B`)

Konstruiere ein Rechteck, das kein Quadrat ist, mit dem Flächeninhalt 20 und dem Umfang 18.
@GeometrieQuiz(`B;4;Form(Rechteck;exklusiv=Quadrat);Flaeche(20;0.05);Umfang(18;0.05)`,`<!-- -->`)
**********
Ein Rechteck mit den Seitenlängen 4 und 5 erfüllt alle Bedingungen.
**********
