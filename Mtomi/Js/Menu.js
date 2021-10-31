
document.querySelector('.sliding_bt_1').addEventListener('click',function(){
    document.querySelector('.container').style.transform = 'translate(0vw)';
})

document.querySelector('.sliding_bt_2').addEventListener('click',function(){
    document.querySelector('.container').style.transform = 'translate(-100vw)';
});

document.querySelector('.sliding_bt_3').addEventListener('click',function(){
    document.querySelector('.container').style.transform = 'translate(-200vw)';
});