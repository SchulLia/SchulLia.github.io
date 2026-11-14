<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Gleichungslücke“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/main/README.md

formula:  \liaquiz \htmlClass{lia-math-quiz-slot}{\vphantom{\rule{0pt}{1.5em}}\hspace{2.2em}}
-->

# Gleichungslücke

> **Was passiert hier?** `\liaquiz` setzt ein Eingabefeld direkt in die mathematische Gleichung. Das unmittelbar folgende Makro legt den erwarteten Wert der Lücke fest.

Bestimme den fehlenden Wert in der Gleichung.

$\dfrac{\liaquiz}{3} = \dfrac{5}{15}$

@liaQuiz(1)

Bestimme den fehlenden Summanden.

$x + \liaquiz = 7$

@liaQuizC(3,`<!-- data-solution-button="2" -->`)
