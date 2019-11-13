$('.btn-selector').click(function(e) {
  e.preventDefault();
  $('.have-container').toggle()
})

$('.grid').masonry({
  // options...
  itemSelector: '.grid-item',
  columnWidth: 200
});