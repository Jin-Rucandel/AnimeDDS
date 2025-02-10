function toggleMenu() {
  var menu = document.getElementById("menu");
  var imageContainers = document.querySelectorAll(".image-container");
  var titleLinks = document.querySelectorAll(".title-op");

  if (menu.style.width === "250px") {
    menu.style.width = "0";
  
    imageContainers.forEach(function(container) {
      container.style.width = "100%";
      container.style.background = "transparent";
    });
    
    titleLinks.forEach(function(link) {
      link.style.visibility = "visible";
    });
  } else {
    menu.style.width = "250px";
    
    imageContainers.forEach(function(container) {
      container.style.width = "calc(100% - 250px)";
      container.style.background = "#fff"; // Set your desired background color here
    });
    
    titleLinks.forEach(function(link) {
      link.style.visibility = "hidden";
    });
  }
}


 function toggleMode() {
  const body = document.body;
  const modeToggle = document.getElementById("modeToggle");
  const searchInput = document.querySelector(".search-input");
  const linkElements = document.querySelectorAll(".title-op"); // Select all link elements

  if (modeToggle.checked) {
    body.style.backgroundColor = "#222";
    body.style.color = "#fff";
    searchInput.style.backgroundColor = "#444";
    searchInput.style.color = "#fff";

    // Change text color for all link elements in dark mode
    linkElements.forEach((link) => {
      link.style.color = "white"; // Change link text color in dark mode
    });
  } else {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
    searchInput.style.backgroundColor = "#eee";
    searchInput.style.color = "#333";

    // Change text color for all link elements in light mode
    linkElements.forEach((link) => {
      link.style.color = "black"; // Change link text color in light mode
    });
  }
}

       
    
  let slideIndex = 0;
  
   function toggleGenre() {
  var genreContent = document.getElementById("genreContent");
  var arrowIcon = document.getElementById("arrowIcon");

  if (genreContent.style.display === "block") {
    genreContent.style.display = "none";
    arrowIcon.innerHTML = "&#9660;"; // Downward arrow when content is hidden
  } else {
    genreContent.style.display = "block";
    arrowIcon.innerHTML = "&#9650;"; // Upward arrow when content is shown
  }
}

function toggleAboutUs() {
  var aboutUsContent = document.getElementById("aboutUsContent");
  var aboutUsArrow = document.getElementById("aboutUsArrow");

  if (aboutUsContent.style.visibility === "visible") {
    aboutUsContent.style.visibility = "hidden";
    aboutUsArrow.innerHTML = "&#9660;"; // Downward arrow when content is hidden
  } else {
    aboutUsContent.style.visibility = "visible";
    aboutUsArrow.innerHTML = "&#9650;"; // Upward arrow when content is shown
  }
}


