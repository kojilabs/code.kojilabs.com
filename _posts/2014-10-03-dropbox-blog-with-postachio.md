---
layout: post
title:  "Setting up a Dropbox blog with Postach.io"
author: mattwest
date:   2014-10-03 19:00:00
tags: Tools Beginner
---

Postach.io is a web service that removes the technical hassle of managing a blog so you can just focus on writing great posts. This works because Postach.io pulls in content from the services you already use like Evernote and Dropbox.

In this post you're going to learn how to create a Postach.io blog and link it up to your Dropbox account. We'll go through how to configure your blog so that it sends visitor data to Google Analytics, how to add a comments system powered by Disqus, as well as a number of other handy tips that make blogging with Postach.io an absolute delight.

Let's get started.


## Sign up for a Postach.io account (it's free)

First of all, you're going to need to have a Dropbox account. If you don't have one already, head over to [Dropbox](https://dropbox.com) and set one up. Come back here once you're done.

Great, so now you've got your Dropbox account ready to go, you can go ahead and sign up to Postach.io. Postach.io is a free service so it's not going to cost you anything to try this out.

Head over to [http://postach.io](http://postach.io) and enter your details to create a new account.

![Postach.io Website](/img/dropbox-postachio/postachio-home.png)

***

**Note**: If you find yourself falling in love with Postach.io, they do have a premium subscription that allows you to create multiple blogs and gives you access to a few extra features (not to mention, you'll snag yourself an awesome t-shirt).

***

Once you're done, Postach.io is going to guide you through creating your first blog. On this screen you'll need to enter a **title** for your blog, **your name**, and a **URL**.

![Create a Postach.io Blog](/img/dropbox-postachio/postachio-create-blog.png)

As standard Postach.io will give you a free sub-domain (http://<yourblog>.postach.io) so you an get up and running really quickly, but you can also use your own domain if you have one. I'll show you now to set that up a little later on.

Okay, so now you have your new Postach.io blog set up, the next job is to link up your Dropbox account so that Postach.io can find your content.

![Link Dropbox to Postach.io](/img/dropbox-postachio/postachio-link-dropbox.png)

Hit the **Connect** button to link your Dropbox account. A new window will pop up asking you to confirm that you'd like to connect your accounts. Hit **Allow** and you're ready to go!

![Dropbox Permissions Screen](/img/dropbox-postachio/dropbox-dialog.png)

Once you've connected your Dropbox account, Postach.io is going to go ahead and create a few new folders for you. First of all a new `Postach.io` folder will show up within the `Apps` folder. Everything related to Postach.io will be stored in here. Next, Postach.io will create a folder to store all of the content for your new blog, this folder will match your blogs URL. So you should end up with a folder structure that looks something like this...

* Apps
	* Postach.io
	 * yourblog.postach.io

Okay, you're nearly done. Postach.io is going to send you a confirmation email just to check that you entered the correct email address when you signed up. Go ahead and click the link in that email to confirm your account.

![Postach.io Confirmation Email Sent](/img/dropbox-postachio/postachio-done.png)

Your blog's now live! Load it up and take a look around. There won't be much to see yet, but you'll sort that out soon enough.


## Configuring your new blog

You could just start adding content to your blog right now, but I'm guessing that there's still some stuff you'd like to set up. Google Analytics, and a comments system for example. In this section you're going to handle all of this I'll also show you how to get your blog working with your own domain as I promised earlier.

Before we get started, make sure you're logged in to Postach.io and looking at the admin area for your new blog. You can get there by hitting the pencil icon to the right of your blog's name on the [main dashboard](http://postach.io/account).

### Complete the details section

![Postach.io Details](/img/dropbox-postachio/postachio-details.png)

The first thing you need to do is fill out the rest of the details section for your blog. Make sure that you've got the **Details** tab in view, then add in a **description** for your site as well as any links to social media accounts you have.

### Setting up a custom domain

![Postach.io Custom Domain](/img/dropbox-postachio/postachio-domain.png)

Next let's tackle that domain name of yours. If you're happy using the domain that Postach.io gives you, feel free to skip this part.

First you'll need to enter the domain name you'd like to use into the **Custom Domain** field under **Advanced Options** on the **Details** tab.

Now you need to go and update some DNS records for your domain. If you've dealt with DNS before this should be fairly straight-forward, but if you haven't, you might want to ask your domain registrar to help you with this if you get stuck.

If you're using a top-level domain (i.e. example.com) you'll need to set up an `A` record that points to the IP address: `54.227.242.252`.

If you're using a sub-domain (i.e. blog.example.com) you'll need to create a `CNAME` record that points to: `domains.postach.io`.

Once you've updated the DNS it can take a little while for the new settings to take effect. This can be anything from a few minutes up to 24 hours, so be patient. Load up your custom domain every now and then to see if it's pointing to your Postach.io blog or not. If more than 24 hours go by and it's still not working, it's probably best to get in touch with your domain registrar and have them check your settings.

Okay, so that's as technical as we're going to get in this post. It should be plain sailing from here on out.


### Adding Google Analytics

Next it's time to set up Google Analytics so you can see how many people are reading your awesome blog posts.

You'll need a Google Analytics account for this. If you don't already have one, head over to [http://google.com/analytics](http://google.com/analytics) and create one.

You're also going to need to create a new _Property_ for your blog. You can do this within the **Admin** section of the Google Analytics dashboard. Once you've created a new property make a note of the **Tracking ID** as you'll need this in a minute (it will look something like UA-XXXXXXXX-XX).

![Adding Google Analytics](/img/dropbox-postachio/postachio-google-analytics.png)

Now head back the **Details** tab on the Postach.io site and enter the tracking ID you just got into the **Google Analytics Code** field. Postach.io will now add the Google Analytics code to every page on your blog.


### Adding Disqus Comments

[Disqus](https://disqus.com) is a popular service that's used for managing comments on websites. You've probably seen it around on your web travels.

If you don't already have one, head over to [https://disqus.com](https://disqus.com) and create a new account. Once you're done, retreat back to the familiar comfort of the Postach.io admin area so we can continue on.

![Adding Disqus](/img/dropbox-postachio/postachio-disqus.png)

Now you need to connect your Disqus account to Postach.io. Hit the big **Connect Disqus** button and follow the on-screen instructions.

If you set up a forum for your blog when you created your Disqus account you should see it listed in the **Comments by Disqus** drop-down.

If not, hit the **Create a New Forum** button and follow the instructions. Once you've create the forum, select it from the drop-down menu.

Hit the **Update Site Details** button to save the changes and enable comments on your blog.


### Enable Markdown support (if you're that way inclined)

One of my favorite things about Postach.io is that it supports Markdown. If you haven't come across Markdown before (<s>have you been living in a cave?</s>) it's this really awesome syntax that allows you to apply text formatting, links, and images to your posts without having to mess around with HTML. Super handy.

![Enabling Markdown](/img/dropbox-postachio/postachio-markdown.png)

Make sure that you check the **Use Markdown** box on the **Details** tab if you'd like to use Markdown in your posts.


### Pick a Theme

Last but not least you need to pick a theme for your new blog. Personally I'm a big fan of the default 'Expanse' theme, but head over to the **Theme Browser** tab and see which theme you like best.

![Postach.io Theme Browser](/img/dropbox-postachio/postachio-themes.png)

Hit **Apply** on the theme you'd like to use and Postach.io will set to work on redecorating your blog.

You can also create your own custom themes. We're not going to cover how to do that in this post, but if you have coding skills you might want to have a look at the **Source Editor** tab.


## Put your writing hat on

That's all the configuration taken care of, so now we can move on to actually writing posts!

There are two different ways you can format your posts when you're storing them in Dropbox. You can either use [Markdown](http://help.postach.io/creating-markdown-posts-in-dropbox) or [HTML](http://help.postach.io/creating-html-posts-in-dropbox).

Whichever strategy you use, make sure that you save the post file in the Dropbox folder for your blog (`Apps/Postach.io/yourblog.postach.io`). It doesn't matter what you call the file, although it's probably best to use the post title so you can easily find it later. You can also add extra folders to help you keep things organized. I like to organize the files in my blogs Dropbox folder by year, and then month. That makes it easy for me to find things quickly.

### Writing posts using Markdown

Let's start by looking at how to create a post that uses markdown.

Posts that use Markdown should be saved with the `.md` file extension.

You need to start the file with a bit of metadata that tells Postach.io about your post. This includes the post title, date, type, and any tags you want to assign to the post.

```
title: My First Blog Post
date: 2014-09-30
tags: business, technology, published
type: post
```

The `date` should be supplied in the format `YYYY-MM-DD`.

If you'd like to add multiple `tags`, just make sure that you separate them with commas. Postach.io won't put the post live on your blog until you add the `published` tag. This allows you to keep posts as drafts until you're ready to unleash them upon the world.

Postach.io supports two different `types`. The first is `post`, for well... blog posts, and the second is `page`, for content pages. Postach.io will automatically display links to any pages within the main site navigation.

Once you've completed all the metadata for your post you can start writing the content. Put this just below the block of metadata.

You can use any Markdown you'd like within your content. Postach.io will autmatically convert this to HTML on your blog, so that text formatting, links, and images all show up correctly to readers.

```
title: My First Blog Post
date: 2014-09-30
tags: business, technology, published
type: post

Whoo! I'm using **Postach.io** and [Dropbox](https://dropbox.com) to make it super easy for me to manage my blog.

![Postach.io Logo](logo.png)
```

If you'd like to use images within your post (as I have here), make sure that you place the file within the same Dropbox folder as your post file.


### Writing posts using HTML

If you'd prefer to write your posts using HTML, that's perfectly fine too.

For this you'll need to add the post metadata using `<meta>` tags. The same rules apply for the formatting of `dates`, and `tags`. (Don't forget to specify the `type` too!)

```
<!DOCTYPE html>
<html>
<head>
  <title>My First Blog Post</title>
  <meta name="date" content="2014-09-30" />
  <meta name="type" content="post" />
  <meta name="tags" content="business, technology, published" />
</head>

<body>

  <p>Whoo! I'm using **Postach.io** and [Dropbox](https://dropbox.com) to make it super easy for me to manage my blog.</p>

  <!-- Place the image file in the same directory as the HTML file in Dropbox -->
  <p><img src="logo.png" alt="Postach.io Logo" /></p>

</body>
</html>
```

Postach.io constantly monitors your Dropbox folder, so it will pick up on any new posts you add, or any changes you make to existing posts.


## Summary

That's it, you're done!

In this post you've learnt how to set up a Postach.io blog that pulls in content from your Dropbox account. You've gone through all the steps to configure your blog: choosing a theme, adding Google Analytics, integrating Disqus for handling comments, and even setting up a custom domain name.

All that's left is for you to starting spreading some knowledge!


## Useful Links

* [Dropbox](https://dropbox.com)
* [Postach.io](http://postach.io)
* [Disqus](https://disqus.com)
* [Google Analytics](http://google.com/analytics)
