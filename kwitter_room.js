//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDCwDzRsgKGf07yFr-kzk_DRN1sAUyiU-I",
  authDomain: "kwitter-72086.firebaseapp.com",
  databaseURL: "https://kwitter-72086-default-rtdb.firebaseio.com",
  projectId: "kwitter-72086",
  storageBucket: "kwitter-72086.appspot.com",
  messagingSenderId: "246468726805",
  appId: "1:246468726805:web:3baf10ac263a30e84f7e1c"
};

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name - "+Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr> ";
  document.getElementById("output").innerHTML+=row;
  //End code
  });});}
getData();

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"Adding Room Name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html"; 
}

function logout(){
 window.location="index.html";
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
}

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"; 
}
