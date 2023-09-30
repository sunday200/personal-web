const toggle = document.getElementById("toggle")
toggle.addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("darkMode", "true")
    document.documentElement.classList.add("dark")
  } else {
    localStorage.setItem("darkMode", "false")
    document.documentElement.classList.remove("dark")
  }
})

const a = localStorage.getItem("darkMode")
if (a === "true") {
  toggle.checked = true
  document.documentElement.classList.add("dark")
} else {
  document.documentElement.classList.remove("dark")
}

// Get a reference to the div element
const divAbout = document.getElementById("about")
const divExperience = document.getElementById("experience")
const divProjects = document.getElementById("projects")

function handleScroll() {
  function positionDiv() {
    var position = divAbout.getBoundingClientRect()
    if (
      (position.top / totalHeight) * 100 > -10 &&
      (position.top / totalHeight) * 100 < 10
    ) {
      addNav(0)
    } else {
      deleteNav(0)
    }

    var position1 = divExperience.getBoundingClientRect()
    if (
      (position1.top / totalHeight) * 100 > -10 &&
      (position1.top / totalHeight) * 100 < 10
    ) {
      addNav(1)
    } else {
      deleteNav(1)
    }

    var position2 = divProjects.getBoundingClientRect()
    console.log((position2.top / totalHeight) * 100)

    if (
      (position2.top / totalHeight) * 100 > -10 &&
      (position2.top / totalHeight) * 100 < 20
    ) {
      addNav(2)
    } else {
      deleteNav(2)
    }
    console.log("======" + position.top)
  }

  positionDiv()

  console.log("== " + window.innerHeight)
}

function addNav(nomor) {
  const got = document.querySelectorAll("#got")
  got[nomor].classList.remove("w-8")
  got[nomor].classList.add("w-16")
}

function deleteNav(nomor) {
  const got = document.querySelectorAll("#got")
  got[nomor].classList.remove("w-16")
  got[nomor].classList.add("w-8")
}

// Attach the scroll event listener to the window
window.addEventListener("scroll", handleScroll)

var totalHeight = Math.max(
  document.documentElement.scrollHeight,
  document.body.scrollHeight
)

// Display the total height in the console
console.log("Total Height of HTML Document:", totalHeight)
