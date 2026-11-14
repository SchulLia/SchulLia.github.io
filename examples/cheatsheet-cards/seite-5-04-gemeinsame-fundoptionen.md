<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Gemeinsame Fundoptionen“.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Gemeinsame Fundoptionen

> **Was passiert hier?** Die Schatztruhe ist an diese Folie gebunden und liegt hinter zwei echten Freigabeschichten: zuerst Erde, danach eine Pflanze. Sammle Schaufel und Gießkanne ein, aktiviere jeweils das passende Werkzeug und öffne anschließend die Truhe.

@Ressourcen(0, 0)

@Schaufel
@Giesskanne

@Schatztruhe(2; anker; erde; pflanze)
