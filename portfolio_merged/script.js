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
<<<<<<< HEAD
function loaderAnimation() {
=======
function loaderAnimation(){
>>>>>>> 8aa567c793058ac8f83ae6339b4220f390db905e
  var t1 = gsap.timeline();
  t1.from(" .child Span", {
    x: "500px",
    ease: Circ.easeInOut,
    duration: 3,
    delay: -1,
  });
  t1.to(".parent .child", {
    y: "-100%",
    ease: Circ.easeInOut,
    duration: 1,
    delay: 1,
  })
<<<<<<< HEAD
    .to(".row .row1,.row .text", {
      top: "0px",
      duration: 2,
      ease: Expo.easeInOut,
    })
=======
>>>>>>> 8aa567c793058ac8f83ae6339b4220f390db905e
    .to("#green", {
      height: "100%",
      duration: 2,
      delay: -0.8,
      ease: Expo.easeInOut,
    })
    .to("#white", {
      height: "100%",
      duration: 2,
      delay: -1.8,
      ease: Expo.easeInOut,
    });
<<<<<<< HEAD
  // visual effect to visual svg
}
function visual() {
  document
    .querySelectorAll("#Visual g path,#Visual g polyline")
    .forEach(function (e) {
      let length = e.getTotalLength();
      e.style.strokeDasharray = length + "px";
      e.style.strokeDashoffset = length + "px";
    });

  gsap.to(" #Visual g path, #Visual g polyline", {
    strokeDashoffset: 0,
    duration: 2,
    ease: "expo.power",
    delay: 5,
  });
}

// load the function
reveleToSpan();
loaderAnimation();
visual();

=======
}
reveleToSpan();
loaderAnimation()
gsap.from("g path", "polyline", {
  strokeDasharray: 64.68521881103516,
  strokeDashoffset: 64.68521881103516,
  duration: 1,
  ease: "easeInOUt",
});
>>>>>>> 8aa567c793058ac8f83ae6339b4220f390db905e
