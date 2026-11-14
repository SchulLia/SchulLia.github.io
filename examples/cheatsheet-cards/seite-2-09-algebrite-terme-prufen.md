<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Algebrite: Terme prüfen“.
tags: LiaScript, CheatSheet, LiaScript
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/LiaTemplates/Algebrite/b5a675525d0be71e3cc37476a7fba065e9590f62/README.md
-->

# Algebrite: Terme prüfen

> **Was passiert hier?** Algebrite prüft, ob der eingegebene Term zum vorgegebenen Term `x^2 - 4` äquivalent ist. Terme mit Klammern werden im Makroargument in Backticks gesetzt; auch andere äquivalente Termdarstellungen und viele LaTeX-Eingaben werden akzeptiert.

Gib den vollständig ausmultiplizierten Term an.
[[(x - 2) * (x + 2)]]
@Algebrite.check(`x^2 - 4`)
**********
Aus der Identität $(a-b)(a+b)=a^2-b^2$ folgt $(x-2)(x+2)=x^2-4$.
**********

Bestimme die Ableitung von $K\cdot t^{-1/2}$ nach $t$, wobei $K$ eine von $t$ unabhängige Konstante ist.
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
