if('serviceWorker' in navigator){
navigator.serviceWorker.register('service-worker.js');
}

document.addEventListener("keypress",e=>{
if(e.key==="Enter"){
sendMsg();
}
});