function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides(); // Start the slideshow when the page loads

  const animeList = [
  { 
    title: "Attack on Titan", 
    image: "aot.jpg", 
    rating: "9.7",
    link: "video.html"
  },
  { 
    title: "A Returner's Magic Should Be Speacial", 
    image: "returners.jpg", 
    rating: "9.9",
    link: "video.html"
  },
  { 
    title: "Bleach", 
    image: "bleach.jpg", 
    rating: "9.5",
    link: "video.html"
  },
  { 
    title: "Berserk of Gluttony", 
    image: "glutony.jpg", 
    rating: "9.9",
    link: "video.html"
  },
  { 
    title: "Boarding School Juliet", 
    image: "Juliet.jpg", 
    rating: "9.7",
    link: "video.html"
  },
  { 
    title: "Cowboy Bebop", 
    image: "cowboy.jpg", 
    rating: "9.4",
    link: "video.html"
  },
  { 
    title: "Code Geass", 
    image: "code.jpg", 
    rating: "9.8",
    link: "video.html"
  },
  { 
    title: "Dark Gathering", 
    image: "darkga.jpg", 
    rating: "8.5",
    link: "video.html"
  },
  { 
    title: "Dragon Ball Z", 
    image: "dragon.jpg", 
    rating: "9.5",
    link: "video.html"
  },
  { 
    title: "Death Note", 
    image: "Death.jpg", 
    rating: "9.8",
    link: "video.html"
  },
  { 
    title: "Frieren: Beyond Journey's End", 
    image: "firen.jpg", 
    rating: "8.5",
    link: "video.html"
  },
  { 
    title: "Fullmetal Alchemist:Brotherhood", 
    image: "fullmetal.jpg", 
    rating: "9.5",
    link: "video.html"
  },
  { 
    title: "Highrise Invasion", 
    image: "highrise.jpg", 
    rating: "9.8",
    link: "video.html"
  },
  { 
    title: "Inuyasha", 
    image: "Inuyasha.jpg", 
    rating: "9.8",
    link: "video.html"
  },
  { 
    title: "JoJo's Bizarre Adventure", 
    image: "jojo.jpg", 
    rating: "9.8",
    link: "video.html"
  },
  { 
    title: "Jujutsu Kaisen", 
    image: "jujutsu.jpg", 
    rating: "9.9",
    link: "video.html"
  },
  { 
    title: "Kuruko No Basket", 
    image: "kuruko.jpg", 
    rating: "9.8",
    link: "video.html"
  },
  { 
    title: "Mob Pyscho", 
    image: "mob.jpg", 
    rating: "9.8",
    link: "video.html"
  },
  { 
    title: "Naruto Shipudden", 
    image: "na.jpg", 
    rating: "9.8",
    link: "video.html"
  },
  { 
    title: "One Piece", 
    image: "..jpg", 
    rating: "9.8",
    link: "video.html"
  },
  { 
    title: "Ragna Crimson", 
    image: "ragna.jpg", 
    rating: "9.9",
    link: "video.html"
  },
  { 
    title: "Ruruni Kenshin(2023)", 
    image: "ruruni.jpg", 
    rating: "9.9",
    link: "video.html"
  },
  { 
    title: "Shaman King", 
    image: "shaman.jpg", 
    rating: "9.8",
    link: "video.html"
  },
  { 
    title: "Sailor Moon", 
    image: "Sailor.jpg", 
    rating: "8.8",
    link: "video.html"
  },
  { 
    title: "The Eminence in Shadow", 
    image: "Eminence.jpg", 
    rating: "10",
    link: "01.html"
  },
  { 
    title: "Tokyo Ghoul", 
    image: "tokyoghoul.jpg", 
    rating: "9.8",
    link: "video.html"
  },
  { 
    title: "Your Lie in April", 
    image: "youlie.jpg", 
    rating: "9.8",
    link: "video.html"
  },
  { 
    title: "Yu-Gi-Oh Arc V", 
    image: "yugioh.jpg", 
    rating: "9.8",
    link: "video.html"
  },
  { 
    title: "100 Girlfriend Who Really Loves Me", 
    image: "100.jpg", 
    rating: "9.8",
    link: "video.html"
  },
  

];

    const searchInput = document.querySelector(".search-input");
    const searchResults = document.querySelector(".search-results");

    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      const filteredAnime = animeList.filter((anime) =>
        anime.title.toLowerCase().includes(searchTerm)
      );

      displaySearchResults(filteredAnime);
    });

    function displaySearchResults(animeArray) {
  const searchResultsContainer = document.querySelector(".search-results");
  searchResultsContainer.innerHTML = ""; // Clear previous search results

  if (animeArray.length === 0 || !searchInput.value.trim()) {
    searchResultsContainer.style.display = "none"; // Hide if no results or input is empty
    return;
  }

  searchResultsContainer.style.display = "block"; // Show the search results

  const sortedAnimeArray = animeArray.slice().sort((a, b) => {
    
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
  });

  const maxResults = 3; 
  const slicedResults = sortedAnimeArray.slice(0, maxResults); 

  const resultHTML = slicedResults
  .map((anime) => {
    const roundedRating = Math.floor(anime.rating); // Round down the rating to get the number of stars
    const stars = '★'.repeat(roundedRating); // Create a string with stars based on the rounded rating

    return `<div class="anime-info">
              <img src="${anime.image}" alt="${anime.title}">
              <div>
                <span><a href="${anime.link}">${anime.title}</a></span> <!-- Changed from anime.url to anime.link -->
                <br>
                <span class="anime-rating">Rating: <span style="color: gold;">${stars}</span> ${anime.rating}</span>
              </div>
            </div>`;
  })
  .join("");

  searchResultsContainer.innerHTML = resultHTML;
}

