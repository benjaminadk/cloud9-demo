var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var total = document.getElementById('total');
var count = 0;

plus.addEventListener('click', function(){
    count++;
    total.innerHTML = count;
});

minus.addEventListener('click', function(){
    count--;
    total.innerHTML = count;
});