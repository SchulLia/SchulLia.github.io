<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Handschrift & OCR“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/LiaTemplates/Algebrite/b5a675525d0be71e3cc37476a7fba065e9590f62/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/main/README.md
-->

# Handschrift & OCR

> **Was passiert hier?** `@canvas` öffnet am Antwortfeld eine Schreibfläche. Der markierte handschriftliche Bereich wird per OCR erkannt und als LaTeX in das Eingabefeld übertragen, bevor das Quiz die Lösung prüft.

Berechne die Lösung der Gleichung und gib sie handschriftlich ein.
$3x + 2 = 11$
[[x = 3]]
@canvas
**********
$3x+2=11$ führt über $3x=9$ zu $x=3$.
**********
