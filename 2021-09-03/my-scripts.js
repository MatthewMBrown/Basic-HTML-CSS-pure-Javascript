function submitClick(){
    document.getElementById("submit");
    var name =  document.getElementById("name");
    var surname = document.getElementById("surname");
    var mobileNumber =document.getElementById("mobileNumber");
    var emailAddress = document.getElementById("emailAddress");
    var selectedRace = document.getElementById("race");
    var isCitizen = document.getElementById("citizenYes");
    var isNotCitizen = document.getElementById("citizenNo");
    
    //Validation
    var mobNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const email = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;

    if(name.value ==  "" || surname.value == "" || emailAddress == "" || mobileNumber == ""){
        alert("Please fill in required fields");
    }

    else if(!mobileNumber.value.match(mobNo)){
        alert("Invalid mobile number")
    }
    
    else if(!email.test(emailAddress.value)){
        alert("Invalid email");    
    }

    else if(selectedRace.value == ""){
        alert("Please select a race");
    }

    else if(!isCitizen.checked && !isNotCitizen.checked){
        alert("Please check citizen");
    }

    else{
    var newLine = "\r\n"
            var msg = name.value
            msg += newLine;
            msg += surname.value;
            msg += newLine;
            msg += mobileNumber.value;
            msg += newLine;
            msg += emailAddress.value;
            msg += newLine;
            msg += selectedRace.value;
            
            if(isCitizen.checked){
                msg += newLine;
                msg += isCitizen.value;
            }

            else if(isNotCitizen.checked){
                msg += newLine;
                msg += isNotCitizen.value;
            }
            alert(msg)
            //location.reload();
    }        
}

function clearContent(){
    document.getElementById("clear");
    var name =  document.getElementById("name");
    var surname = document.getElementById("surname");
    var mobileNumber =document.getElementById("mobileNumber");
    var emailAddress = document.getElementById("emailAddress");
    var isCitizen = document.getElementById("citizenYes").checked = false;
    var isNotCitizen = document.getElementById("citizenNo").checked = false;

    name.value = "";
    surname.value = "";
    mobileNumber.value = "";
    emailAddress.value = "";

}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('citizen')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

