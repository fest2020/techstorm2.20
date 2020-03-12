// localStorage.setItem("event", "BrainTeasers")
// localStorage.setItem("subEvent", "OMEGATRIX")

function htmlDeptCheck(id){
    return`
    <div class="form-row m-b-55">
        <div class="name">Member ${id} Department</div>
        <div class="value">
            <div class="input-group">
                <input class="input--style-5 check extra" type="text" name="dept${id}" id="dept${id}">
                <label class="error dept${id} label--desc">Invalid department name</label>
            </div>
        </div>
    </div>`
}
function htmlNameCheck(id){
    return `
    <div class="form-row m-b-55">
        <div class="name">Member ${id} <br>Name</div>
        <div class="value">
            <div class="input-group">
                <input class="input--style-5 check extra" type="text" name="name${id}" id="name${id}">
                <label class="error name${id} label--desc">Invalid name</label>
            </div>
        </div>
    </div>`
}
// function htmlDept(id){
//     return`
//     <div class="form-row m-b-55">
//         <div class="name">Member ${id} Department</div>
//         <div class="value">
//             <div class="input-group">
//                 <input class="input--style-5 dept-uncheck dept-uncheck${id}" type="text" name="dept${id}" id="${id}">
//                 <label class="error dept-uncheck${id} label--desc">Field is Required</label>
//             </div>
//         </div>
//     </div>`
// }
// function htmlName(id){
//     return`
//     <div class="form-row m-b-55">
//         <div class="name">Member ${id} <br>Name</div>
//         <div class="value">
//             <div class="input-group">
//                 <input class="input--style-5 name-uncheck name-uncheck${id}" type="text" name="name${id}" id="${id}">
//             </div>
//         </div>
//     </div>`
// }
const htmlTeamName= `
    <div class="form-row m-b-55">
        <div class="name">Team Name</div>
        <div class="value">
            <div class="input-group">
                <input class="input--style-5" type="text" name="teamName" id="teamName">
                <label class="error teamName label--desc">Invalid teamname</label>
            </div>
        </div>
    </div>`
 
function removeBtnHtml(id){
    return` 
        <div class="form-row m-b-55">
            <button id="remove-btn" class="${id} btn btn--radius-2 btn--blue" onClick="remove(this.classList[0])" type="button">&minus;</button>
        </div>`
    
}



const extra = document.querySelector(".add-extra")
const teamName = document.querySelector(".add-extra-team-name")
const addBtn = document.getElementById("add-btn")
const removeBtn = document.getElementById("remove-btn")
let members = 1
let maxMembers
let minMembers

addBtn.addEventListener("click", ()=>{
    members+=1
    // console.log(members)
    extraDiv = document.createElement("div")
    extraDiv.classList.add(`extra-div`)
    extraDiv.innerHTML += htmlNameCheck(members)
    extraDiv.innerHTML += htmlDeptCheck(members)
    extra.appendChild(extraDiv)
    if(members>=maxMembers){
        addBtn.disabled = true
        addBtn.classList.add("disabled")
    }
    removeBtn.disabled = false
    removeBtn.classList.remove("disabled")
})


function remove(){
    extras = document.querySelectorAll(`.extra-div`)
    length = extras.length
    extras[length-1].parentNode.removeChild(extras[length-1])
    members -= 1
    if(members!=maxMembers){
        addBtn.disabled = false
        addBtn.classList.remove("disabled")
    }
    if(members==minMembers){
        console.log(members,"disabled")
        removeBtn.disabled = true
        removeBtn.classList.add("disabled")
    }
    
}


// Get event an subevent name from local storage
let event = localStorage.getItem("event")
let subEvent = localStorage.getItem("subEvent")

// Dynamic Form generation
switch(subEvent){
    case "APPMANIA":
        document.querySelector(".none").classList.remove("none")
        minMembers = 1 
        maxMembers = 2
        addBtn.style.display = "block"
        teamName.innerHTML += htmlTeamName
        break;
    case "FANTAC":
        extra.innerHTML += htmlNameCheck(2)
        extra.innerHTML += htmlDeptCheck(2)
        teamName.innerHTML += htmlTeamName
        break
    case "TECHNOMANIA":
        document.querySelector(".none").classList.remove("none")
        minMembers = 2 
        maxMembers = 4
        addBtn.style.display = "block"
        for(i=2;i<=2;i++){
            extra.innerHTML += htmlNameCheck(i)
            extra.innerHTML += htmlDeptCheck(i)
            members+=1
        }//required part

        teamName.innerHTML += htmlTeamName
        break;
    case "EXPOSCIENCE":
        for(i=2;i<=4;i++){
            extra.innerHTML += htmlNameCheck(i)
            extra.innerHTML += htmlDeptCheck(i)
            members+=1
        }//required part
        teamName.innerHTML += htmlTeamName
        break;
        // document.querySelector(".none").classList.remove("none")
        // minMembers = 1 
        // maxMembers = 4
        // addBtn.style.display = "block"
        // teamName.innerHTML += htmlTeamName
        // break;
    case "ROTERRANCE":
        document.querySelector(".none").classList.remove("none")
        minMembers = 3 
        maxMembers = 4
        addBtn.style.display = "block"
        for(i=2;i<=3;i++){
            extra.innerHTML += htmlNameCheck(i)
            extra.innerHTML += htmlDeptCheck(i)
            members+=1
        }//required part

        teamName.innerHTML += htmlTeamName
        break;
    case "RONAVIGATOR":
        document.querySelector(".none").classList.remove("none")
        minMembers = 2 
        maxMembers = 4
        addBtn.style.display = "block"
        extra.innerHTML += htmlNameCheck(2)
        extra.innerHTML += htmlDeptCheck(2)
        teamName.innerHTML += htmlTeamName
        members+=1
        break
    case "ROCARROM":
        document.querySelector(".none").classList.remove("none")
        minMembers = 2 
        maxMembers = 5
        addBtn.style.display = "block"
        for(i=2;i<=2;i++){
            extra.innerHTML += htmlNameCheck(i)
            extra.innerHTML += htmlDeptCheck(i)
            members+=1
        }//required part

        teamName.innerHTML += htmlTeamName
        break;
    case "ROCOMBAT":
    case "ROSOCCER":
    case "ROWINGS":
    case "ROPICKER":
        document.querySelector(".none").classList.remove("none")
        minMembers = 3 
        maxMembers = 5
        addBtn.style.display = "block"
        for(i=2;i<=3;i++){
            extra.innerHTML += htmlNameCheck(i)
            extra.innerHTML += htmlDeptCheck(i)
            members+=1
        }//required part

        teamName.innerHTML += htmlTeamName
        break;
    case "PASSIONWITHREELS":
        document.querySelector(".none").classList.remove("none")
        minMembers = 5 
        maxMembers = 8
        addBtn.style.display = "block"
        for(i=2;i<=5;i++){
            extra.innerHTML += htmlNameCheck(i)
            extra.innerHTML += htmlDeptCheck(i)
            members+=1
        }//required part

        teamName.innerHTML += htmlTeamName
        break;
}

if(members>=maxMembers){
    console.log(members,"disabled")
    addBtn.disabled = true
    addBtn.classList.add("disabled")
}

let eventname=localStorage.getItem("subEvent")
let h2=document.querySelector(".title")
h2.innerHTML+=eventname+" Registration Form"

// Function for displaying toast
function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

if(members==minMembers){
    console.log(members,"disabled")
    removeBtn.disabled = true
    removeBtn.classList.add("disabled")
}