let qrcode
let teamname = ""
if(localStorage.getItem("event") && localStorage.getItem("subEvent")){
    let database = firebase.database();
    let btn = document.getElementById("btn")
    let members =[]
    btn.addEventListener("click", (e)=>{
        e.preventDefault();
        if(validate()){
            let name = document.getElementById("Lname").value
            let dept = document.getElementById("dept").value
            let email = document.getElementById("email").value
            let phone = document.getElementById("phone").value
            let college = document.getElementById("college").value
            let event = localStorage.getItem("event")
            let subEvent = localStorage.getItem("subEvent")

            let fields = document.querySelectorAll(".extra")
            for(let i=0;i<fields.length/2;i++){
                members.push({
                        "name": document.getElementById(`name${i+2}`).value, 
                        "department": document.getElementById(`dept${i+2}`).value
                })
            }
            console.log(name, email, dept, phone, event, subEvent, teamname, members)
            document.querySelector(".loader-1").style.display="block"
            let date = new Date()
            database.ref(`${event}/${subEvent}/${phone}`).set({
                a_teamName: teamname,
                b_leaderName: name, 
                c_college: college, 
                d_department: dept,
                e_email: email, 
                f_phoneNo: phone, 
                g_members: members,
                time: date.toString(),
                payment: "none"
            }, (error)=>{
                if(error){
                    console.log(error)
                    document.getElementById("snackbar").innerHTML="Some error occurred"
                    myFunction()
                }else{
                    document.querySelector(".loader-1").style.display="none"
                    document.getElementById("snackbar").innerHTML="You are registered for "+subEvent
                    myFunction()
                    qrcode = new QRCode(document.querySelector(".qr"), {
                        text: event+" "+subEvent+" "+phone,
                        width: 200,
                        height: 200,
                        colorDark : "#000000",
                        colorLight : "#ffffff",
                        correctLevel : QRCode.CorrectLevel.H
                    });
                    closeBtn = document.querySelector(".close-button")
                    modal = document.getElementById("modal")
                    openModal()
                    modal.addEventListener("click", closeModal)
                    closeBtn.addEventListener("click", closeModal)
            
                }
            });
        }
        else{
            document.getElementById("snackbar").innerHTML="Fill proper details."
            myFunction()
        }

        
    })
}else{
    alert("No Event Category Was Selected")
    window.location.href = "/index.html"
}

function validate(){
    let email = validateEmail()
    let phone = validatePhone()
    let fields = checkFields()
    let teamname = validateTeamName()
    if (email && phone && fields && teamname){
        return true
    }else{
        return false
    }
}

function validateTeamName(){
    let name = document.getElementById(`teamName`)
    if(name===null){
        return true
    }
    else{
        if (name.value!==""){
            teamname = document.getElementById("teamName").value
            console.log(teamname)
            return true;
        }
        else{
            document.querySelector(".error.teamName").style.display = "block"
            setTimeout(()=> {
                document.querySelector(".error.teamName").style.display = "none"
            }, 5000)
            check = false
        }
    }
    
}
        


function validatePhone(){
    let phone = document.getElementById("phone").value
    if(phone.length == 10){
        return true
    }else{
        document.querySelector(".error.phone").style.display = "block"
        setTimeout(()=> {document.querySelector(".error.phone").style.display = "none"}, 5000)
        return false
    }
}

function validateEmail(){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(document.getElementById("email").value)){
        return true
    }else{
        document.querySelector(".error.email").style.display = "block"
        setTimeout(()=> {document.querySelector(".error.email").style.display = "none"}, 5000)
        return false
    }
}

function checkFields(){
    let fields = document.querySelectorAll(".check")
    let check = []
    for(i=0; i<fields.length;i++){
        check.push(false)
    }
    // console.log(fields.length)
    var letters = /^[A-Z a-z]+$/;
    for(i=0;i<fields.length;i++){
        if(document.getElementById(`${fields[i].id}`).value.match(letters)){
            // console.log(true)
            check[i] = true
        }else{
            // console.log(false)
            document.querySelector(`.error.${fields[i].id}`).style.display = "block"    
            setTimeout(()=> {
                for(i=0;i<fields.length;i++)
                    document.querySelector(`.error.${fields[i].id}`).style.display = "none"
            }, 5000)
            check[i] = false
        }
    }
    for(i=0; i<fields.length;i++){
        if(check[i] === false){
            return false
        }
    }
    return true
}

function openModal(){
    let subEvent = localStorage.getItem("subEvent")
    document.querySelector(".modal_name h2").innerHTML = "You have registered for "+subEvent
    if(modal.classList[1] === "out"){
        modal.classList.remove("out")
    }
    modal.classList.add("active")
}

function closeModal(e){
    if (e.target == modal || e.target == closeBtn) {
        modal.classList.remove("active")
        modal.classList.add("out")
    }
    document.querySelector(".qr canvas").remove()
    document.querySelector(".qr img").remove()
    window.close()

}