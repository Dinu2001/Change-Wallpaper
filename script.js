


// document.querySelector('.previous').addEventListener('click',function(){
//     let list = document.querySelectorAll('.slide .div1');
//     document.querySelector('.slide').prepend(list[list.length-1]);
// });

var number = 0;

var slider = function () {
    let list = document.querySelectorAll('.slide .div1');
    if (number >= list.length) {
        number = 0;
    }
    document.querySelector('.slide').appendChild(list[number]);
}
setInterval(slider, 2000);

slider();
