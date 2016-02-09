$(function() {

    var model = {
        catNames: ['Carmilla', 'Pickles', 'Miss Kitty', 'Gizmo', 'Simba'],

        catObjArray: [],

        Cat: function(index, name) {
            this.name = name;
            this.image = 'http://lorempixel.com/400/320/cats/' + (index + 1);
            this.clicks = 0;
        },

        addCat: function(index,name) {
            return new model.Cat(index,name);
        },

        createAllCats: function() {
            for( var i = 0; i < model.catNames.length; i++) {
                model.catObjArray.push(model.addCat(i, model.catNames[i]));
            } // for
        },

        init: function() {
            model.createAllCats();
        }
    };


    var octopus = {

        getClickedCat: function(name) {
            var catsArray = model.catObjArray;
            var catsLength = catsArray.length;
            var cat = {};
            var c = 0;

            for(c; c < catsLength; c++) {
                cat = catsArray[c];

                if(cat.name === name) {
                    return cat;
                } // if
            } // for
        },

        init: function() {
            model.init();
            view.init(model.catNames, model.catObjArray);
        }
    };


    var view = {
        init: function(catNames, catObjArray) {
            // Save pointers to our DOM elements
            this.$catList = $('#catList');
            this.$catImg = $('#cat1');

            // Set the first cat object
            catObj = catObjArray[0];
            view.render(catObj);

            // Display list of cat names
            view.renderList(catNames, catObjArray);

            // List of cat names click event
            $('.listlink').click(function(e) {
                view.$catImg.parent().find('.circleCount').text('');
                catObj = octopus.getClickedCat(this.innerHTML);
                view.render(catObj);
                e.preventDefault();
            }); // .listlink

            // Cat image click event
            this.$catImg.click(function(e) {
                catObj.clicks++;
                $(this).parent().find('.circleCount').text(catObj.clicks);
            }); // #cat1
        },

        render: function(catObj){
            // Clicks
            this.$catImg.parent().find('.circleCount').text(catObj.clicks);

            // Name
            this.$catImg.parent().find('figcaption').text(catObj.name);

            // Image
            this.$catImg.attr('src', catObj.image);
        },

        // TODO: split views? nah
        renderList: function(catNames){
            for( var i = 0; i < catNames.length; i++) {
                this.$catList.append('<li class="list">' +
                                '<a class="listlink" href="#' + catNames[i] + '">' +
                                catNames[i] +
                                '</a></li>');
            } // for
        } // renderList
    };

    octopus.init();
}());