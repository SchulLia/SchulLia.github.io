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

> **Was passiert hier?** Der Support-Test meldet zuerst, ob die Browser-API verfügbar ist. Das generische LiaScript-Quiz `[[!]]` startet anschließend die Spracherkennung und vergleicht das Transkript mit „Hallo LiaScript“. Bei Abweichungen gibt die Feedback-Variante den erkannten Text zurück. Benötigt wird ein Chromium-basierter Browser wie Chrome, Edge oder Opera sowie die Freigabe des Mikrofons.

@SpeechRecognition.support

<!-- data-solution-button="off" -->
Sprich den Satz **„Hallo LiaScript“**.

[[!]]
@SpeechRecognition.withFeedback(de-DE,`Hallo LiaScript`)
