<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Bruchteile markieren“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/main/README.md
-->

# Bruchteile markieren

> **Was passiert hier?** Im ersten Quiz werden drei von acht Kreissektoren ausgewählt, im zweiten ein Drittel eines Rechtecks. Die Markierung selbst bildet jeweils die zu prüfende Antwort.

@circleQuiz(3/8)

@rectQuiz(1/3)

@circleQuizC(3/8,`<!-- data-hint-button="2" -->`)
