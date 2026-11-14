<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Text markieren“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/main/README.md
-->

# Text markieren

> **Was passiert hier?** Lernende markieren im Satz das Nomen rot und das Verb blau. Das Marker-Quiz prüft Wort und erwartete Farbe; im Erklärmodus kann zusätzlich eine sprachabhängige Worterläuterung erscheinen.

Markiere das Nomen rot und das Verb blau.

<div class="markerquiz">
@markred(Haus)
@markblue(laufen)
@TextmarkerQuiz
</div>
**********
**Haus** ist das Nomen; **laufen** ist das Verb.
**********

@markedgreen(Beispiel)
