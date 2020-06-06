setTimeout(() => {
  document.getElementById('bgSplash').classList.add('fade');
}, 4000);

function createAcc() {
  document.getElementById('loginSection').style. display ="none";
  document.getElementById('signUp').style.display = 'block';
}

// hng function
// function details(value) {
//   return console.log(value);
// }
// myProfile = { fullName : "Oluwasegun Aiyedona", hngID: "HNG-02498", language : "JavaScript", Email : "segunaiyedona@gmail.com" };
// details(`Hello world, this is ${myProfile.fullName} with HNGi7 ID ${myProfile.hngID} and email ${myProfile.Email} using ${myProfile.language} for Stage 2 task`);