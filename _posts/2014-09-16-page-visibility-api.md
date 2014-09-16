---
layout: post
title:  "Working with the Page Visibility API"
author: mattwest
date:   2014-09-16 10:50:00
tags: JavaScript
---

These days it's rare for someone to browse the web with just a single tab open. We tend to switch between tabs consuming the information that is most important to us at that moment.

As a developer it's important to consider this behaviour. Especially when you're building a website that includes interactive content like a video or game. These things all eat up precious system resources that may be better utilized elsewhere if your web page isn't visible.

The Page Visibility API can also provide a great way to improve the user experience on your website. Say for example you have a slideshow on your page that transitions between slides every few seconds. It makes sense to pause the slideshow when your page is hidden so the user can pick up where they left off when they return.


## How to Check if a Page is Visible

The Page Visibility API adds two new properties to the `document` object.

* `document.hidden`
* `document.visibilityState`

The `hidden` property is a boolean representing the current visibility of the page.

The `visibilityState` property is a string that gives more information about the current page state. This property has four possible values:

* `hidden` – not visible on any screen
* `visible` – visible to the user
* `prerender` – the page loaded off-screen and is not visible
* `unloaded` – the user is navigating away from the page


## Monitoring Page Visibility Changes

Of course, the true value of the Page Visibility API comes in the ability to tell when the visibility of a page changes. The API introduces a new `visibilitychange` event which is fired on `document` whenever the page gains or loses focus.

```js
document.addEventListener('visibilitychange', function(event) {
  if (document.hidden) {
    // The page is hidden.
  } else {
    // The page is visible.
  }
});
```

Creating an event listener for this event allows you to do things like pause a video when the page becomes hidden. Check out the demo for an example of this in action.

[View a demo on Codepen](http://codepen.io/matt-west/pen/hGFLs){: .btn .btn-success}


## Browser Support for the Page Visibility API

Browser support for the Page Visibility API is currently good. Just watch out for older versions of IE (as usual).

| IE   | Firefox | Chrome | Safari | Opera  |
| :--: | :-----: | :----: | :----: | :----: |
| 10+  | 10.0+   | 14.0+  | 6.1+   | 12.1+  |

_Source: <http://caniuse.com/#feat=pagevisibility>_


It's worth noting that the API is vendor prefixed in some older browsers. The example below demonstrates how to find the supported property name for the user's browser.


```js
function getPrefixed() {
  // Check for support of the un-prefixed property.
  if ('hidden' in document) {
    // No prefix needed, return null.
    return 'hidden';
  }

  // Create an array of the possible prefixes.
  var prefixes = ['moz', 'ms', 'o', 'webkit'];

  // Loop through each prefix to see if it is supported.
  for (var i = 0; i < prefixes.length; i++) {
    var testPrefix = prefixes[i] + 'Hidden';
    if (testPrefix in document) {
      // Prefix is supported!
      // Return the current prefixed property name.
      return testPrefix;
    }
  }

  // The API must not be supported in this browser, return null.
  return null;
}
```


## Summary

Most browsers do a good job of recovering resources from inactive tabs already. But that doesn't mean you should just ignore the issue. Take responsibility for how your website consumes resources.

Be mindful of the user's attention and help them to focus on the task at hand. Use the Page Visibility API to suspend interactive elements within your web pages. Allow users that stray from your site to return to a familiar and consistent page state.


## Further Reading

* [Page Visibility API Specification (W3C)](http://www.w3.org/TR/page-visibility/)
* [Can I Use… PageVisibility API](http://caniuse.com/#feat=pagevisibility)
