let documentBody = document.querySelector("body")

let tower1 = document.createElement("img")
tower1.name = "tower1"
tower1.setAttribute("src", "towerim.jpg")
tower1.style.paddingLeft = "150px"
tower1.style.paddingRight = "100px"


//documentBody.append(tower1)

let tower2 = document.createElement("img")
tower2.name = "tower2"
tower2.setAttribute("src", "towerim.jpg")
tower2.style.paddingLeft = "100px"
tower2.style.paddingRight = "100px"
documentBody.append(tower2)


let tower3 = document.createElement("img")
tower3.name = "tower3"
tower3.setAttribute("src", "towerim.jpg")
tower3.style.paddingLeft = "100px"
tower3.style.paddingRight = "100px"
documentBody.append(tower3)


let span1 = document.createElement("span")
documentBody.append(span1)

let br = document.createElement("br")
span1.append(br)

let br1 = document.createElement("br")
let disc1 = document.createElement("img")
disc1.classList.add("mystyle4")
disc1.style.position = "relative"
disc1.style.top = "-100px"
disc1.style.left = "55px"
span1.append(disc1)
span1.append(br1)

let br2 = document.createElement("br")
let disc2 = document.createElement("img")
disc2.classList.add("mystyle3")
disc2.style.position = "relative"
disc2.style.top = "-100px"
disc2.style.left = "45px"
span1.append(disc2)
span1.append(br2)

let br3 = document.createElement("br")
let disc3 = document.createElement("img")
disc3.classList.add("mystyle2")
disc3.style.position = "relative"
disc3.style.top = "-100px"
disc3.style.left = "35px"
span1.append(disc3)
span1.append(br3)

let br4 = document.createElement("br")
let disc4 = document.createElement("img")
disc4.classList.add("mystyle1")
disc4.style.position = "relative"
disc4.style.top = "-100px"
disc4.style.left = "25px"
span1.append(disc4)
span1.append(br4)

span1.append(tower1)

let buTton = document.createElement("button")
buTton.append("click here")
documentBody.append(buTton)



tower1.addEventListener("click", function () {
    let click1 = target(click)
})

tower2.addEventListener("click", function () {
    let click2 = target(click)
})

tower3.addEventListener("click", function () {
    let click3 = target(click)
})


function target(click) {
    var currentEventTarget = click.currentTarget.tower1
}
var count = tower1.disc

let selectDisc = true
function clickhandler(event) {
    if (selectDisc) {
        selectDisc = false
    } else {
        selectDisc = true
    }
}
