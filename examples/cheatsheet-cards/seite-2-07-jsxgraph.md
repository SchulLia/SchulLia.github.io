<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „JSXGraph“.
tags: LiaScript, CheatSheet, LiaScript
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
-->

# JSXGraph

> **Was passiert hier?** Der JavaScript-Block zeichnet einen interaktiven Punkt auf einem JSXGraph-Board. Das Board steht dem Code automatisch unter dem Namen `board` zur Verfügung.

```javascript @JSX.Graph
board.create('point', [1, 2],
  {name: 'A'});
```
