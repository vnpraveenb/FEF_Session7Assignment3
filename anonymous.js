
//Create an Anonymous function which will be called in another function. Use SetTimeout() and display the content after 5 milliseconds.

//This function is called the contents of the element with id ="sometext through an anonymous function after a delay of 5 milliseconds"
function textTimeout()
{
  // Executes the anonymous function after a delay of 5 milliseconds
  setTimeout (function(){
      // Changes the content of element with id = sometext with a given text
      document.getElementById("sometext").innerHTML = "This is some gibberish"; 
    }, 5);
}    