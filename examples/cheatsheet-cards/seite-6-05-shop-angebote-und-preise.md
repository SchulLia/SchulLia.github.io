<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Shop: Angebote & Preise“.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Shop: Angebote & Preise

> **Was passiert hier?** Jedes Angebot folgt dem Muster `artikel=preis`; mehrere Angebote werden mit Semikolon getrennt. Die konkreten Angebote sind jeweils einmal kaufbar und setzen aktivierte Ressourcen voraus.

@Ressourcen(10, 5, 5)

@Shop(schaufel=3gold; energie-5=2gold)

@Shop(lupe=2diamanten; giesskanne=3gold+1diamant)
