// Select all elements with the class "revele"
document.querySelectorAll(".revele").forEach(function (elem) {
  // Create a span element to act as the parent
  let spanParent = document.createElement("span");
  // Create another span element to act as the child
  let spanChild = document.createElement("span");

  // Assign classes to the span elements
  spanParent.classList.add("parent");
  spanChild.classList.add("child");

  // Set the text content of the child span to the text of the h1
  spanChild.textContent = elem.textContent;

  // Append the child span to the parent span
  spanParent.appendChild(spanChild);

  // Clear the original h1 content and append the parent span
  elem.innerHTML = "";
  elem.appendChild(spanParent);
});
