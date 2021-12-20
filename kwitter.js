function addUser() {
    name= document.getElementById("user_name").value
 
    localStorage.setItem("new",name)
 
     window.location = "kwitter_room.html"
 }