//mobile toggle for nav
function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

//loader screen
$(window).on("load", function () {
  $(".loader").fadeOut(2000);
  $(".pagecontent").fadeIn(2000);
});
//loader screen

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