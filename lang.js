var translations = {
    "en": {
      "title": "Welcome to my website",
      "greeting": "Hello, world!"
    },
    "fr": {
      "title": "Bienvenue sur mon site web",
      "greeting": "Bonjour, le monde!"
    },
    "ar": {
      "title": "مرحبا بكم في موقعي",
      "greeting": "مرحبا بالعالم!"
    }
  };
  


  function TranslateText(lang) {
    // Get the HTML elements that need to be translated
    var title = document.getElementById("title");
    var greeting = document.getElementById("greeting");
  
    // Check if the language is valid and exists in the JSON object
    if (lang && translations[lang]) {
      // Change the innerHTML of the elements using the JSON data
      title.innerHTML = translations[lang].title;
      greeting.innerHTML = translations[lang].greeting;
    } else {
      // If the language is invalid or not found, use the default language (English)
      title.innerHTML = translations.en.title;
      greeting.innerHTML = translations.en.greeting;
    }
  }
  