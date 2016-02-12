---
layout: default
title: API - BurgerMenu
slug: api
---

# BurgerMenu API

You can initialize the plugin with an options object as first parameter.

```js
$('your-menu-selector').burgermenu({
  position: "left",
  toggle_selector: '#menu-toggle',
  parent_selector: '.has-children',
  children_selector: '.is-children',
  dropdown_selector: '.dropdown',
  back_selector: '.back'
});
```

## Parameters

 Parameter        |  Type  | Default         | Description                                |
------------------|--------|-----------------|--------------------------------------------|
position          | string | 'left'          | Could be `'left'` or `'right'`             |           
toggle_selector   | string | '#menu-toggle'  | Accepts any sizzle selector                |
parent_selector   | string | '.has-children' | Accepts any sizzle selector                |
children_selector | string | '.is-children'  | Accepts any sizzle selector                |
dropdown_selector | string | '.dropdown'     | Accepts any sizzle selector                |
back_selector     | string | '.back'         | Accepts any sizzle selector                |

## Toggle Event

You can open/close burgermenu from any element triggering manualy a custom event.

```js
$('your-menu-selector').trigger('burgermenu.toggle')
```
