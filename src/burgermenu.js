/*!
 * Burger Menu
 * Another simple off canvas side menu with CSS3 transforms triggered by jQuery plugin.
 *
 * http://github.com/vortizhe/burgermenu
 *
 * Copyright (c) 2015 Victor Ortiz
 * Licensed under the MIT license.
 */

;(function ($, window, undefined) {

  var $document = $(window.document),
      defaults = {
        position: "left",
        toggle_selector: '#burgermenu-toggle',
        parent_selector: '.has-children',
        children_selector: '.is-children',
        dropdown_selector: '.dropdown',
        back_selector: '.back'
      };



  // Constructor
  function BurgerMenu(element, options) {
    this.element = element;
    this.options = $.extend( {}, defaults, options) ;

    this.init();
  }



  BurgerMenu.prototype.init = function() {
    var $el = $(this.element),
        $html = $('html'),
        opts = this.options;

    $html.find('body').append('<div id="burgermenu-blocker"/>');
    $(opts.toggle_selector).addClass('burgermenu-toggle');

    // Bind open/close menu event burgermenu.toggle to element menu
    $el.bind('burgermenu.toggle', function() {
      $html.toggleClass('opened-' + opts.position);
    });

    $document.on('click touchstart', '#burgermenu-blocker, ' + opts.toggle_selector, function(e) {
      e.preventDefault();
      e.stopPropagation();
      $el.trigger('burgermenu.toggle');
    });

    // Bind open/close submenu event
    $el.on('click', opts.parent_selector + ' > a', function(e) {
      e.preventDefault();
      $(this).closest(opts.parent_selector).toggleClass('opened');
    });

    $el.on('click', opts.back_selector, function(e) {
      e.preventDefault();
      $(this).closest(opts.parent_selector).toggleClass('opened');
    });

    $el.on('click', opts.dropdown_selector + ' > a', function(e) {
      e.preventDefault();
      $(this).siblings('ul').slideToggle();
      $(this).closest('li').toggleClass('opened');
    });
  };



  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn.burgermenu = function(options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_burgermenu')) {
        $.data(this, 'plugin_burgermenu', new BurgerMenu(this, options));
      }
    });
  };
}(jQuery, window));
