<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Speech-Recognition-Quiz“.
tags: LiaScript, CheatSheet, LiaScript
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/LiaTemplates/Speech-Recognition-Quiz/refs/heads/main/README.md
-->

# Speech-Recognition-Quiz

> **Was passiert hier?** Das Quiz hört eine gesprochene Phrase ab und vergleicht sie mit „Hallo“. Bei Abweichungen zeigt die Feedback-Funktion das erkannte Transkript; die Spracherkennung benötigt Chrome, Edge oder Opera.

<!-- data-solution-button="off" -->
Sprich: Hallo.
[[!]]
@SpeechRecognition(de-DE,Hallo)
