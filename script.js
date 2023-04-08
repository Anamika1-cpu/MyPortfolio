function valueSetters() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home span .child", { y: "100%" });
}

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    //create 2 spans
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");
    //parent and child both sets their respective classes
    spanParent.classList.add("parent");
    spanChild.classList.add("child");
    //span parent gets child and child gets elem details
    spanChild.innerHTML = elem.innerHTML;
    spanParent.appendChild(spanChild);
    //elem replaces it's value with paret span
    elem.innerHTML = " ";
    elem.appendChild(spanParent);
  });
}
function loaderAnimation() {
  var tl = gsap.timeline();

  tl.from("#loader .child span", {
    x: 100,
    delay: 1.4,
    duration: 2,
    ease: Power3.easeInOut,
    stagger: 0.2,
  })
    .to("#loader .parent .child", {
      y: "-100%",
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      top: 0,
      height: "100%",
      duration: 1,
      delay: -0.8,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      top: 0,
      height: "0%",
      duration: 1,
      delay: -0.3,
      ease: Circ.easeInOut,
      onComplete: function () {
        animateHomepage();
      },
    });
}

function animateSvg() {
  var tl = gsap.timeline();
  tl.to("#animated-text", {
    opacity: 1,
    ease: Expo.easeInOut,
  });
}
function animateHomepage() {
  var tl = gsap.timeline();
  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  }).to("#home span .child", {
    y: 0,
    stagger: 0.1,
    duration: 1.5,
    ease: Expo.easeInOut,
    onComplete: function () {
      animateSvg();
    },
  });
}
function locoInitialize() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
}

function showCard() {
  document.querySelectorAll(".cnt").forEach(function (cnt) {
    // console.log(cnt);
    var showingImage;
    cnt.addEventListener("mousemove", function (e) {
      document.querySelector("#cursor").children[
        e.target.dataset.index
      ].style.opacity = 1;
      showingImage = e.target;
      // console.log(showingImage);
      document.querySelector("#cursor").children[
        e.target.dataset.index
      ].style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      showingImage.style.filter = "grayscale(1)";
      document.querySelector("#work").style.backgroundColor =
        showingImage.dataset.color;
    });

    cnt.addEventListener("mouseleave", function (e) {
      document.querySelector("#cursor").children[
        showingImage.dataset.index
      ].style.opacity = 0;
      showingImage.style.filter = "grayscale(0)";
      document.querySelector("#work").style.backgroundColor =
        showingImage.dataset.color;
    });
    cnt.addEventListener("click", function (e) {
      console.log(window.location);
      window.location.href = e.target.dataset.url;
    });
  });
}
revealToSpan();
valueSetters();
loaderAnimation();
animateSvg();
locoInitialize();
showCard();

