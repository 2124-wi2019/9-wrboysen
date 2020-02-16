/*
Bill Boysen
boysen_a09b.js
INFO_2124_WW
Thoendel
2/16/2020
*/

//Searches the document and builds a collection of the <p> tags found
let myP = document.getElementsByTagName('p');

//Searches the document and builds a collection of the <div> tags found
let myDiv = document.getElementsByTagName('div');

//Searches the document and builds a collection of the paragraph classed items found
let myParagraph = document.getElementsByClassName('paragraph');

//Searches the document and builds a collection of the block-text classed items found
let myBlockText = document.getElementsByClassName('block-text');

//Searches the document for the element tagged b001 and saves the contents to a variable
let myElement = document.getElementById('b001').innerHTML;

//Template literal to display the information required
let msg = `There are ${myP.length} <p> tags in this HTML document.
There are ${myDiv.length} <div> tags in this HTML document.
There are ${myParagraph.length} paragraph classed elements in this HTML document.
There are ${myBlockText.length} block-text classed elements in this HTML document.
The element with the ID attribute value of b001 is:
${myElement}`;

//Prints the template to the console
console.log(msg);