****************************
*** LANGUAGE TRANSLATION ***
****************************

Handy script for pages and sites that are on a restrictive network or walled garden and la external translation API access.

***********************
*** GETTING STARTED ***
***********************

1. Include language.js in the footer of your page(s). <script src="language.js"></script>

2. Add <div id="langSelect"></div> on your page and style your way.

3. Add data-translate="somevalue" to any and all html elements you wish to have translated like <div data-translate="welcome"></div>.

somevalue --> name value --> "welcome": {
  "en": "Hello",
  "es": "Hola",
}

4. Add additional entries to the language.js portalDict object for your appropriate languages. Simply add as an example:

"welcome": {
  "en": "Hello",
  "es": "Hola",
},
new value --> "goodbye": {
  "en": "Good bye",
  "es": "Adios",
}

Then add data-translate="goodbye" to a Dom element like so: <h1 data-translate="goodbye"></h1>

5. Add additional language selections to the portalLang object in language.js if necessary.

Example:

Inside langauge.js you could add the following below which will update the dropdown select options to include "Swedish".

"Swedish": {
  "se": "Svenska",
},

6. You can modify the default language by editing defaultLanguage = "EN" in language.js as long as your supporting language is evident in your portalLang and portalDict objects.

7. You can reference the index.html file that has two working languages and review the page setup if you get stuck.

**************
*** AUTHOR ***
**************

Shaun Nelson
www.shaunnelson.com

***************
*** LICENSE ***
***************

See LICENSE.txt
