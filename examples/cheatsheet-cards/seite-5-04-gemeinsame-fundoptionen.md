<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zu Folienbindung und Darstellungsbedingungen von Funden.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Fundoptionen: Folienbindung & Darstellung

> **Was passiert hier?** `anker` bindet beide Funde an diese Folie. Die Goldtruhe ist sofort sichtbar; die Diamanttruhe erscheint nur im türkisfarbenen LiaScript-Theme und reagiert unmittelbar auf einen Themewechsel. Werkzeug und Hindernis bleiben in ihren eigenen Beispielen, damit die Mechaniken nicht vermischt werden.

@Ressourcen(0, 0)

@Schatztruhe(2; anker)

@Diamanttruhe(anker; theme=tuerkis)
