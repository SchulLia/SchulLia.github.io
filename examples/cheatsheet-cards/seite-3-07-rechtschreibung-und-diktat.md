<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Rechtschreibung & Diktat“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/main/README.md
-->

# Rechtschreibung & Diktat

> **Was passiert hier?** Die erste Aufgabe lässt einen fehlerhaften Satz vollständig korrigieren. Beim Diktat wird ein Wort oder Satz vorgelesen und die anschließende Eingabe automatisch mit der richtigen Schreibweise verglichen.

Gib den vollständig korrigierten Satz an.

@orthography(
 `<!-- data-solution-button="2" -->`,
 `Feler im Saz.`,
 `Fehler im Satz.`)

Gib das gehörte Wort an.

@diktat(Schmetterling)
