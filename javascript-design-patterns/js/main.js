var viewModel = function() {
    this.name = ko.observable('Carmilla');
    this.image = ko.observable('images/panther400.jpg');
    this.clicks = ko.observable(0);
    this.level = ko.observable('Newborn');

    /* http://knockoutjs.com/documentation/observableArrays.html */
    this.nicknames = ko.observableArray(['Pickles', 'Miss Kitty', 'Gizmo', 'Simba']);

    this.incrementCounter = function() {
        this.clicks(this.clicks() + 1);
    };

    this.getLevel = ko.computed(function() {
        if(this.clicks() >= 10) this.level('Infant');
        if(this.clicks() >= 50) this.level('Teen');
        console.log('level: ' + this.level());
        return this.level();
    }, this);

};

ko.applyBindings(new viewModel());
