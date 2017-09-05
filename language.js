// Written by Shaun Nelson - 2017
// WWW.SHAUNNELSON.COM

"use strict"

// LANGUAGE CHOICES
var portalLang = {
  "English": {
    "en": "English"
  },
  "Espanol": {
    "es": "Español"
  }
}

// LANGUAGE TRANSLATIONS
var portalDict = {
  "welcome": {
    "en": "Hello",
    "es": "Hola"
  },
  "placeholder": {
    "en": "Text Field",
    "es": "Campo de texto",
  },
  "button": {
    "en": "Button",
    "es": "Botón"
  }
}

// DECLARE VARIABLES

// GET CURRENT LANGUAGE
var currLang = getParameterByName("lang").toLowerCase(),
// LANGUAGE SELECT ARRAY
languages = [],
// LANGUAGE SELECTION ELEMENTS
languageSelect = document.getElementById("langSelect"),
selectList = document.createElement("select"),
// LANGUAGE INDEX
current_language_index = 0,
current_language = languages[current_language_index],
defaultLanguage = "EN";

// CHECK QUERY STRING PARAMETER SET DEFAULT LANGUAGE
if (currLang == "") {
  if (document.URL.indexOf("?") > 0) {
    document.location = location + "&lang="+defaultLanguage+"";
  } else {
    document.location = location + "?lang="+defaultLanguage+"";
  }
}

// PAGE LOAD CHANGE LANGUAGE
$(window).on("load", function() {  change_language(currLang) });

// LOOP THROUGH LANGUAGES AND GET KEY TO BUILD SELECT VALUE AND TEXT
for(var i in portalLang){
    var value = portalLang[i];
    for(var k in value){
        languages.push({'key' : k, 'value' : value[k]});
    }
}

// APPEND LANGUAGE SELECTION
selectList.id = "langSelection";
languageSelect.appendChild(selectList);

// APPEND OPTIONS
for (var i = 0; i < languages.length; i++) {
    var option = document.createElement("option");
    option.value = languages[i].key;
    option.text = languages[i].value;
    selectList.appendChild(option);
}

// CHANGE LANGUAGE
function change_language(a) {
    current_language_index = current_language_index + 1;
    current_language = a;
    translate();
}

// TRANSLATE LANGUAGE
function translate() {
  $("[data-translate]").each(function() {
    var noDefLang = "No Default Language",
        key = $(this).data('translate');
    $(this).html(portalDict[key][current_language] || noDefLang);
    if($(this).is("input")) {
      $(this).attr('placeholder', portalDict[key][current_language] || noDefLang);
    }
  })
}

// LANGUAGE CHANGE EVENT HANDLERS
$("#langSelection").on("change", function() { change_language( $(this).val() ); });
$("#langSelection option[value='"+currLang+"']").attr("selected", "selected");

// GET URL PARAMETER
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
