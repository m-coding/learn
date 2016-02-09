# JavaScript Design Patterns

These are exercises from the Udacity online course: _JavaScript Design Patterns_

The app is called "Cat Clicker" and as required specs change, code needs to be refactored to incorporate the changes asked for.

Eventually the final app will be organized using the **MVC** design pattern.

Later you are asked to use [KnockoutJS](http://knockoutjs.com/), which uses the **Model View ViewModel** pattern.

## Lesson 1: Changing Expectations
### v1 Cat Clicker
* Visuals: **1)** a picture of a cat **2)** number of clicks
* Interaction: the number of clicks should increment when the cat picture is clicked

### v2 Cat Clicker
* Visuals: **1)** display two cats **2)** cat's name, picture, number of clicks
* Interaction: the number of clicks should increment when the cat picture is clicked

### v3 Cat Clicker Premium
* Visuals: **1)** display five cats listed by name **2)** an area to display the selected cat **3)** name, picture, clicks
* Interaction: the number of clicks should increment when the cat picture is clicked

## Lesson 2: Refactoring with Separation of Concerns
### v4 Cat Clicker Premium
* Seperate the **Model** from the **View**, only the **Octopus** can talk to both
* Visuals: **1)** a list of cats by name **2)** an area to display the selected cat **3)** name, picture, clicks
* Interaction: **1)** when a cat name is clicked in the list, the cat display area should update to show the data for the selected cat **2)** the number of clicks should be unique to each cat

# What I learned

TBD