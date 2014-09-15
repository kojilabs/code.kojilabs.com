---
layout: post
title:  "Reading Files with FileReader"
author: mattwest
date:   2014-09-12 12:00:00
tags: JavaScript
---

The `FileReader` API is really handy if you need to read a file using JavaScript. There's a whole bunch of different methods available that allow you to get a file's content in various formats.

* `readAsText(file, encoding)`
* `readAsDataURL(file)`
* `readAsBinaryString(file)`
* `readAsArrayBuffer(file)`

Pass in a `File` or `Blob` object as the `file` parameter.

This is an asynchronous API so make sure that you declare your `onload` handler before you call one of the read methods.

[W3C Specification](http://www.w3.org/TR/FileAPI/) - [Browser Support](http://caniuse.com/#feat=filereader) - [Demo](http://codepen.io/matt-west/full/KjEHg)

## readAsText

```js
var reader = new FileReader();

reader.onload = function(e) {
  var text = reader.result;
}

reader.readAsText(file, encoding);
```

## readAsDataURL

```js
var reader = new FileReader();

reader.onload = function(e) {
  var dataURL = reader.result;
}

reader.readAsDataURL(file);
```


## readAsBinaryString

```js
var reader = new FileReader();

reader.onload = function(e) {
  var rawData = reader.result;
}

reader.readAsBinaryString(file);
```


## readAsArrayBuffer

```js
var reader = new FileReader();

reader.onload = function(e) {
  var arrayBuffer = reader.result;
}

reader.readAsArrayBuffer(file);
```


## Abort File Reads

The `abort()` method can be used to stop a file read. This is handy if you're dealing with large files.

```js
reader.abort();
```
