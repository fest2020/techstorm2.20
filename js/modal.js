btn = document.getElementById("btn")
modal = document.getElementById("modal")
btn.addEventListener("click", openModal)
modal.addEventListener("click", closeModal)

function openModal(){
    if(modal.classList[1] === "out"){
        modal.classList.remove("out")
    }
    modal.classList.add("active")
}

function closeModal(e){
    if (e.target == modal) {
        modal.classList.remove("active")
        modal.classList.add("out")
    }
}