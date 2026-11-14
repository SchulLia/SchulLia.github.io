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

> **Was passiert hier?** Der mit `lia-math-quiz-slot` markierte Bereich reserviert die Lücke direkt in der mathematischen Gleichung. Das unmittelbar folgende `@liaQuiz`-Makro erzeugt das native Eingabefeld, legt den erwarteten Wert fest und verbindet die Eingabe mit diesem Formelslot.

Bestimme den fehlenden Wert in der Gleichung.

$\dfrac{\htmlClass{lia-math-quiz-slot}{\vphantom{\rule{0pt}{1.5em}}\hspace{2.2em}}}{3} = \dfrac{5}{15}$

@liaQuiz(1)

Bestimme den fehlenden Summanden.

$x + \htmlClass{lia-math-quiz-slot}{\vphantom{\rule{0pt}{1.5em}}\hspace{2.2em}} = 7$

@liaQuizC(3,`<!-- data-solution-button="2" -->`)
