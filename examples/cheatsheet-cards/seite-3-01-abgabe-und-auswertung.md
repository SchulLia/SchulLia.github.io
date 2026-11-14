<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Abgabe & Auswertung“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
-->

# Abgabe & Auswertung

> **Was passiert hier?** Das vorgeschaltete native Quiz liefert eine bewertbare Antwort. `@ADetails(1=BE; Addition)` weist ihm ausdrücklich eine Bewertungseinheit und den Themen-Tag „Addition“ zu. `@Abgabe` erzeugt den Einreichungslink, `@Auswertung` ergänzt Zeit- und Aktivitätssignale. Diese Signale sind keine Beweise für eine Täuschung.

**Berechne** $2+2$.

[[ 4 ]]
**********
$2+2=4$.
**********

@ADetails(1=BE; Addition)

@Abgabe

@Auswertung(F12;Tab;Time)
