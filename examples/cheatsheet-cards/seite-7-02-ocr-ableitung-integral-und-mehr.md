<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „OCR: Ableitung, Integral & mehr“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/main/README.md
-->

# OCR: Ableitung, Integral & mehr

> **Was passiert hier?** Die benannten Optionen im gemeinsamen Backtick-Argument erklären der OCR-Prüfung, dass die erste Ableitung gesucht ist. Nach demselben Muster lassen sich unter anderem Integrale, Nullstellen, Extrempunkte oder Tangenten prüfen.

Bestimme die erste Ableitung von $f(x)=x^3$.
@BerechneOCR(`f(x)=x^3`,`aufgabe=ableitung;ordnung=1;zeilenrueckmeldung=1`)
**********
Die Potenzregel ergibt $f'(x)=3x^2$.
**********

Berechne das bestimmte Integral von $f(x)=x^2$ im Intervall von 0 bis 2.
@BerechneOCR(`f(x)=x^2`,`aufgabe=integral;von=0;bis=2`)
**********
$\int_0^2 x^2\,dx=\left[\frac{x^3}{3}\right]_0^2=\frac{8}{3}$
**********
