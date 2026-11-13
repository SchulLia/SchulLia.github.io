<!--
author: Martin Lommatzsch
version: 0.0.1
language: de
comment: Einen einfachen Arduino-Sketch im Browser simulieren.
tags: LiaScript, Arduino, AVR8js
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
import: https://raw.githubusercontent.com/LiaTemplates/AVR8js/main/README.md
-->

# AVR8js

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);
  digitalWrite(LED_BUILTIN, LOW);
  delay(500);
}
```
@AVR8js.sketch

