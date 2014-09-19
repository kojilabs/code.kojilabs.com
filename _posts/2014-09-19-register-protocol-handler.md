---
layout: post
title:  "Registering Protocol Handlers to Intercept Special Links"
author: mattwest
date:   2014-09-19 15:50:00
tags: JavaScript HTML
---

A cool (and somewhat unknown) browser feature is protocol handlers. These give you the ability to register your web application as a handler for protocols like `mailto` or `webcal`. Then whenever a user clicks a link with the specified protocol, they're sent off to your app to complete some action.

Of course you can't just override the user's current preferences. They first have to tell the browser they want your application to handle certain protocols.

Once you've registered a protocol handler, an icon will appear in the address bar when the user visits your app.

<figure>
{% image posts/protocol-handlers/protocol-handler-popup-gmail.png %}
<figcaption>User permissions dialog for protocol handlers.</figcaption>
</figure>

Clicking this icon shows an option to set your application as the default handler for the specified protocol. Once the user clicks allow, you're all good to go.


## Registering a Protocol Handler for Your Web App

So how does this all work?

To register a protocol handler you need to use the `navigator.registerProtocolHandler` method. This method isn't supported in all browsers yet so you'll want to do a quick check to see if it's available first.

```js
if ('registerProtocolHandler' in navigator) {
  // Yay! The user has a decent browser.
} else {
  // Seriously, quit using IE already.
}
```

The `registerProtocolHandler` method takes three arguments:

* `protocol` - The protocol that you want to handle (for example `mailto`, `tel`, or `webcal`)
* `url` - A URL within your application that can handle the specified protocol.
* `title` - The title of your application.

```js
navigator.registerProtocolHandler(protocol, url, title);
```

When a user clicks a link with the specified protocol, the contents of the links `href` attribute gets passed to your application through a URL. You can specify where in the URL you want this data to feature using the `%s` placeholder.

For example, the Gmail web app registers a handler for the `mailto` protocol. Once activated, whenever a user clicks a `mailto` link they get sent to the compose window. Gmail then uses the email address from the `href` attribute to pre-fill the `To` field in the compose window.

Here's an example of how you could create the same behaviour:

```js
navigator.registerProtocolHandler(
  'mailto',
  'https://mail.google.com/mail/?view=cm&to=%s',
  'Gmail'
)
```

### Limitations and Caveats of Protocol Handlers

An important caveat to note is that the browser sends the _entire_ contents of the `href` attribute to your app. This includes the protocol, so you'll need to clear out that out before doing anything with the data.

You need to register your protocol handler from the same domain as the one specified in the `URL` argument.

You can only send text, as the data gets transferred via a URL.

The communication between the sender and your application is one-way. This means you can't pass a message back to the sender to notify them you've taken a certain action.


## Creating Your Own Protocols

Handling `mailto` links is useful, but you also have the ability to create your own custom protocols too.

You can define pretty much any name for your protocol you'd like as long as it starts with `web+`. This helps to differentiate custom protocols from [standardized ones](http://en.wikipedia.org/wiki/URI_scheme#Official_IANA-registered_schemes).

Let's take a look at an example of a custom protocol.

On your travels around the internets you may have encountered these 'tweet me!' callouts designed to make it easier for people to share key points from blog posts. You could use protocol handlers to do something cool here.

<figure>
{% image posts/protocol-handlers/tweet-me-boagworld.png %}
<figcaption>Thanks to <a href="http://boagworld.com" target="_blank">Boagworld</a> for the example.</figcaption>
</figure>

Say we created a custom protocol, `web+tweet`, that takes some text data and sends the user off to compose a tweet on [twitter.com](https://twitter.com).

```js
navigator.registerProtocolHandler(
  'web+tweet',
  'https://twitter.com/intent/tweet?text=%s',
  'Twitter'
)
```

Having this custom protocol makes it super easy for a website owner to create special tweet links. I don't know about you, but I can never remember the twitter share URL without having to look it up.

```html
<a href="web+tweet:You should definitely tweet about this post">Share the love</a>
```

Of course this approach is flawed. For it to work, every twitter user would need to allow the twitter website to handle the `web+tweet` protocol. This just isn't realistic.

Custom protocols have a purpose within some applications, but don't expect others to adopt your protocol. The web is an open ecosystem with a wide array of recognized standards. Stick to them whenever possible.


## Browser Support for registerProtocolHandler

Protocol handlers aren't exactly new. The `registerProtocolHandler` method has been around since Firefox 3 ([circa 2008!](http://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-US/firefox/3.0/releasenotes/)). Internet Explorer and Safari are the only two holdouts.

| IE   | Firefox | Chrome | Safari | Opera  |
| :--: | :-----: | :----: | :----: | :----: |
| -    | 3+      | 13.0+  | -      | 11.6+  |


## Summary

Now you know how to register protocols handlers for your web application. Useful stuff if you ever find yourself building a web-based email client or calendar.

Be careful with those custom protocols though, there's times when they can come in handy, but don't reinvent the wheel. Use [standardized protocols](http://en.wikipedia.org/wiki/URI_scheme#Official_IANA-registered_schemes) whenever possible.


## Useful Links

* [Custom scheme and content handler (W3C Spec)](http://www.w3.org/TR/2011/WD-html5-20110525/timers.html#custom-handlers)
* [Web-based protocol handlers (MDN)](https://developer.mozilla.org/en/docs/Web-based_protocol_handlers)
* [List of URI schemes](http://en.wikipedia.org/wiki/URI_scheme#Official_IANA-registered_schemes)
