
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
// Form information

//mobile toggle for nav
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

//language translator
function googleTranslateElementInit() {
  new google.translate.TranslateElement({ includedLanguages: 'en,am', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL }, 'google_translate_element');
}

function triggerHtmlEvent(element, eventName) {
  var event;
  if (document.createEvent) {
      event = document.createEvent('HTMLEvents');
      event.initEvent(eventName, true, true);
      element.dispatchEvent(event);
  } else {
      event = document.createEventObject();
      event.eventType = eventName;
      element.fireEvent('on' + event.eventType, event);
  }
}

$(document).ready(function () {
  $(document).on('click', '.languageOption', function () {
      var value = $(this).attr("data-lang");

      updateLanguage(value);

  })


  function updateLanguage(value) {
      var selectIndex = 0;
      var a = document.querySelector("#google_translate_element select");
      switch (value) {
          case "en":
              selectIndex = 0;
              break;
          case "am":
              selectIndex = 1;
              break;
      }
      a.selectedIndex = selectIndex;
      a.dispatchEvent(new Event('change'));
  }
})

$("iframe").contents().find("#google_translate_element select *")
          .css({
              'color': '#232350',
              'font-family': 'Roboto',
              'width':'100%'
          });

          $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '20px');

//language translator