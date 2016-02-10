var viewModel = function() {
    this.name = ko.observable('Carmilla');
    this.image = ko.observable('images/panther400.jpg');
    this.clicks = ko.observable(0);
    this.level = ko.observable('Newborn');

    this.incrementCounter = function() {
        this.clicks(this.clicks() + 1);
    };

    /* http://knockoutjs.com/documentation/computedObservables.html */
    this.getLevel = ko.computed(function() {
        if(this.clicks() >= 10) this.level('Infant');
        if(this.clicks() >= 50) this.level('Teen');
        console.log('level: ' + this.level());
        return this.level();
    }, this);

};

ko.applyBindings(new viewModel());
