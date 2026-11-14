<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Start: Ressourcen, Highscore, Erfolge“.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Start: Ressourcen, Highscore, Erfolge

> **Was passiert hier?** Der Kurs startet mit zehn Gold, drei Diamanten und fünf Energie. Die Highscore-Regel vergibt Basispunkte und zieht für Fehlprüfungen, geöffnete Hinweise oder überschrittene Freiminuten Punkte ab; `@Erfolge` aktiviert zwölf feste Erfolge.

@Ressourcen(10, 3, 5)

@Highscore(100, 10, 5,
           15, 2)

@achievements
