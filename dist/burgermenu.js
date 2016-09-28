/*!
 * Burgermenu 0.1.4
 * Simple off canvas menu with hardware accelerated transitions and amazing native behavior.
 * 
 * https://github.com/vortizhe/burgermenu
 * 
 * Copyright 2016, Victor Ortiz. Licensed under MIT.
 * 
 * Released on: February 14, 2016
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
    $el.bind('burgermenu.toggle', function(e) {
      e.preventDefault();
      $html.toggleClass('opened-' + opts.position);
    });

    $el.find(opts.children_selector).each(function(i, item) {
      var $item = $(item),
          child_id = 'bm-panel-' + i;

      $item.siblings('a').attr('href', '#' + child_id);
      $item.remove();

      $el.append($item);
      $item.wrap("<div class='burgermenu-panel' id='" + child_id + "'/>");
    });

    $el.find('.active').closest('.burgermenu-panel').addClass('opened');

    $document.on('click touchstart', '#burgermenu-blocker, ' + opts.toggle_selector, function(e) {
      e.preventDefault();
      e.stopPropagation();
      $el.trigger('burgermenu.toggle');
    });

    // Bind open/close submenu event
    $el.on('click', opts.parent_selector + ' > a', function(e) {
      e.preventDefault();
      $($(this).attr('href')).toggleClass('opened');
    });

    $el.on('click', opts.back_selector, function(e) {
      e.preventDefault();
      $(this).closest('.burgermenu-panel').toggleClass('opened');
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
