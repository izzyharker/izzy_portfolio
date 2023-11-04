// identify the content block
const content = document.querySelector(".content")

// identify the buttons that will be pressed
const buttons = [document.querySelector("#homebutton"), document.querySelector("#aboutbutton"), document.querySelector("#projectbutton")];

// three possible sections will show up
const home = document.querySelector(".home")
const aboutme = document.querySelector(".about")
const projects = document.querySelector(".projects")


// onclick function - switches content and button style
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

// "click" the home button on webpage load
document.onload(document.querySelector("#homebutton").click());