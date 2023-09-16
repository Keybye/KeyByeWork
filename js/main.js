const main = document.querySelector('.main')
Array(3)
    .fill(null)
    .forEach(()=>{
        main.insertAdjacentHTML("beforeend", '<div>a</div>')
    })
