<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Algebrite: Gleichungen & mehrere Felder“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
-->

# Algebrite: Gleichungen & mehrere Felder

> **Was passiert hier?** Die Gleichungsprüfung vergleicht die Differenz aus linker und rechter Seite mit der Zielform. Im zweiten Quiz werden zwei Eingabefelder in ihrer Reihenfolge gegen eine Semikolonliste von Sollwerten geprüft.

Gib eine äquivalente Gleichung an.
[[x^2-1=2x]]
@Algebrite.check_expression(`x^2-2*x-1=0`)
**********
Durch Subtraktion von $2x$ entsteht $x^2-2x-1=0$.
**********

Bestimme die beiden Werte.
$a=$ [[1/3]], $b=$ [[2/3]]
@Algebrite.check2(`[1/3;2/3]`,0.01)
**********
$a=\frac{1}{3}$ und $b=\frac{2}{3}$.
**********
