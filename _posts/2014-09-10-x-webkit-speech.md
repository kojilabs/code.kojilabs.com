---
layout: post
title:  "Voice Input with x-webkit-speech"
author: mattwest
date:   2014-09-10 12:00:00
tags: HTML
---

If you're immune to the awkward feeling that accompanies speaking to inanimate objects in public places this one's for you.

Adding the `x-webkit-speech` attribute to your `input` elements will enabled voice input.

![Voice Input Demo](/img/voice-input-demo.png)

```js
<input type="text" x-webkit-speech>
```

Chrome is the only browser that supports this right now.

## FYI

* Pressing `Command` + `Shift` + `.` (`Ctrl` + `Shift` + `.` on Windows) will launch the little speech popup when focussed on the input.
* This works for `text`, `tel`, and `number` inputs.
* A `webkitSpeech` (boolean) attribute is added to the `HTMLInputElement` interface in supported browsers.

[CodePen Demo](http://codepen.io/matt-west/pen/wbpqu)
