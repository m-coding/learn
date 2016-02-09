$(function() {

    var model = {
        catNames: ['Carmilla', 'Pickles', 'Miss Kitty', 'Gizmo', 'Simba'],
        catObjArray: [],
        currentCat: {},

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
            model.currentCat = model.catObjArray[0];
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

        getCurrentCat: function () {
            return model.currentCat;
        },

        setCurrentCat: function (cat) {
            model.currentCat = cat;
        },

        getCats: function () {
            return model.catObjArray;
        },

        updateCat: function(prevName, newName, newImage, newClicks) {
            var catsArray = model.catObjArray;
            var catsLength = catsArray.length;
            var cat = {};
            var c = 0;

            for(c; c < catsLength; c++) {
                cat = catsArray[c];

                if(cat.name === prevName) {
                   cat.name = newName;
                   cat.image = newImage;
                   cat.clicks = newClicks;
                   break; //jump out of loop
                } // if
            } // for

            model.currentCat = cat;
            view.render();
            view.renderList();
        },

        init: function() {
            model.init();
            view.init();
            viewAdmin.init();
        }
    };


    var view = {
        init: function() {
            // Save pointers to our DOM elements
            this.$catList = $('#catList');
            this.$catImg = $('#cat1');

            // Initial click value
            this.$catImg.parent().find('.circleCount').text('0');

            // Display the first cat object
            view.render();

            // Display list of cat names
            view.renderList();

            // List of cat names click event
            $('.listlink').click(function(e) {
                var catObj = octopus.getClickedCat(this.innerHTML);

                octopus.setCurrentCat(catObj);
                view.render();
                viewAdmin.render();
                e.preventDefault();
            }); // .listlink

            // Cat image click event
            this.$catImg.click(function(e) {
                var cat = octopus.getCurrentCat();
                cat.clicks++;
                $(this).parent().find('.circleCount').text(cat.clicks);
            }); // #cat1
        },

        render: function() {
            var cat = octopus.getCurrentCat();

            // Clicks
            this.$catImg.parent().find('.circleCount').text(cat.clicks);

            // Name
            this.$catImg.parent().find('figcaption').text(cat.name);

            // Image
            this.$catImg.attr('src', cat.image);
        },

        renderList: function(){
            var cats = octopus.getCats();

            $.each(cats, function(index, catObj) {
                view.$catList.append('<li class="list">' +
                    '<a class="listlink" href="#' + catObj.name + '">' +
                    catObj.name +
                    '</a></li>');
            });

        } // renderList
    };

    var viewAdmin = {
        init: function() {
            // Save pointers to our DOM elements
            this.$adminButton = $('#admin');
            this.$adminArea = $('#adminArea');
            this.$nameInput = $('#name');
            this.$urlInput = $('#url');
            this.$clicksInput = $('#clicks');
            this.$cancelButton = $('#cancel');
            this.$saveButton = $('#save');

            // Display the admin area
            this.$adminButton.click(function(e) {
                var currentCat = octopus.getCurrentCat();

                viewAdmin.render(currentCat);
                viewAdmin.$adminArea.css('display', 'block');
            });

            // Clear the values
            this.$cancelButton.click(function(e) {
                viewAdmin.$nameInput.val('');
                viewAdmin.$urlInput.val('');
                viewAdmin.$clicksInput.val('');
            });

            // Save the values
            this.$saveButton.click(function(e) {
                var cat = octopus.getCurrentCat();
                var name = viewAdmin.$nameInput.val();
                var image = viewAdmin.$urlInput.val();
                var clicks = viewAdmin.$clicksInput.val();
                octopus.updateCat(cat.name, name, image, clicks);
            });
        },

        render: function() {
            var currentObj = octopus.getCurrentCat();

            this.$nameInput.val(currentObj.name);
            this.$urlInput.val(currentObj.image);
            this.$clicksInput.val(currentObj.clicks);
        }

    };

    octopus.init();
}());