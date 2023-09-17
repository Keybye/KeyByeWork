const main = document.querySelector('.main')
Array(3)
    .fill(null)
    .forEach(()=>{
        main.insertAdjacentHTML("beforeend", '<div>a</div>')
    })
function change(){
    var div=document.getElementById("top");
    var w=parseInt(div.style.width);
    var h=parseInt(div.style.height);
    div.style.width="30%";
    div.style.height="50%";
}
