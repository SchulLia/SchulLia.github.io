<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „OCR: vollständige Rechenwege“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/main/README.md
-->

# OCR: vollständige Rechenwege

> **Was passiert hier?** Das Makro erzeugt Aufgabe, Schreibfläche und Prüfung für einen vollständigen handschriftlichen Rechenweg. Die `1` aktiviert Rückmeldungen zu einzelnen Zeilen; für viele ganzzahlige Grundrechenarten wird automatisch das passende schriftliche Verfahren gewählt.

Löse die Gleichung.

@BerechneOCR(`3*x+2=11`,1)
[[?]] Ziehe zuerst 2 ab.

@BerechneOCR(`347+185`)
