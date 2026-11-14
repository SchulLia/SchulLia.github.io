<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „OCR: Ableitung, Integral & mehr“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/LiaTemplates/Algebrite/b5a675525d0be71e3cc37476a7fba065e9590f62/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/main/README.md
-->

# OCR: Ableitung, Integral & mehr

> **Was passiert hier?** Die benannten Optionen im gemeinsamen Backtick-Argument erklären der OCR-Prüfung, dass die erste Ableitung gesucht ist. `@BerechneOCR` erzeugt Aufgabe, Schreibfläche, Prüfung und Auflösung selbst; ein zusätzlicher Lösungsblock ist daher nicht nötig.

Berechne die erste Ableitung von $f(x)=x^3$.

@BerechneOCR(`f(x)=x^3`,`aufgabe=ableitung;ordnung=1;zeilenrueckmeldung=1`)

Berechne das bestimmte Integral von $f(x)=x^2$ im Intervall von 0 bis 2.

@BerechneOCR(`f(x)=x^2`,`aufgabe=integral;von=0;bis=2`)