// <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
// viewBox="0 35 870 305"><defs><clipPath id="clip-path" transform="translate(31.09 32.56)">
//    <path id="dot_clip" d="M250.12,82.48c1.15-15.33,9.2-33.72,13.79-44.83l-1.15-.77-30.27,10c-5.36,4.6-9.2,21.46-4.6,30.65C235.18,79.41,244.38,80.94,250.12,82.48Z" fill="none"></path></clipPath>
//    <clipPath id="clip-path-2" transform="translate(31.09 32.56)">
//    <path id="l_clip" d="M794.74,18,754.13,32.57,753,29.5,829.23,0l4.6,5.75L748,285.44l39.46-17.24.77,2.3-52.88,26.44c-7.66-2.3-13.41-9.2-21.07-19.92Z" fill="none"></path></clipPath>
//    <clipPath id="clip-path-3" transform="translate(31.09 32.56)"><path id="i_clip" d="M207.78,123.76l-32.18,9.58-.77-2.3,66.28-21.84,4.21.77L192.45,286.22l39.46-19.92,1.15,2.3L183.25,297c-9.2-6.9-13.79-11.88-20.69-23.37Z" fill="none"></path></clipPath>
//    <clipPath id="clip-path-4" transform="translate(31.09 32.56)"><path id="a_clip" d="M654.51,105.36c14.56-1.92,41,7.66,54,14.18L661,277.78l38.7-16.09v3.06l-72.8,32.18c-1.92-1.53-5.37-4.6-6.13-6.9l46.36-150.58H666c-11.88,29.89-78.16,131.42-95.4,154.41-21.84-3.83-35.25-29.5-35.25-49.43C535.35,182,626.93,106.9,654.51,105.36ZM583.25,263.22c3.07-1.15,67.82-95.79,78.93-123.76l4.21-8.05c-10.35-6.13-23-11.11-36.78-9.58-18.39,0-57.09,85.44-57.09,118C572.52,252.88,575.58,262.07,583.25,263.22Z" fill="none"></path></clipPath>
//    <clipPath id="clip-path-5" transform="translate(31.09 32.56)"><path id="u_clip" d="M409.3,116.09l-36.4,18.39-1.53-2.3L420,106.13c9.58,3.83,16.48,10.34,22.22,19.16,0,22.22-44.45,128-44.45,141.38,0,6.51,3.06,10,10,11.49,2.68-.38,65.14-92.34,94.64-156.71l3.45-8,39.08-2.68L493.21,277l37.16-14.56.38,2.3L459.1,296.93c-1.91-1.53-5.36-4.6-6.13-6.9l54-168.57h-1.15c-29.5,66.67-87.74,173.18-113.41,175.48-19.16-8.05-28.74-12.64-28.74-30.27C363.71,243.68,408.54,128.35,409.3,116.09Z" fill="none"></path></clipPath>
//    <clipPath id="clip-path-6" transform="translate(31.09 32.56)"><path id="s_clip" d="M286.7,275.1c15.71,0,31.8-6.9,39.85-18,3.83-31-60.92-51.34-55.94-93.87,3.83-29.12,41.38-64.37,72-64.37,14.56,0,30.65,1.53,35.25,10.34l-7.66,24.52h-2.68c-12.64-10.34-29.12-22.61-37.93-22.61-18.39,0-29.12,9.58-38.7,20.31,0,37.17,57.47,67.43,55.56,83.91-5.36,41.76-36.78,69-78.16,78.54-13,3.07-41.38-10-41.76-24.52l20.31-17.62C255.67,265.14,273.68,273.57,286.7,275.1Z" fill="none"></path></clipPath>
//    <clipPath id="clip-path-7" transform="translate(31.09 32.56)"><path id="v_clip" d="M197.77,86c-16,78.5-114.7,181.76-183.67,222.16a3.33,3.33,0,0,1-3-3.43c4.57-2.67,9.15-5.72,14.1-9.15-11-5-19.43-16.76-25.15-33.15L69.35,43.72,22.86,64.3,21,59.35l80-36.58,4.57-2.29c3.43,2.29,5.33,6.1,4.57,11.81-12.56,71.64-56,176.81-73.91,248.07a5.41,5.41,0,0,0,3.43,4.95c67.45-51.06,141.75-140.61,149-213.77-11.43-15.24-30.48-31.25-46.49-29,0-3.43,25.91-30.87,28.2-30.87,13,0,33.15,12.19,33.15,38.87C203.48,60.49,201.2,71.92,197.77,86Z" fill="none"></path></clipPath></defs>
//    <g id="dot"><g clip-path="url(#clip-path)"><path id="dot_path" d="M235.53,91.06s-3.65-21.72,18.78-61" transform="translate(31.09 32.56)" fill="none" stroke="#52e0ed" stroke-miterlimit="10" stroke-width="34" style="stroke-dashoffset: 0; stroke-dasharray: none;"></path></g></g>
//    <g id="l"><g clip-path="url(#clip-path-2)"><polyline id="l_path" points="820.4 302.62 755.9 334.12 843.9 39.12 784.4 63.62" fill="none" stroke="#52e0ed" stroke-miterlimit="10" stroke-width="42" style="stroke-dashoffset: 0; stroke-dasharray: none;"></polyline></g></g>
//    <g id="i"><g clip-path="url(#clip-path-3)"><polyline id="i_path" points="207.9 165.12 254.9 147.12 201.9 329.12 262.9 299.12" fill="none" stroke="#52e0ed" stroke-miterlimit="10" stroke-width="42" style="stroke-dashoffset: 0; stroke-dasharray: none;"></polyline></g></g><g id="a"><g clip-path="url(#clip-path-4)"><path id="a_path" d="M671.81,121.56l-104,173s-28-39-5-98,114.34-107,123.5-80.5c9,26-49.5,180.5-49.5,180.5l67.5-35.5" transform="translate(31.09 32.56)" fill="none" stroke="#52e0ed" stroke-miterlimit="10" stroke-width="42" style="stroke-dashoffset: 0; stroke-dasharray: none;"></path></g></g>
//    <g id="u"><g clip-path="url(#clip-path-5)"><path id="u_path" d="M371.81,132.56l64-31-68,200,34-7s80-120,109-181l15-4-55,187,60-33" transform="translate(31.09 32.56)" fill="none" stroke="#52e0ed" stroke-miterlimit="10" stroke-width="42" style="stroke-dashoffset: 0; stroke-dasharray: none;"></path></g></g>
//    <g id="s"><g clip-path="url(#clip-path-6)"><path id="s_path" d="M232.31,261.06s20.5,20.5,32.5,22.5,57-6,69-39-53-64-53-82c0,0,19.5-74.5,97.5-41.5" transform="translate(31.09 32.56)" fill="none" stroke="#52e0ed" stroke-miterlimit="10" stroke-width="42" style="stroke-dashoffset: 0; stroke-dasharray: none;"></path></g></g>
//    <g id="V"><g clip-path="url(#clip-path-7)"><path id="v_path" d="M21.31,59.06l71-32-5,26L26,246.56l-8.69,57.5s85-71,122-114c28-34,100.21-133.4,12-171" transform="translate(31.09 32.56)" fill="none" stroke="#52e0ed" stroke-miterlimit="10" stroke-width="70" style="stroke-dashoffset: 0; stroke-dasharray: none;"></path></g></g></svg>
