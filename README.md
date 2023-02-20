# oddduck
Code Fellows Week 3 201

1. We need three products to vote for at a time
2. After a week of data, we will make some graphs to visualize the results
3. Three potential products, side by side--hey flot box
4. None can be favored, so we should randomize the order they're displayed on the page.
5. We'll need to manage the size and aspect rations of the images
6. We need to store each vote as an anonymous vote
  Then calculate the totals
  then visually display the results
7. No results should be shown on the page before 25 selections have been made
8. The marketing team wants the total number of clicks, and the percentage of times an item was selected when it was shown.
  keep track of how many times an item was displayed, and do the calculations


Requirements:
Create a Constructor function that creates an object associated with each product and has the following properties:
  * name of the product
  * file path of the image
  * times the image has been shown.

* Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

* For each of the three images, increment its property of times it has been shown by one.

* Attach an event listener to the section of the HTML page where the images are going to be displayed.

* Once the users ‘clicks’ a product, generate three new products for the user to pick from.

* As a user, I would like to track the selections made by viewers so that I can determine which products to begin production on.

* In the constructor function define a property to hold the number of times a product has been clicked.

* After every selection by the viewer, update the newly added property to reflect if it was clicked.

* As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.
* By default, the user should be presented with 25 rounds of voting before ending the session.
* Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.
* As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.
* Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

* After voting rounds have been completed, remove the event listeners on the product.

* Add a button with the text View Results, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: banana had 3 votes, and was seen 5 times.
