<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Gold, Diamanten & Energie“.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Gold, Diamanten & Energie

> **Was passiert hier?** Die drei sichtbaren Truhen vergeben jeweils ihre angegebene Ressourcenmenge. Energie funktioniert nur, wenn `@Ressourcen` einen dritten Startwert enthält. Der direkt zugehörige Perk erhöht anschließend die Energieausbeute aus jeder Energiekiste um zehn Prozent.

@Ressourcen(0, 0, 0)

@Schatztruhe(3)

@Diamanttruhe(2)

@Energiekiste(3)

@Perk(energiekistenbonus-10)
