Finally you are up to the table for the board, start with a table, within this table we need 7 table rows.

Within each **tr** we need to make  **7 td tags**. We will use *numbers to represent each potential position* - **A0 will be 00 to us and A0 to the user**. Add id's to each td, the first should be 00, the second 01, the third 02 and so on

*A = 0 || B = 1 || C = 2 || D = 3 || E = 4 || F = 5 || G = 6* 
<!-- THIS IS HOW WE WILL LABEL THE TABLE -->
<table>
    <!-- battleship row 0  SO THIS IS A01, A02, A03 ETC -->
    <tr>
      <td id="00"></td><td id="01"></td><td id="02"></td><td id="03"></td><td id="04"></td><td id="05"></td><td id="06"></td>
    </tr>
    <!-- battleship row 1  THIS IS B01, B02, B03  ETC -->
    <tr>
      <td id="10"></td><td id="11"></td><td id="12"></td><td id="13"></td><td id="14"></td><td id="15"></td><td id="16"></td>
    </tr>
</table>


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    **JS file**

1. Create our **'view'** object This will be used to make a method to display messages to the user based on their input & we will make two other methods to deal with adding a class to the user input location.

2. Add a **"displayMessage"** method and set it to a function with a **parameter of msg**. In the function create a variable called <const messageArea> and target the **messageArea** id in the HTML, using document .getElemetById.
Then *call the variable we just made and change the .innerHTML to equal the msg parameter.*

3. Make a new method called **"displayHit"** setting it to a function passing *'location'* function displayHit(location){}
const cell, use it to find the document.getElementById and find the location.

This will be converted to number form so we can find an individial <td> id. 
<const .setAttribute> <class of hit> to the cell.

4. **displayMiss**  setting it to a function passing *'location'*
<const cell = document.getElementById and find the location.
call **cell** "add .setAtrribute add the "class" of "miss" to the cell -- this will assign either of the two images based on iuser hits the ship or misses a ship.*