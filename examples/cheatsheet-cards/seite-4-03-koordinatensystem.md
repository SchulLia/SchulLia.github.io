<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Koordinatensystem“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md
-->

# Koordinatensystem

> **Was passiert hier?** Das Makro legt das interaktive Koordinatensystem `B` mit Wertebereich und Breite an. Anschließend erhalten beide Achsen passende Beschriftungen; JSXGraph und `lia-coordinate` müssen in dieser Reihenfolge importiert sein.

@Koordinatensystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=800;id=B`)

@AchsenBeschriftung(`id=B;xlabel=$x$;ylabel=$y$`)
