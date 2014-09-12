---
layout: post
title:  "Google Public DNS"
author: mattwest
date:   2014-06-03 12:00:00
tags: Tools
---

When you visit a website, your browser is connecting to the website's server based on it's IP address. It would be a nightmare to remember all the IP address for your favourite websites, so instead we use human-friendly domain names. The browser is able to lookup the IP address that belongs to a domain using DNS (or Domain Name System). This is a bit like a really big phone book.

Usually your computer will use the DNS service provided by your Internet Service Provider (ISP), but it is possible to connect to a different DNS service. Google's Public DNS service is generally faster than the one provided by your ISP and is also more secure.

Switching to Google Public DNS is relatively simple. All you need to do is update your computers network configuration, adding the following two IP address as the default DNS servers.

```
8.8.8.8
8.8.4.4
```

To set up Google Public DNS on your mac, follow these steps:

1. Open **Settings**
2. Select **Network**
3. Select **connection** you are using
4. Click **Advanced**
5. Select the **DNS** tab
6. Add the Google Public DNS IP address one at a time by clicking the **+** icon
7. Click **OK** and **Apply**

For instructions on how to set up Google Public DNS on other operating systems see the [documentation](https://developers.google.com/speed/public-dns/docs/using).  

Google Public DNS also supports IPv6. Just use the following two IP address rather than the ones above.

```
2001:4860:4860::8888
2001:4860:4860::8844
```
