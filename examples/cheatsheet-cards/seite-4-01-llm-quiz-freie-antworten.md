<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „LLM-Quiz: freie Antworten“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/main/README.md
-->

# LLM-Quiz: freie Antworten

> **Was passiert hier?** Das erste LLM-Quiz bewertet eine freie Erklärung anhand alternativer Musterlösungen und des Operators „erklären“; danach kann zusätzlich die Sprache geprüft werden. Kriterienbasierte Aufgaben verwenden stattdessen einzelne `criterion`-Marker – beide Bewertungsarten sollten nicht in demselben Aufruf gemischt werden.

Erkläre die Fotosynthese.

<!-- data-solution-button="off"
     data-llm-textarea="3" -->
[[Antwort]]
```text @LLMQuiz(0.66;assessmentengine=quality;operator=erklaeren;solution=1;feedback=1;Rechtschreibung=1;Satzbau=1;maxthinkingtime=15s;maxthinkingtokens=medium,`Erkläre die Fotosynthese.`)
Pflanzen bilden mit Licht aus
Wasser und Kohlenstoffdioxid
Glucose. Dabei entsteht Sauerstoff.
<!-- lia-llm:alternative -->
Mit Lichtenergie bauen Pflanzen
aus Wasser und CO2 Traubenzucker
auf und geben Sauerstoff ab.
```
