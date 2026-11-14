<!--
author: Name
version: 0.0.1
language: de
comment: Highscore-Schild und Zahlen-Perk direkt im Startinventar bereitstellen.
tags: LiaScript, Gamification, Highscore, Startinventar
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# HighscoreInfo und Perk im Startinventar

@Highscore(100, 10, 5, 15, 2)
@HighscoreInfo(startinventar)
@Perk(HighscoreWert; startinventar)

> **Was passiert hier?** `@HighscoreInfo(startinventar)` legt das Fortschrittsschild ohne Fundaktion direkt ins Startinventar. `@Perk(HighscoreWert; startinventar)` ergänzt darauf von Anfang an den gerundeten Highscorewert. Der Wert und der Fortschrittsbalken aktualisieren sich beim Bearbeiten der Quizze.

Berechne: $3+4=$ [[7]]

**********
$3+4=7$.
**********
