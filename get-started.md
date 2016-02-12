---
layout: default
title: Getting Started - BurgerMenu
slug: get-started
---

# Getting started with BurgerMenu

## 1. Download and install

You can download the last [master](https://github.com/vortizhe/burgermenu/archive/master.zip) version from GitHub.

Or clone it from [GitHub repository](https://github.com/vortizhe/burgermenu) and copy the `/dist` directory to your project.

## 2. Include BurgerMenu files to your layout

There are 3 esential files: structural styles to open/close, theme styles and js script.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    ...
    <link rel="stylesheet" href="path/to/burgermenu.css">
    <link rel="stylesheet" href="path/to/themes/default.css">
    <script src="path/to/burgermenu.min.js"></script>
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
  <nav id="menu-example" class="burgermenu-left">
    <ul class="burgermenu-panel">
      <li><a href="#">Home</a></li>
      <li class="has-children">
        <a href="#">Slide Panel Submenu</a>
        <ul class="is-children">
          <li class="back"><a href="#">Back</a></li>
          <li><a href="#">Submenu element</a></li>
          <li><a href="#">Submenu element</a></li>
          <li><a href="#">Submenu element</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <a href="#">Dropdown Submenu</a>
        <ul class="dropdown-children">
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
  	...
  </div>
</body>
```

## 5. Add a stiky header with link to burgermenu id element

```html
<div class="burgermenu-sticky-head">
  <a id="burgermenu-toggle" href="#menu-example">Toggle Menu</a>
</div>
```

## 6. Initialize BurgerMenu

```js
$(function() {
  $('#menu-example').burgermenu();
});
```
