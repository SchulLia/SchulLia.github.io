<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „DGS: bauen & exportieren“.
tags: LiaScript, CheatSheet, SchulLia
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md
-->

# DGS: bauen & exportieren

> **Was passiert hier?** ``@DGS(`B`)`` öffnet im Board `B` das vollständige dynamische Geometriesystem mit den allgemeinen, zweidimensionalen und dreidimensionalen Werkzeugen sowie Geodreieck und Zirkel. Konstruiere die gewünschten Objekte, öffne rechts die **Objektliste** und wähle unten **Export**. Im Exportdialog kannst du Werkzeuge und Berechtigungen für den späteren Import auswählen; **Weiter** erzeugt anschließend einen vollständigen, kopierbaren LiaScript-Makroblock mit neuer Board-ID.

@Koordinatensystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=800;id=B`)

@DGS(`B`)
