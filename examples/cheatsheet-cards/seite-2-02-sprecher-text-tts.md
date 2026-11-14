<!--
author: Name
version: 0.0.1
language: de
comment: Beispiel zum CheatSheet-Kasten „Sprecher-Text (TTS)“.
tags: LiaScript, CheatSheet, LiaScript
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
-->

# Sprecher-Text (TTS)

> **Was passiert hier?** Der erste Sprechertext wird beim Öffnen der Folie automatisch vorgelesen, der nächste nach dem ersten Klick. Die verwendete Stimme lässt sich im Dokumentkopf über `narrator:` festlegen.

## Folie

Ein Sprechertext wird mit folgendem LiaScript-Block notiert:

<pre><code>         --&#123;&#123;0&#125;&#125;--
Dieser Text wird beim Öffnen der Folie vorgelesen.</code></pre>
