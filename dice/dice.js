const canva = document.getElementById("mycanvas");
canva.height = 400;
canva.width = 400;
const ctx = canva.getContext('2d');
ctx.strokeStyle = 'Black';
// const clickKey = (event) => {
//     if (event.code == 'Space') {
//         ctx.fillText("6");
//     }
// }
const color=()=>
    {
    canva.style='background-color:aqua';

    }
const draw = (dicenum) => {
    ctx.clearRect(0, 0, canva.width, canva.height)
    ctx.font=`100px Arial`;
    ctx.rect(100,300,40,50)
    ctx.textAlign='center';
    canva.style='background-color:white';
    setTimeout(color,200)
    ctx.fillText(dicenum, canva.width / 2, canva.height / 2);
    // canva.style='background-color:aqua'; 

}
const roll = () => {
    const randnum = Math.floor(Math.random() * 6) + 1;
    draw(randnum);
}
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        roll();
    }

}); 