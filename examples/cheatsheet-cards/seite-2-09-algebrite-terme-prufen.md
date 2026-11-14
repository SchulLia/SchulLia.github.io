<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Algebrite: Terme prüfen“.
tags: LiaScript, CheatSheet, LiaScript
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://cdn.jsdelivr.net/gh/LiaTemplates/algebrite@0.6.3/README.md
-->

# Algebrite: Terme prüfen

> **Was passiert hier?** Algebrite prüft, ob die eingegebene Formel mathematisch zum Zielterm `x^2 - 4` äquivalent ist. Komplexe Terme werden in Backticks geschützt; auch äquivalente Schreibweisen und viele LaTeX-Eingaben können akzeptiert werden.

Berechne die vollständig ausmultiplizierte Form des Terms.
[[(x - 2) * (x + 2)]]
@Algebrite.check(`x^2 - 4`)
**********
Mit der dritten binomischen Gleichung ergibt sich $x^2-4$.
**********

Bestimme die Ableitung von $K\cdot t^{-1/2}$ nach $t$.
[[-(K/2) * t^(-3/2)]]
@Algebrite.check(`-(K/2) * t^(-3/2)`)
**********
Die Potenzregel liefert $-\frac{K}{2}\cdot t^{-3/2}$.
**********

Gib ein Drittel als Bruch an.
[[1/3]]
@Algebrite.check2(1/3,0.01)
**********
Ein Drittel wird als $\frac{1}{3}$ geschrieben.
**********

Schätze einen Wert zwischen 1100 und 1400.
[[1200]]
@Algebrite.check_margin(1100,1400)
**********
Jeder Wert im angegebenen Intervall ist gültig, beispielsweise 1200.
**********
