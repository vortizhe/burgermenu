### HTML

```html
<nav id="menu-example1" class="burgermenu-left">
  <ul>
    <li><a href="#">Home</a></li>
    <li class="has-children">
      <a href="#">Slide Panel Submenu</a>
      <ul class="is-children">
        <li class="back"><a href="#">&lt; Back</a></li>
        <li><a href="#">Submenu element</a></li>
        <li><a href="#">Submenu element</a></li>
        <li><a href="#">Submenu element</a></li>
      </ul>
    </li>
    <li class="dropdown">
      <a href="#">Dropdown Submenu</a>
      <ul>
        <li><a href="#">Dropdown element</a></li>
        <li><a href="#">Dropdown element</a></li>
        <li><a href="#">Dropdown element</a></li>
      </ul>
    </li>
  </ul>
</nav>

<nav id="menu-example2" class="burgermenu-right">
  <ul>
      <li><a href="#">First element</a></li>
      <li><a href="#">Second element</a></li>
      <li><a href="#">Third element</a></li>
    </ul>
</nav>

<div class="page-wrapper">
  <a id="menu-toggle1" href="#menu-example1" class="menu-icon">Toggle Menu</a>
  <a id="menu-toggle2" href="#menu-example2" class="menu-icon right">Toggle Menu</a>
</div>
```

### JS

```js
$(function() {
  $('#menu-example1').burgermenu({
    toggle_selector: '#menu-toggle1'
  });

  $('#menu-example2').burgermenu({
    position: 'right',
    toggle_selector: '#menu-toggle2'
  });
});
```
