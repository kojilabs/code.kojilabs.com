---
layout: post
title:  "Geolocation API"
author: "Matt West"
date:   2014-04-01 12:00:00
tags: JavaScript Mobile
---

The Geolocation API makes it really easy to get the location of a device using JavaScript.

Supporting browsers will expose a `geolocation` interface on the `navigator` object. This interface has a `getCurrentPosition()` method with a success callback that will receive a [`Position`](http://www.w3.org/TR/geolocation-API/#position_interface) interface.  

{% highlight js %}
navigator.geolocation.getCurrentPosition(success, error, options);
{% endhighlight %}

The latitude and longitude coordinates can be accessed from the `Position` interface like so:

{% highlight js %}
navigator.geolocation.getCurrentPosition(function(position) {  
  // Get the positioning coordinates.  
  var lat = position.coords.latitude;  
  var lon = position.coords.longitude;  

  // Do something magical...  
}, function() {  
  alert('Oops! An error occured.');  
});
{% endhighlight %}

You can also watch for location changes using the `watchPosition()` method.

{% highlight js %}
navigator.geolocation.watchPosition(success, error, options);
{% endhighlight %}

The `options` object can be used to specify the accuracy of the data, a timeout threshold, and the maxage of cached location data.

{% highlight js %}
var options = {
  enableHighAccuracy: true,
  maximumAge : 60000,
  timeout : 45000
};
{% endhighlight %}

## FYI

* User's will need to grant your application permission to grab their location. A permissions bar will appear at the top of the page (or an alert on mobile).
* The accuracy of the data will vary depending on how the device is determining its location. Most phones have GPS these days but less accurate strategies (such as WiFi triangulation) may be used in the event that GPS is unavailable.
* You'll need to be serving your site over `http://` or `https://` for geolocation to work.
* GPS will consume precious battery power, use the Geolocation API wisely on mobile.

[W3C Specification](http://www.w3.org/TR/geolocation-API/) - [Browser Support](http://caniuse.com/#feat=geolocation)
