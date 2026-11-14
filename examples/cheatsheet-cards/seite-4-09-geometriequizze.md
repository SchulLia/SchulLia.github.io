<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Geometriequizze“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md
-->

# Geometriequizze

> **Was passiert hier?** Das DGS gibt Punkt-, Polygon- und Radiererwerkzeug frei. Lernende konstruieren damit selbst ein Polygon; das Quiz prüft Eckenzahl, Umfang und Toleranz.

@Koordinatensystem(`xmin=-5;xmax=5;ymin=-5;ymax=5;id=B`)

@DGS(`B;tools=[200;510;920]`)

**Konstruiere** ein Dreieck mit dem Umfang 12.

@UmfangQuiz(`B;3;12;0.05`,`<!-- data-solution-button="5" -->`)
**********
Gültig ist jedes Dreieck mit dem Umfang 12 innerhalb der Toleranz.
**********
