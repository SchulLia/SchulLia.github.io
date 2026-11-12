---
title: SchulLia-Patchnotes vom 10.11.2026
description: Bessere Zusammenarbeit der Templates, neue Aufgabenhinweise, klarere Bedienung und eine übersichtlichere Aufgabensammlung.
---

- **lia-annotation / lia-canvas-ocr / lia-coordinate:** Die Templates arbeiten besser zusammen. Handschrift, die mit der Annotation auf einer DGS oder einer `@canvas`-Fläche entsteht, wird dort als Schrift gewertet. Außerdem wurde die Auswahl der Stiftfarbe im `@canvas` optisch verbessert.

- **lia-coordinate:** Aufgaben können im Vollbild direkt am Koordinatensystem eingeblendet werden.

  ```text
  @Vollbildnotiz(`board`, `Aufgabe: Zeichne $f(x)=2x+1$.`)
  ```

- **lia-globalquiz:** Inhalte können bis zum Abschluss eines Tutorials oder Quiz gesperrt werden.

  ```text
  @TutorialQuizStart
  Frage: [[Antwort]]
  @TutorialQuizEnd
  ```

- **lia-annotation / lia-marker / lia-board-mode:** Die Templates arbeiten besser zusammen. Die Schaltflächen für Schriftgröße und Textmarker wurden in die Annotationsleiste aufgenommen. Der Textmarker hat außerdem ein eindeutigeres Symbol erhalten.

- **lia-llm:** Beim Auflösen offener Aufgaben wird jetzt die Musterlösung angezeigt.

- **Aufgabensammlung:** Dynamische Filter erleichtern das Finden passender Aufgaben und machen die Sammlung übersichtlicher.

- **skill-schullia:** Kurse werden einheitlicher, fachsprachlich sauberer und didaktisch strukturierter erstellt und geprüft. Auch die Syntaxprüfungen wurden verbessert.

  Kurzer Beispielprompt, damit der Skill sicher berücksichtigt wird:

  ```text
  Nutze https://github.com/MINT-the-GAP/skill-schullia: Lies zuerst die SKILL.md vollständig und bearbeite dann: [Restlicher Prompt]
  ```
