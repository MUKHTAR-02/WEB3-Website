var web3;
async function Connect(){
  await window.web3.currentProvider.enable();
  web3 = new Web3(window.web3.currentProvider);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.fontSize = "30px";
  } else {
    document.getElementById("navbar").style.fontSize = "90px";
  }
}

function SubscribeButton() {
  // window.alert("Welcome to our website");
  
// testing
swal("Good job!", "Subscribed succesfully.", "success");

//   var result = window.confirm('Are you sure?');
//     if (result === true) {
//       window.alert('Subscribed succesfully.');
//     } else { 
//       window.alert('You seem uncertain.');
//     }
}

