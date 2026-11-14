<!--
author: Martin Lommatzsch
version: 0.0.1
language: de
comment: Mathematisch gleichwertige Terme prüfen.
tags: LiaScript, Mathematik, Algebrite
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/LiaTemplates/Algebrite/b5a675525d0be71e3cc37476a7fba065e9590f62/README.md
-->

# Algebrite

**Multipliziere** den ersten Term vollständig **aus** und **gib** anschließend das Ergebnis **an**.

[[(x - 2) * (x + 2)]]
@Algebrite.check(`x^2 - 4`)

Ergebnis: [[1/3]]
@Algebrite.check2(1/3,0.01)

**********
Aus der Identität $(a-b)(a+b)=a^2-b^2$ folgt $(x-2)(x+2)=x^2-4$. Das zweite Ergebnis ist $\frac{1}{3}$.
**********

