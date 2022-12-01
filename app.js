console.log("loads");

//Select the section with an id of container without using querySelector
const noQuerySelector = document.getElementById("container");

//Select the section with an id of container using querySelector.
const withQuerySelector = document.querySelector("section");

// Select all of the list items with a class of “second”.
const selectAllLi = document.querySelectorAll("li second");

//Select a list item with a class of third, but only the list item inside of the ol tag.
const onlyOl = document.querySelector("ol li third");

// Give the section with an id of container the text “Hello!”.
noQuerySelector.innerText = "Hello!"

// Not working Add the class main to the div with a class of footer.
const addClass = document.getElementsByClassName("footer");
//addClass.classList.add("main");
addClass.className += " main";

// Remove the class main on the div with a class of footer.
//addClass.classList.remove("main");

// Create a new li element.
let newLi = document.createElement("li");

//* Give the li the text “four”.
newLi.innerText = "four";

//* Append the li to the ul element.
//newLi.appendChild(ul);

//* Loop over all of the lis inside the ol tag and give them a background color of “green”.
const allOL = document.querySelectorAll("ol li");
for (let i of allOL) {
    allOL.style.backgroundColor = "green";
}


// Remove the div with a class of footer
//addClass.classList.remove("footer")
 