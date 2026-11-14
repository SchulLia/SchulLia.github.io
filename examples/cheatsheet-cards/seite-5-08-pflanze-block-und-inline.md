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

> **Was passiert hier?** Beide Pflanzen müssen zuerst mit der Gießkanne gegossen und danach in der Blüte angeklickt werden. Der Block verwendet die robuste Grundform ohne Zusatzoption; bei der Inline-Pflanze macht die Lupe zunächst den `zauberstaub` sichtbar.

@Giesskanne

@Pflanze
Verborgener Inhalt
@EndePflanze

@Lupe

Text @Pflanze.inline(Hinweis, zauberstaub)
