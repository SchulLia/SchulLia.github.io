<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Algebrite: Gleichungen & mehrere Felder“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/LiaTemplates/Algebrite/b5a675525d0be71e3cc37476a7fba065e9590f62/README.md
-->

# Algebrite: Gleichungen & mehrere Felder

> **Was passiert hier?** Für die eingegebene und die vorgegebene Gleichung bildet Algebrite jeweils den Term „linke Seite minus rechte Seite“ und vergleicht diese Terme. Damit werden passende Umformungen erkannt, aber nicht allgemein gleiche Lösungsmengen geprüft. Im zweiten Quiz werden zwei Eingabefelder in ihrer Reihenfolge mit einer Semikolonliste von Sollwerten verglichen.

Gib die Gleichung $x^2-1=2x$ nach einer Äquivalenzumformung so an, dass auf der rechten Seite null steht.
[[x^2-1=2x]]
@Algebrite.check_expression(`x^2-2*x-1=0`)
**********
Subtrahiert man auf beiden Seiten $2x$, erhält man $x^2-2x-1=0$.
**********

Löse die beiden Gleichungen $3a=1$ und $3b=2$.
$a=$ [[1/3]], $b=$ [[2/3]]
@Algebrite.check2(`[1/3;2/3]`,0.01)
**********
$a=\frac{1}{3}$ und $b=\frac{2}{3}$.
**********
