<!--
author: Name
version: 0.0.1
language: de
comment: Lernstand aus zwei Aufgaben erfassen und passende Lernangebote anzeigen.
tags: Mathematik, Klasse 5, Lernpfad, Tutorial
lernpfad-level: Einsteiger
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/master/README.md?v=0.0.24
-->

# Lernstand erfassen

> **Was passiert hier?** Die beiden Aufgaben liefern Themen, Punktwerte und Bearbeitungsstände. `@Lernpfad` wertet diese Angaben aus und zeigt auf der letzten Folie passende Angebote zum Wiederholen, Üben und Vertiefen an.

## Aufgabe 1: Brüche

Berechne: Ein Halb plus ein Halb ergibt [[1]].
[[?]] @Explain

**********
Ein Halb plus ein Halb ergibt ein Ganzes.
**********

@resetter

@ADetails(`1=BE;Bruchrechnung`)

## Aufgabe 2: Längeneinheiten

Gib an: Ein Meter entspricht [[100]] Zentimetern.
[[?]] @Explain

**********
Ein Meter entspricht 100 Zentimetern.
**********

@resetter

@ADetails(`1=BE;Einheiten`)

# Dein weiterer Lernpfad

> **Was passiert hier?** Beim Öffnen dieser eigenen Folie liest `@Lernpfad` den aktuellen Lernstand und stellt die drei Lernangebote direkt bereit. Ein ausgewähltes Angebot erzeugt einen neuen Kurs mit vier Aufgaben.

@Lernpfad
