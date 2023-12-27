// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVK5sFvhHP_H9iB3IiRy0Dcx1Gnz9zG4k",
    authDomain: "kwitter-chat-1dc84.firebaseapp.com",
    databaseURL: "https://kwitter-chat-1dc84-default-rtdb.firebaseio.com",
    projectId: "kwitter-chat-1dc84",
    storageBucket: "kwitter-chat-1dc84.appspot.com",
    messagingSenderId: "467146364633",
    appId: "1:467146364633:web:ae6bf944de9b4f424a90c8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebaseConfig.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

  function getData() {firebaseConfig.database().ref("/").on('value', function (snapshot) {document.getElementById("output").innerHTML
  Room_names = childkey;
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
});});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
