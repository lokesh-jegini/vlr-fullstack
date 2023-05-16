// debugger;

document.querySelectorAll("button")[0].addEventListener("click", () => {
  sum(10, 200);
});
// debugger;
// Create a new <div> element
const newDiv = document.createElement("div");
// Set some attributes and content for the new <div> element
newDiv.id = "myDiv";
newDiv.className = "myClass";
newDiv.textContent = "before and afte the graphically viw of dom!";
// Append the new <div> element to an existing element in the document
const parentElement = document.getElementById("demo");
parentElement.appendChild(newDiv);

function sum(a, b) {
  debugger;
  var a;
  var b;
  alert(a + b);
}
