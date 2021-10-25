const horizontal = document.querySelector('horizontal');
const vertical = document.querySelector('vertical');
const target = document.querySelector('target');
const tag = document.querySelector('tag');

addEventListener('load' , function () {
  const targetRect = target.getBoundingClientRect();
  // console.log(targetRect);
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener('mousemove' , (event) => {
    const x = event.clientX
    const y = event.clientY
    console.log(x + "px" + y + "px");
    console.log(`${x} px ${y} px백틱키사용`);

    horizontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateY(${x}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px , ${y - targetHalfHeight}px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    tag.innerHTML = `${x}px ${y}px`;
  });

});