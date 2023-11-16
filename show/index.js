let countcontainer = document.querySelector('.count');
let count = document.querySelector('.count').innerHTML;
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
    nav.classList.toggle("active");
});
setInterval(() => {
    if (count <= 0) {
        return;
    }
    count--;
    countcontainer.textContent = count;
    console.log(count);
},1000);

// burger menu