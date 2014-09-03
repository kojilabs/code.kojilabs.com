---
layout: post
title:  "Voice Input with x-webkit-speech"
author: "Matt West"
date:   2014-04-02 12:00:00
tags: HTML
---

If you're immune to the awkward feeling that accompanies speaking to inanimate objects in public places this one's for you.

Adding the `x-webkit-speech` attribute to your `input` elements will enabled voice input.

![](http://postachio-images.s3-website-us-east-1.amazonaws.com/4e993fc4b5c88cd33375265a094c786c/623d1a53297b693da8ed89c58e4a0d61/w600_225c100b86bfeaddd0aad5247d93bd86.png)

```html
<input type="text" x-webkit-speech>
```

Chrome is the only browser that supports this right now.

## FYI

* Pressing `Command` + `Shift` + `.` (`Ctrl` + `Shift` + `.` on Windows) will launch the little speech popup when focussed on the input.
* This works for `text`, `tel`, and `number` inputs.
* A `webkitSpeech` (boolean) attribute is added to the `HTMLInputElement` interface in supported browsers.

[CodePen Demo](http://codepen.io/matt-west/pen/wbpqu)
