var initialCats = [
    {
        name: 'Carmilla',
        image: 'http://lorempixel.com/400/320/cats/1',
        clicks: 0,
        nicknames: ['Carm', 'Kitty']
    },
    {
        name: 'Pickles',
        image: 'http://lorempixel.com/400/320/cats/2',
        clicks: 0,
        nicknames: ['Sourpuss']
    },
    {
        name: 'Miss Kitty',
        image: 'http://lorempixel.com/400/320/cats/3',
        clicks: 0,
        nicknames: ['KitKat']
    },
    {
        name: 'Gizmo',
        image: 'http://lorempixel.com/400/320/cats/4',
        clicks: 0,
        nicknames: ['Giz', 'Mo']
    },
    {
        name: 'Simba',
        image: 'http://lorempixel.com/400/320/cats/5',
        clicks: 0,
        nicknames: ['Lion', 'Tiger']
    }
];

var Cat = function(data) {
    this.name = ko.observable(data.name);
    this.image = ko.observable(data.image);
    this.clicks = ko.observable(data.clicks);
    this.nicknames = ko.observableArray(data.nicknames);

    this.getLevel = ko.computed(function() {
        var title = '';
        var clicks = this.clicks();
        if(clicks < 10) {
            title = 'Newborn';
        } else if (clicks < 20) {
            title = 'Infant';
        } else if(clicks < 50) {
            title = 'Teen';
        } else {
            title = 'Adult';
        }
        return title;
    }, this);
};

var viewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push( new Cat(catItem) );
    });

    this.currentCat = ko.observable( this.catList()[0] );

    this.incrementCounter = function() {
        self.currentCat().clicks(self.currentCat().clicks() + 1);
    };

    this.changeCat = function(newCat) {
        self.currentCat(newCat);
    };
};

ko.applyBindings(new viewModel());
