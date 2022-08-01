console.log("Hello");
grid = document.createElement("div");
grid.classList.add("grid");
document.body.appendChild(grid);

for (let i = 0; i < 16; i++) {
    divline = document.createElement("div");
    divline.classList.add('divline');
    grid.appendChild(divline);
    for (let i = 0; i < 16; i++) {
        divpixel = document.createElement("div");
        divpixel.classList.add('divpixel')
        divline.appendChild(divpixel);
    };
};