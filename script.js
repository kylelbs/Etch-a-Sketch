console.log("Hello");
let grid = document.createElement("div");
grid.classList.add("grid");
document.body.appendChild(grid);

for (let i = 0; i < 16; i++) {
    let divline = document.createElement("div");
    divline.classList.add('divline');
    grid.appendChild(divline);
    for (let i = 0; i < 16; i++) {
        let divpixel = document.createElement("div");
        divpixel.classList.add('divpixel')
        divline.appendChild(divpixel);
    };
};

let divpixels = document.querySelectorAll('.divpixel');
divpixels.forEach(divpixel => {
    divpixel.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = "red";
    })
})