<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Gleichungslücke“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/main/README.md
-->

# Gleichungslücke

> **Was passiert hier?** `\liaquiz` setzt ein Eingabefeld direkt in die mathematische Gleichung. Das unmittelbar folgende Makro legt den erwarteten Wert der Lücke fest.

$\frac{\liaquiz}{3}
 = \frac{5}{15}$
@liaQuiz(1)

$x + \liaquiz = 7$
@liaQuizC(3,`<!-- data-solution-button="2" -->`)
