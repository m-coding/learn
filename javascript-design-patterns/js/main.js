var Cat = function() {
    this.name = ko.observable('Carmilla');
    this.image = ko.observable('images/panther400.jpg');
    this.clicks = ko.observable(0);
    this.level = ko.observable('Newborn');
    this.nicknames = ko.observableArray(['Pickles', 'Miss Kitty', 'Gizmo', 'Simba']);

    this.getLevel = ko.computed(function() {
        if(this.clicks() >= 10) this.level('Infant');
        if(this.clicks() >= 50) this.level('Teen');
        return this.level();
    }, this);
};

var viewModel = function() {

    this.currentCat = ko.observable( new Cat() );

    this.incrementCounter = function() {
        // 'this' represents the binding context set in index.html
        this.clicks(this.clicks() + 1);
    };

    // Alternate way:
    // var self = this;
    // self.currentCat().clicks(self.currentCat().clicks() + 1);

};

ko.applyBindings(new viewModel());
