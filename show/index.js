let countcontainer = document.querySelector('.count');
let count = document.querySelector('.count').innerHTML;

setInterval(() => {
    if (count <= 0) {
        return;
    }
    count--;
    countcontainer.textContent = count;
    console.log(count);
},1000);