const profile1 = document.getElementById("profile");
const edit = document.getElementById("edit");

 function change() {
   if(edit.style.display = "none"){
     
     profile1.style.display= "none";
     edit.style.display = "block";
    }else{
      profile1.style.display= "block";
     edit.style.display = "none";
   }
  
 }

  
 document.getElementById("a").innerText = localStorage.getItem("Name");
 document.getElementById("b").innerText = localStorage.getItem("Mobile");
 document.getElementById("c").innerText = localStorage.getItem("Email");
 document.getElementById("d").innerText = localStorage.getItem("DOB");
 document.getElementById("e").innerText = localStorage.getItem("Password");


 function change1() {
  
   
     profile1.style.display= "block";
    edit.style.display = "none";
  
 
}




function profileChange() {
  const name = document.getElementById("name").value;
  const num = document.getElementById("mob").value;
  const email = document.getElementById("ema").value;
  const dob = document.getElementById("date").value;
  const pass = document.getElementById("pass").value;
  localStorage.setItem("Name", name);
  localStorage.setItem("Mobile", num);
  localStorage.setItem("Email", email);
  localStorage.setItem("DOB", dob);
  localStorage.setItem("Password", pass);

change1()
  document.getElementById("a").innerText = localStorage.getItem("Name");
  document.getElementById("b").innerText = localStorage.getItem("Mobile");
  document.getElementById("c").innerText = localStorage.getItem("Email");
  document.getElementById("d").innerText = localStorage.getItem("DOB");
  document.getElementById("e").innerText = localStorage.getItem("Password");



  
}

function back(){
  window.location.href="d.html";
}