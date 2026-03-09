let currentUser;

function startApp(user){

currentUser=user;

document.getElementById("loader").style.display="none";
document.getElementById("app").classList.remove("hidden");

listenChat();

}

function sendMsg(){

let txt=document.getElementById("msgInput").value;

if(!txt)return;

db.ref("messages").push({
uid:currentUser.uid,
text:txt,
time:Date.now()
});

document.getElementById("msgInput").value="";

}

function listenChat(){

db.ref("messages").on("child_added",snap=>{

let data=snap.val();

let div=document.createElement("div");
div.className="msg";
div.innerText=data.text;

document.getElementById("chatArea").appendChild(div);

});

}