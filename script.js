console.log("Hello");
grid = document.createElement("div");
grid.classList.add("grid");
document.body.appendChild(grid);

for (let i = 0; i < 16; i++) {
    divline = document.createElement("div");
    divline.classList.add(`line${i}`);
    grid.appendChild(divline);
    for (let i = 0; i < 16; i++) {
        subdiv = document.createElement("div");
        divline.appendChild(subdiv);
    };
};