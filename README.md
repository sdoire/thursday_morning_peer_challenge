# super_gross_javascript
#Super Gross JavaScript Master#
###AKA MabLibs Knockoff!###
1. In this assignment we start with a button on the screen that is inactive, we did this by using  $(".generate").prop("disabled", true);.
This was just put right into the html. Where .generate is the button.
2. Next we created three separate json files where we had an array of different words. 
3. We then needed to create an ajax call within our document ready.
  * We actually created three separeate ajax calls where we are calling in our three different files.
  * Upon testing and seeing which call ran last (the last in the file) we put a complete: function which changed the button from disabled true, to disabled false.
4. Then we declared three separarate arrays above our document ready. They are all empty for now.
5. Inside of our ajax functions we added a line that pushed the words into our different arrays.
6. Next We just created a random number function, which would spit out a random number and return it.
7. Then we have a click event on the generate button which:
  * sets a variable for a random number by doing this: getRandomNumber(0,9)
  * with this variable we created another one where we are actually finding indece in the array of that number. Setting
it to that new variable. Which upon console loging we see the random words are stored.
8. Finally we are able to append our new random words onto the DOM below our button.
9. One final task is to remove the words when the button is clicked again.
10. Whalla!!!!! MAGIC!

##Heroku Link###
https://quiet-tor-4135.herokuapp.com/
