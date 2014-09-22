---
layout: post
title:  "Choosing the Best Client-Side Storage Technology for Your Project"
author: mattwest
date:   2014-09-22 10:30:00
tags: JavaScript
---

With all the different client-side storage options available today, it's easy to get confused about which one is best suited for your project. In this post I'm going to take you through the most popular client-side storage technologies; highlighting their usage, benefits, and drawbacks.

Let's get started.


## Cookies

Cookies are small text files stored in the user's browser. Each cookie consists of a simple key/value pair which gets sent to your server with every HTTP request.

There's two main types of cookies. Cookies that only exist for the lifetime of the user's session, and permanent cookies that exist for a set amount time. Once expired these permanent cookies get deleted by the browser.

It's also possible to use a special type of [secure cookie](http://blog.teamtreehouse.com/how-to-create-totally-secure-cookies) that is only sent to the server if a secure connection is present. For example, when a website is served over HTTPS.

```js
// Create a cookie (on the client-side).
document.cookie = "name=Matt West";
```

The main advantage to using cookies is that they're well supported by browsers. Cookies have been around a long time, and therefore it's unlikely that your application would encounter a browser which doesn't support cookies. Keep in mind however, that the user can explicitly disable support for cookies in their browser.

A drawback of using cookies is that you're limited to storing a small amount of text data (around 4K per cookie). This is something to bear in mind if you're building an application that handles a lot of client-side storage.

Another drawback is that cookies are sent along with every request made to the server. This means that the more cookies you have, the longer it will take for a request to complete, as the browser has to send all this extra data to your application.

Cookies are best used for storing small amounts of data like tracking IDs for analytics software, or authentication tokens to monitor whether a user is logged into your application.


## localStorage and sessionStorage

The `localStorage` and `sessionStorage` APIs are similar to cookies in that they allow you to store simple key/value pairs on the client. However, they conquer many of limitations that developers experience when using cookies.

As with cookies, you have the ability to control whether the data should be stored permanently, or only for the user's current session. Any data stored using the `localStorage` API will remain on the client until deleted, whereas data stored using `sessionStorage` is cleared out at the end of the user's session.

```js
// Add data to localstorage.
localStorage.setItem('name' 'Matt West');

// Retrieve data from localStorage.
var name = localStorage.getItem('name');
```

Data stored in `localStorage` is not sent to the server as part of the request payload. It's the developer's responsibility to transfer data to the server through query parameters or POST data. This means that using `localStorage` rather than cookies can help to reduce request times, and therefore increase the overall performance of your application.

Using `localStorage` also gives you access to more storage capacity. The exact amount of storage varies between browsers, but you can generally assume you'll have access to at least 2.5MB.

As with cookies, you're limited to storing text data when using `localStorage`. Of course you can get clever and start converting objects and arrays to JSON strings and then store that. However, you will better off using IndexedDB if you need to store structured data sets. (more on IndexedDB in a moment)

The added freedoms given to `localStorage` and `sessionStorage` make them a great alternative to using cookies. While some older versions of IE (7 and below) don't support these APIs, [most browsers do](http://caniuse.com/#feat=namevalue-storage).

If you just want to store simple key/value pairs, `localStorage` is the best option available right now. It's great for storing things like names and emails from contact forms. Allowing you to pre-fill those fields if the user views the form again.

[Find out more about localStorage](http://blog.teamtreehouse.com/storing-data-on-the-client-with-localstorage){: .btn .btn-info}


## IndexedDB

IndexedDB is the power-house of client-side storage. It allows you to store structured data and then perform queries against those datasets.

This added functionality comes at a price however. The `IndexedDB` API is complex and can be daunting to those just starting out.

[Browser support](http://caniuse.com/#feat=indexeddb) for `IndexedDB` isn't quite as good as that for `localStorage`. Safari only just added support in version 8 (which is currently only available with the Yosemite beta), and Internet Explorer has limited support for the API.

`IndexedDB` is the way to go if you're building an application that needs to store structured data. Just be aware of the steep learning curve when you're getting started.

[Find out more about IndexedDB](http://blog.teamtreehouse.com/create-your-own-to-do-app-with-html5-and-indexeddb){: .btn .btn-info .btn-pad-right} [View a demo app](http://codepen.io/matt-west/pen/hndAJ){: .btn .btn-success}


## Introducing localForage; The Best of Both Worlds

Before we end, I want to run through another option you have when working with client-side storage.

The wonderful folks at Mozilla have developed [localForage](http://mozilla.github.io/localForage/), a handy little library that aims to take the pain out of client-side storage.

The `localForage` API has the simplicity of `localStorage` but gives you access to all the benefits of a complex API like `IndexedDB`. Behind-the-scenes, `localForage` checks to see which storage technologies are supported by the user's browser, and then chooses the one that offers the best functionality.

```js
// Storing data.
localForage.setItem('name', 'Matt West');

// Retrieving data.
var name = localForage.getItem('name');
```

The API mirrors that of the `localStorage` API with regards to its methods and properties. The key exception being that you can store complex data types like arrays and objects (hurray!). Of course you're still bound by the same limitations on storage capacity that are imposed on the underlying storage technology.

```js
// Storing an array.
localForage.setItem('users', ['Matt West', 'Joe Balochio', 'Fred Smith']);
```

Using a library like `localForage` abstracts away the complexity of doing client-side storage, so you can focus on building a great application.

[Find out more about localForage](http://blog.teamtreehouse.com/using-localforage-offline-data-storage){: .btn .btn-info .btn-pad-right} [Download localForage](http://mozilla.github.io/localForage/){: .btn .btn-success}


## Summary

In this post we've looked at some of the different client-side storage technologies that are available to you when building web applications. You should now have a better idea of the benefits and drawbacks of each, and when to use on over another.

If you're still unsure about which technology is best suited to your project, post a comment below with some details about what you're working on. I'll jump in and help out the best I can.


## Useful Links

* [Using localForage for Offline Data Storage](http://blog.teamtreehouse.com/using-localforage-offline-data-storage)
* [Storing Data on The Client with LocalStorage](http://blog.teamtreehouse.com/storing-data-on-the-client-with-localstorage)
* [Create Your Own To-Do App with HTML5 and IndexedDB](http://blog.teamtreehouse.com/create-your-own-to-do-app-with-html5-and-indexeddb)
