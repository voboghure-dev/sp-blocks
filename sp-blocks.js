let sliders = document.querySelectorAll(".slider");

sliders.forEach((slider, index) => {
  let wrapper = slider.querySelector(".slider-wrapper");
  let control = slider.querySelector(".slider-control");
  let prev = control.querySelector(".prev");
  let next = control.querySelector(".next");
  let ul = wrapper.querySelector("ul");
  let li = ul.querySelectorAll("li");
console.log(next);
  let wrapperWidth = wrapper.clientWidth; // 800
  let itemWidth = li[0].clientWidth; //200
  let totalItem = li.length; // 11
  let totalWidth = itemWidth * totalItem; // 2200
  let position = wrapperWidth / itemWidth; // 4
  let initilPosition = position;
  let moveItem = 1;

  prev.addEventListener("click", (event) => {
    let currentOffset = itemWidth * position;
	console.log(event);

    if (wrapperWidth >= currentOffset) {
      return;
    }

    position = position - moveItem;

    if (position < initilPosition) {
      position = initilPosition;
    }

    let offset = itemWidth * position;
    let move = wrapperWidth - offset;

    ul.style.setProperty("--position", move + "px");
  });

  next.addEventListener("click", (event) => {
    let currentOffset = itemWidth * position;

    if (totalWidth <= currentOffset) {
      return;
    }

    position = position + moveItem;

    if (position > totalItem) {
      position = totalItem;
    }

    let offset = itemWidth * position;
    let move = wrapperWidth - offset;

    ul.style.setProperty("--position", move + "px");
  });

});
