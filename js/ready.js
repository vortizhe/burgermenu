$(function(){
  // Demo 1 & 4
  $('#menu-example').burgermenu();

  // Demo 2
  $('#menu-example-right').burgermenu({
    position: "right"
  });

  // Demo 3
  $('#menu-example1').burgermenu({
    toggle_selector: '#menu-toggle1'
  });
  $('#menu-example2').burgermenu({
    position: 'right',
    toggle_selector: '#menu-toggle2'
  });
});
