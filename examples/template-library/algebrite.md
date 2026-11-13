<!--
author: Martin Lommatzsch
version: 0.0.1
language: de
comment: Mathematisch gleichwertige Terme prüfen.
tags: LiaScript, Mathematik, Algebrite
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
-->

# Algebrite

**Forme** den ersten Term äquivalent **um** und **gib** anschließend das Ergebnis **an**.

[[(x - 2) * (x + 2)]]
@Algebrite.check(`x^2 - 4`)

Ergebnis: [[1/3]]
@Algebrite.check2(1/3,0.01)

**********
Mit der dritten binomischen Formel gilt $(x-2)(x+2)=x^2-4$. Das zweite Ergebnis ist $\frac{1}{3}$.
**********

