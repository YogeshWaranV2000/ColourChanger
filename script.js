const btn = document.querySelector('button');
 const body = document.querySelector('body');
 const color = ['vilot','skyblue','red','blue','yellow','green'];
 body.style.backgroundColor = 'black';
document.addEventListener('click',function(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor =color[colorIndex];
 });