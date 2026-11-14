<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Freeze: Bewertung erst bei Abgabe“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
-->

# Freeze: Bewertung erst bei Abgabe

> **Was passiert hier?** `Send` hält Prüfen während der Bearbeitung neutral und verbirgt Korrektheitsfeedback sowie Lösung. Bewertet wird erst beim Erstellen des Freeze-Abgabelinks; technische Aktivitätssignale sind auch hier keine Täuschungsbeweise.

@Abgabe

@Auswertung(F12;Tab;Time;Send)
