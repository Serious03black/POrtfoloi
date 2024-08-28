function reveleToSpan() {
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
    spanChild.innerHTML = elem.innerHTML;

    // Append the child span to the parent span
    spanParent.appendChild(spanChild);

    // Clear the original h1 content and append the parent span
    elem.innerHTML = "";
    elem.appendChild(spanParent);
  });
}
reveleToSpan();
// gsap.from("h2 .parent .child ", {
//   x: "-100%",
//   ease: Expo.easeInOut,
//   duration: 2,
//   delay:-5,
// });
var t1 = gsap.timeline();
t1.from(" .child Span", {
  x: "500px",
  ease: Circ.easeInOut,
  duration: 3,
  delay: -1,
});
t1.
to(".parent .child", {
  y: "-100%",
  ease: Circ.easeInOut,
  duration: 1,
  delay: 1,
})
.to("#green", {
    height: "100%",
    duration: 2,
    delay: -0.8,
    ease: Expo.easeInOut,
  })
.to("#white", {
    height: "100%",
    duration: 2,
    delay:- 1.8,
    ease: Expo.easeInOut,
  });
