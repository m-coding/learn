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

/**
 * Cat Click Counter
 */
$('#cat').click(function(e) {
    var $catImg = $('#catImg');
    var $div = $('#catCounter');
    count++;

    $div.html(count.toString());
});

