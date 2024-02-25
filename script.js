function addContact() {
  let contact1 = document.getElementById("new_message");

  if (contact1.value != null && contact1.value.trim() != "") {
    console.log("Thank you for reaching out");

    showPopup(true);

    //var element = document.createElement("div");
    //element.setAttribute("class","contact");
    //element.innerHTML = "\<span\>&#8220;\</span\>" + contact1.value + "\<span\>&#8221;\</span\>";
    //document.getElementById("contact-section").appendChild(element); 
   
    contact1.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
