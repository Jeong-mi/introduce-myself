btn1 = document.querySelector('.btn1');
btn2 = document.querySelector('.btn2');
btn3 = document.querySelector('.btn3');

me_img = document.querySelector('.me_img');
me_text = document.querySelector('.me_text');

btn1.addEventListener('click', function(){
    //me_img.setAttribute("src", "../img/hard.jpg");
    me_text.innerHTML = '<i class="bx bxs-quote-alt-left quote-icon-left"></i> 경험할 수 있을 때 최선을 다하고 싶습니다. <i class="bx bxs-quote-alt-right quote-icon-right"></i>';
});

btn2.addEventListener('click', function(){
    //me_img.setAttribute("src", '../img/happy.jpg');
    me_text.innerHTML = '<i class="bx bxs-quote-alt-left quote-icon-left"></i> 소소한 행복을 느낄 줄 아는 사람이 되고 싶습니다. <i class="bx bxs-quote-alt-right quote-icon-right"></i>';
});

btn3.addEventListener('click', function(){
    //me_img.setAttribute("src", '../img/good.jpg');
    me_text.innerHTML = '<i class="bx bxs-quote-alt-left quote-icon-left"></i> 배울 점이 있는 사람이 되고 싶습니다. <i class="bx bxs-quote-alt-right quote-icon-right"></i>';
})
