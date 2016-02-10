# JavaScript Design Patterns

These are exercises from the Udacity online course: _JavaScript Design Patterns_

The app is called "Cat Clicker" and as required specs change, code needs to be refactored to incorporate the changes asked for.

Eventually the final app will be organized using the **MVC** design pattern.

Later you are asked to use [KnockoutJS](http://knockoutjs.com/), which uses the **Model View ViewModel** pattern.

## Lesson 1: Changing Expectations
### v1 Cat Clicker
* :small_blue_diamond: Visuals: **1)** a picture of a cat **2)** number of clicks
* :small_orange_diamond: Interaction: the number of clicks should increment when the cat picture is clicked

### v2 Cat Clicker
* :small_blue_diamond: Visuals: **1)** display two cats **2)** cat's name, picture, number of clicks
* :small_orange_diamond: Interaction: the number of clicks should increment when the cat picture is clicked

### v3 Cat Clicker Premium
* :small_blue_diamond: Visuals: **1)** display five cats listed by name **2)** an area to display the selected cat **3)** name, picture, clicks
* :small_orange_diamond: Interaction: the number of clicks should increment when the cat picture is clicked

## Lesson 2: Refactoring with Separation of Concerns
### v4 Cat Clicker Premium
* :small_red_triangle: Seperate the **Model** from the **View**, only the **Octopus** can talk to both
* :small_blue_diamond: Visuals: **1)** a list of cats by name **2)** an area to display the selected cat **3)** name, picture, clicks
* :small_orange_diamond: Interaction: **1)** when a cat name is clicked in the list, the cat display area should update to show the data for the selected cat **2)** the number of clicks should be unique to each cat

### v5 Cat Clicker Premium
* :small_red_triangle: Improve previous version by referring to the proposed solution

### v6 Cat Clicker Premium Pro
* :small_red_triangle: Adds an Admin area to update the cat's data
* :small_blue_diamond: Visuals: **1)** a list of cats by name **2)** an area to display the selected cat **3)** admin button **4)** admin area with inputs **5)** name, picture, clicks
* :small_orange_diamond: Interaction: **1)** when a cat name is clicked in the list, the cat display area should update to show the data for the selected cat **2)** the number of clicks should be unique to each cat **3)** admin button click displays admin area with inputs pre-filled in **4)** cancel button, admin area disappears **5)** save button, cat's values are updated, admin area disappears

## Lesson 3: Using an Organizational Library
### v7 Cat Clicker Knockout
* :small_red_triangle: Add **KnockoutJS** [observables](http://knockoutjs.com/documentation/observables.html) and [bindings](http://knockoutjs.com/documentation/text-binding.html) to display the cat data.

### v8 Cat Clicker Knockout
* :small_red_triangle: Add Levels to Cat Clicker: Newborn, Infant, Teen using **KnockoutJS** [computed observables](http://knockoutjs.com/documentation/computedObservables.html).

### v9 Cat Clicker Knockout
* :small_red_triangle: Implement an array of nicknames for each cat using **KnockoutJS** [control flow](http://knockoutjs.com/documentation/foreach-binding.html) to display them all.

### v10 Cat Clicker Knockout
* :small_red_triangle: Separate out the cat **Model** from the **ViewModel**.

### v11 Cat Clicker Knockout
* :small_red_triangle: Implement **KnockoutJS** [with](http://knockoutjs.com/documentation/with-binding.html) binding.

### v12 Cat Clicker Knockout
* :small_red_triangle: Pass `data` to the Cat constructor function so you can create multiple cats.

# What I learned

TBD
