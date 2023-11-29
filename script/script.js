const nome = document.querySelector("#name");
nome.addEventListener("click", () => {
    console.log("Gabriel Freitas :)");
    alert("Nome: Gabriel Freitas");
});

const celular = document.querySelector("#cell");
celular.addEventListener("click", () => {
    console.log("Enviando telefone de contato");
    alert("Celular (011) 96779-4488");
});

const email = document.querySelector("#e-mail");
email.addEventListener("click", () => {
    console.log("E-mail para contato");
    alert("e-mail: fynggabriel@gmail.com")
});

const html = document.querySelector(".skills-image #html");
html.addEventListener("click", () => {
    console.log("Habilidade em html: 30%");
});
const css = document.querySelector(".skills-image #css");
css.addEventListener("click", () => {
    console.log("Habilidade em css: 30%");
});
const git = document.querySelector(".skills-image #git");
git.addEventListener("click", () => {
    console.log("Habilidade em github: 10%")
});
const js = document.querySelector(".skills-image #js");
js.addEventListener("click", () => {
    console.log("Habilidade em javasicript: 10%")
});

const web = document.querySelector(".area-img#web");
web.addEventListener("mouseover", () => {
    web.style.backgroundColor = "#FFD700";

    web.addEventListener("mouseout", () => {
        web.style.backgroundColor = "#FFFAF0"
    });
});

const backend = document.querySelector(".area-img#backend");
backend.addEventListener("mouseover", () => {
    backend.style.backgroundColor = "#FFD700";

    backend.addEventListener("mouseout", () => {
        backend.style.backgroundColor = "#FFFAF0";
    });
});

const design = document.querySelector(".area-img#design");
design.addEventListener("mouseover", () => {
    design.style.backgroundColor = "#FFD700";

    design.addEventListener("mouseout", () => {
        design.style.backgroundColor = "#FFFAF0";
    });
});

const app = document.querySelector(".area-img#app");
app.addEventListener("mouseover", () => {
    app.style.backgroundColor = "#FFD700";

    app.addEventListener("mouseout", () => {
        app.style.backgroundColor = "#FFFAF0";
    });
});


const header = document.querySelector("header")
header.addEventListener("mouseover", () => {
    header.style.backgroundColor = "#FFD700";

    header.addEventListener("mouseout", () => {
        header.style.backgroundColor = "#E6EAE1";
    });
});




