console.log("Hello");
let grid = document.createElement("div");
grid.classList.add("grid");

// grid.setAttribute("style", "display:flex");
grid.setAttribute("style", "height:480px;width:480px");
document.body.appendChild(grid);

let divline;
let divwrapper;

function createGrid(squrperside) {
    for (let i = 0; i < squrperside; i++) {
        divline = document.createElement("div");
        divline.classList.add('divline');

        divwrapper = document.createElement("div");
        divwrapper.classList.add('divwrapper');

        divline.style.display = "flex";
        divwrapper.style.display = "flex";

        grid.appendChild(divline);
        divline.appendChild(divwrapper);
        for (let i = 0; i < squrperside; i++) {
            let divpixel = document.createElement("div");
            divpixel.classList.add('divpixel')
            divwrapper.appendChild(divpixel);
        };
    };
    console.log(divwrapper.offsetWidth);
};

createGrid(16);



// for (let i = 0; i < 16; i++) {
//     let divline = document.createElement("div");
//     divline.classList.add('divline');
//     grid.appendChild(divline);
//     for (let i = 0; i < 16; i++) {
//         let divpixel = document.createElement("div");
//         divpixel.classList.add('divpixel')
//         divline.appendChild(divpixel);
//     };
// };

let divpixels = document.querySelectorAll('.divpixel');
divpixels.forEach(divpixel => {
    divpixel.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = "red";
    });
});

const gridsizebutton = document.querySelector("#gridsize");
gridsizebutton.addEventListener('click', function () {
    userSize = prompt("Please enter a number of squares per side for the new grid (maximum 16):");
    // console.log(userSize);
    while (userSize > 16) {
        userSize = prompt("Please enter a number of squares per side for the new grid (maximum 16):");
    };
    grid.innerHTML = "";
    createGrid(userSize);
    let divpixels = document.querySelectorAll('.divpixel');
    divpixels.forEach(divpixel => {
        divpixel.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = "red";
        });
    });

});