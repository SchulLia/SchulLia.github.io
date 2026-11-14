<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Pflanze: Block & Inline“.
tags: LiaScript, CheatSheet, Gamification
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-loot/main/README.md
-->

# Pflanze: Block & Inline

> **Was passiert hier?** Die Pflanze muss zuerst mit der Gießkanne gegossen und danach in der Blüte angeklickt werden. Erst dann wird der Inhalt des Blocks beziehungsweise der Inline-Variante sichtbar.

@Lupe
@Giesskanne

@Pflanze(zauberstaub)
Verborgener Inhalt
@EndePflanze

Text @Pflanze.inline(Hinweis)
