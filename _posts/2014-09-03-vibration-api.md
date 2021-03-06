---
layout: post
title:  "Vibration API"
author: mattwest
date:   2014-09-03 12:00:00
tags: JavaScript Mobile
---

Harness the device's vibration motor using the `vibrate()` method, accessible on the `navigator` object.  

Simply pass in the number of milliseconds you want the vibration to last.  

```js
navigator.vibrate(1000);
```

You can also specify an array of values. Every other value will be interpreted as a pause.

```js
navigator.vibrate([1000, 500, 1000]);
```

For this example the device would vibrate for one second (1000 milliseconds), pause for half a second, and then vibrate for one more second.  

Firefox led the way with browser support for this one, but Chrome and Opera have joined the party too.


[W3C Specification](http://www.w3.org/TR/2014/WD-vibration-20140211/) - [Browser Support](http://caniuse.com/#feat=vibration)
