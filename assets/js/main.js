
const firebaseConfig = {
  apiKey: "AIzaSyAzadFkol2qPJm1K0F-H8waGKJ_2cSVzRw",
  authDomain: "freight-liner-data.firebaseapp.com",
  projectId: "freight-liner-data",
  storageBucket: "freight-liner-data.appspot.com",
  messagingSenderId: "90778119169",
  appId: "1:90778119169:web:cece8d6deb836c09bca400"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("formData");

//Get Submit Form
let submitButton = document.getElementById("submit");

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let fName = document.getElementById("fName").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  firestore
    .collection("formData")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const fn = doc.data().fName;
        if (fName === fn) {
          console.log("Already Exists");
        }

        // console.log("data", doc.data().fname);
      });
    });
  //Save Form Data To Firebase
  db.doc()
    .set({
      fName: fName,
      email: email,
      subject: subject,
      message: message,
    })
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });

  //alert
  alert("Your Form Has Been Submitted Successfully");

  //clear form after submission
  function clearForm() {
    document.getElementById("clearFrom").reset();
  }
  clearForm()
});


//mobile toggle for nav

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}


// Form information

//change the nav bar background color when scrolled
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

