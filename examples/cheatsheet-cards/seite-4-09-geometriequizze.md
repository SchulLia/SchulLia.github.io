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

> **Was passiert hier?** Lernende konstruieren selbst Polygone im Board. Die Quizmakros prüfen Eckenzahl sowie Zielwert und Toleranz für Umfang oder Fläche; ein Konstruktionsquiz könnte zusätzlich Seiten und Winkel kontrollieren.

@Koordinatensystem(`xmin=-5;xmax=5;ymin=-5;ymax=5;id=B`)

Konstruiere ein Dreieck mit dem Umfang 12.
@UmfangQuiz(`B;3;12;0.05`,`<!-- data-solution-button="5" -->`)
**********
Gültig ist jedes Dreieck mit dem Umfang 12 innerhalb der Toleranz.
**********
