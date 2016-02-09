/* VARIABLES
----------------------------------*/

var catNames = ['Carmilla', 'Pickles', 'Miss Kitty', 'Gizmo', 'Simba'];
var catObj = {};
var catObjArray = [];
var $catList = $('#catList');
var $catImg = $('#cat1');
var currentObj = {};

/* EVENT LISTENERS
----------------------------------*/

$(document).ready(function() {

    /**
     * Cat image click counter
     */
    $catImg.click(function(e) {
        currentObj.clicks++;
        $catImg.parent().find('.circleCount').text(currentObj.clicks);
    });

    /**
     * Cat list click event
     */
    $('.listlink').click(function(e) {
        $catImg.parent().find('.circleCount').text('');
        for(var c = 0; c < catObjArray.length; c++) {
            var cat = catObjArray[c];
            if(cat.name === this.innerHTML) {
                cat.displayName();
                cat.displayImage();
                currentObj = cat;
                break; // jump out of the loop
            }
        }
        return false;
    }); // .listlink
}); // document.ready

/* CAT CLASS
----------------------------------*/

/**
 * Cats
 * @class  Cat
 * @param {string} name - The cat's name
 */
var Cat = function(index, name) {
    this.id = '#cat1';
    this.name = name;
    this.image = 'http://lorempixel.com/400/320/cats/' + (index + 1);
    this.cat = $(this.id);
    this.clicks = 0;
};

Cat.prototype = {
    constructor: Cat,

    displayName: function () {
        this.cat.parent().find('figcaption').text(this.name);
    },

    displayImage: function () {
        this.cat.attr('src', this.image);
    }
};

/* INSTANTIATE OBJECTS
----------------------------------*/

/**
 * Display all the cat names
 */
for( var i = 0; i < catNames.length; i++) {
    $catList.append('<li class="list">' +
                    '<a class="listlink" href="#' + catNames[i] + '">' +
                    catNames[i] +
                    '</a></li>');
    catObj = new Cat(i, catNames[i]);
    catObjArray.push(catObj);

    if( i === 0) {
        catObj.displayName();
    }
}
