$(function() {

    var $catList = $('#catList');
    var $catImg = $('#cat1');

    var model = {
        catNames: ['Carmilla', 'Pickles', 'Miss Kitty', 'Gizmo', 'Simba'],

        catObjArray: [],

        Cat: function(index, name) {
            this.name = name;
            this.image = 'http://lorempixel.com/400/320/cats/' + (index + 1);
            this.clicks = 0;
        },

        getCatNames: function() {
            return model.catNames;
        },

        addCat: function(index,name) {
            return new model.Cat(index,name);
        },

        getCats: function() {
            return model.catObjArray;
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

    // TODO: remove functions when you can ref the data directly with model.xyz
    var octopus = {

        getClickedCat: function(name) {
            var catsArray = model.getCats();
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
            var names = model.getCatNames();
            var cats = model.getCats();
            view.init(names, cats);
        }
    };

    // TODO: use this.elem to reference the id for the html
    var view = {
        init: function(catNames, catObjArray) {
            view.renderList(catNames, catObjArray);

            // Set the first cat object
            var catObj = catObjArray[0];

            // List of cat names click event
            $('.listlink').click(function(e) {
                $catImg.parent().find('.circleCount').text('');
                catObj = octopus.getClickedCat(this.innerHTML);
                view.render(catObj);
                e.preventDefault();
            }); // .listlink

            // Cat image click event
            $catImg.click(function(e) {
                catObj.clicks++;
                $catImg.parent().find('.circleCount').text(catObj.clicks);
            }); // #cat1
        },

        render: function(catObj){
            // Clicks
            $catImg.parent().find('.circleCount').text(catObj.clicks);

            // Name
            $catImg.parent().find('figcaption').text(catObj.name);

            // Image
            $catImg.attr('src', catObj.image);
        },
        // TODO: split views
        renderList: function(catNames){
            for( var i = 0; i < catNames.length; i++) {
                $catList.append('<li class="list">' +
                                '<a class="listlink" href="#' + catNames[i] + '">' +
                                catNames[i] +
                                '</a></li>');
            } // for
        } // renderList
    };

    octopus.init();
}());