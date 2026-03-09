function signup(){

let username=document.getElementById("username").value;
let email=document.getElementById("email").value;
let pass=document.getElementById("pass").value;

let reg=/^[a-z0-9]{4,20}$/;

if(!reg.test(username)){
alert("invalid username");
return;
}

auth.createUserWithEmailAndPassword(email,pass)
.then(user=>{

db.ref("users/"+user.user.uid).set({
username:username
});

location="index.html";

})
.catch(e=>alert(e.message));
}

function login(){

let email=document.getElementById("email").value;
let pass=document.getElementById("pass").value;

auth.signInWithEmailAndPassword(email,pass)
.then(()=>{
location="index.html";
})
.catch(e=>alert(e.message));

}

function logout(){
auth.signOut();
location="login.html";
}

auth.onAuthStateChanged(user=>{

if(location.pathname.includes("index.html")||location.pathname=="/"){

if(!user){
location="login.html";
}else{
startApp(user);
}

}

});