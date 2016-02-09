/* EVENT LISTER: JavaScript */
// var elem = document.getElementById('my-elem');
// elem.addEventListener('click', function(){
//   //the element has been clicked... do stuff here
// }, false);

/* EVENT LISTENER: jQuery */
// $('#my-elem').click(function(e) {
//   //the element has been clicked... do stuff here
// });

var count = 0;
var catNames = ['Pickles','Carmilla'];
var $catContainer = $('#catContainer');

/**
 * Display all the cat names
 */
for( var i = 0; i < catNames.length; i++) {
   displayName(i, catNames[i]);
}

/**
 * Cat Click Counter
 */
$('.cats').click(function(e) {
    var $catImg = $('#catImg');
    count++;

    displayCount(this.id, count.toString());
});

/**
 * Display a cat's name
 */
function displayName(index, name) {
   var id = index + 1;
   var $cat = $('#cat' + id);
   var catX = $cat.width();
   var catY = $cat.height();

   var $name = $('<figcaption id="' + name + '">' + name + "</figcaption>");
   $name.css('position', 'absolute');
   $name.css('top', catY - 50);
   $name.css('left', catX - 100);
   $cat.parent().append($name);

   // console.log('displayName(' + index + ', ' + name + ')');
}

/**
 * Display count
 */
function displayCount(id, count) {
   var $cat = $('#' + id);
   // console.log('displayCount() id: #' + id + ' count: ' + count);

   if($cat.parent().find('.circleCount').length) {
      $cat.parent().find('.circleCount').text(count);
      console.log('text()');
   } else {
      var docfrag = document.createDocumentFragment();
      var $div = $('<div class="circleCount">' + count + '</div>');
      $div.appendTo(docfrag);
      $cat.parent().prepend(docfrag);
      console.log('prepend()');
   }
}