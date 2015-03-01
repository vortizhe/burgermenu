---
layout: default
title: Getting Started - BurgerMenu
slug: get-started
---

# Getting started with BurgerMenu

## 1. Download and install

In order to use BurgerMenu, you must include the JavaScript and CSS files to your project. You cant get these files from many diferent locations.

### Downloading the code locally

You can download the last [script](https://github.com/vortizhe/burgermenu/blob/master/dist/jquery.burgermenu.min.js) and [styles](https://github.com/vortizhe/burgermenu/blob/master/dist/burgermenu.css) version from GitHub.

Or you can clone from [BurgerMenu GitHub repository](https://github.com/vortizhe/burgermenu) and copy the `/dist` directory to your project:

```
$ git clone https://github.com/vortizhe/burgermenu.git
```

### With bower

BurgerMenu is available as bower package.

```
$ bower install burgermenu
```

### As rails gem

If you work with rails, middleman or something compatible with sprockets and assets pipeline, you can include `burgermenu-rails` in your `Gemfile`.

```ruby
gem 'burgermenu-rails'
```

And then execute:

```
$ bundle install
```


## 2. Include BurgerMenu files to your layout

In your layout html file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    ...
    <link rel="stylesheet" href="path/to/burgermenu.css">
    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
    <script src="path/to/jquery.burgermenu.min.js"></script>
    ...
</head>
<body>
    ...
</body>
</html> 
```

## 3. Add menu html structure

Now we need a basic navigation structure somewhere inside body tag.

```html
<body>
...
<nav id="menu-example">
  <ul>
    <li><a href="/">Home</a></li>
    <li class="has-children">
      <a href="#">Slide Panel Submenu</a>
      <ul class="is-children">
        <li><a href="#">Back</a></li>
        <li><a href="#">Submenu element</a></li>
        <li><a href="#">Submenu element</a></li>
        <li><a href="#">Submenu element</a></li>
      </ul>
    </li>
    <li class="dropdown">
      <a href="#">Dropdown Submenu</a>
      <ul class="is-children">
        <li><a href="#">Dropdown element</a></li>
        <li><a href="#">Dropdown element</a></li>
        <li><a href="#">Dropdown element</a></li>
      </ul>
    </li>
  </ul>
</nav>
...
</body>
```


## 4. Wrap body content and add a button to toggle menu

```html
<body>
  <div class="page-wrapper">
  	<a id="menu-toggle" href="#menu-example">Toggle Menu</a>
  	...
  </div>
</body>
```

## 5. Initialize BurgerMenu

```js
$(function() {
  $('#menu-example').burgermenu();
});
```




