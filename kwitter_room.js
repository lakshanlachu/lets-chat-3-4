var firebaseConfig = {
    apiKey: "AIzaSyCQp1h2TCAZnXWGY8xRJmWGWuuP_WEmyV4",
    authDomain: "kwiter-54ca8.firebaseapp.com",
    databaseURL: "https://kwiter-54ca8-default-rtdb.firebaseio.com",
    projectId: "kwiter-54ca8",
    storageBucket: "kwiter-54ca8.appspot.com",
    messagingSenderId: "540972482876",
    appId: "1:540972482876:web:16f11eb7751119fcc49e39"
  };
 firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("new")
 document.getElementById("user_name").innerHTML = "welcome " + user_name + " !"

function add_room()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose:"kkfffeoooodk"
  })


    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row; 
      });});}
getData();


function redirectToRoomName(name)
{
   localStorage.setItem("room_name" , name)
   window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("room_name") 
      localStorage.removeItem("new") 
      window.location = "index.html"
}