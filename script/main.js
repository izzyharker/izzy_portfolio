// make the 3 content options in dom
// and then switch between them depending on selection
const content = document.querySelector(".content")
const buttons = [document.querySelector("#homebutton"), document.querySelector("#aboutbutton"), document.querySelector("#projectbutton")];

const home = document.querySelector(".home")
const aboutme = document.querySelector(".about")
const projects = document.querySelector(".projects")

function switch_content(option) {
    console.log("clicked button", option)
    buttons.forEach((element) => {
        element.classList.remove("active")
    })
    content.replaceChildren("");
    switch (option) {
        case "home":
            content.appendChild(home)
            document.querySelector("#homebutton").classList.add("active")
            break
        case "about":
            content.appendChild(aboutme)
            aboutme.classList.add("active")
            document.querySelector("#aboutbutton").classList.add("active")
            break
        case "projects":
            content.appendChild(projects)
            projects.classList.add("active")
            document.querySelector("#projectbutton").classList.add("active")
    }
}

document.onload(document.querySelector("#homebutton").click());