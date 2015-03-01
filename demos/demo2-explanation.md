### HTML

```html
<nav id="menu-example" class="burgermenu-right">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">First element</a></li>
    <li><a href="#">Second element</a></li>
    <li><a href="#">Third element</a></li>
  </ul>
</nav>

<div class="page-wrapper">
  <a id="menu-toggle" href="#menu-example" class="menu-icon right">Toggle Menu</a>
</div>
```

### JS

```js
$(function() {
  $('#menu-example').burgermenu({
    position: "right"
  });
});
```
