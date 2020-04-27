// console.log("HELLLO");

// var btnClick = function(event){
//   console.log("BUTTON CLIKED: SONG ID")
//   console.log(event.target.innerText)
//   var request = new XMLHttpRequest();
//   var responseHandler = function() {
//     console.log("response text", this.responseText);
//     event.target.style="display:none";
//   };

//   request.addEventListener("load", responseHandler);

//   var data = {
//     tweed_id : "liked"
//   };

//   request.open("POST", '/favourite');
//   request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//   request.send(JSON.stringify(data));
// }

// var buttons = document.querySelectorAll('.btn');

// for( var i=0; i<buttons.length; i++){
//   var button = buttons[i]
//   button.addEventListener('click', btnClick)
// }