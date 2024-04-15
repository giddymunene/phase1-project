document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById("card-container");
  
    fetch("http://localhost:3000/Wildlife") 
        .then(response => response.json())
        .then(data => {
            data.forEach(animal => {
                const card = createCard(animal);
                cardContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
  
    function createCard(animal) {
        const card = document.createElement("div");
        card.classList.add("card");
  
        const nameElement = document.createElement("h2");
        nameElement.textContent = animal.name;
  
        const animal_kingdomElement = document.createElement("p");
        animal_kingdomElement.textContent = animal.animal_kingdom;
  
        const button = document.createElement("button");
        button.textContent = "Learn More";
        button.addEventListener("click", function() {
            fetchAnimalDetails(animal, card);
        });

          const likeButton = document.createElement("button");
          likeButton.textContent = "Like";
          likeButton.dataset.likes = 0; 
          likeButton.addEventListener("click", function() {
              incrementLikes(likeButton);
          });
  
        
          const dislikeButton = document.createElement("button");
          dislikeButton.textContent = "Dislike";
          dislikeButton.addEventListener("click", function() {
              decrementLikes(likeButton);
          });
        card.appendChild(nameElement);
        card.appendChild(animal_kingdomElement);
        card.appendChild(button);
        card.appendChild(likeButton);
        card.appendChild(dislikeButton);


  
        return card;
    }
  });
  function fetchAnimalDetails(animal, card) {
    fetch(`http://localhost:3000/Wildlife/${animal.id}`) 
        .then(response => response.json())
        .then(details => {
            displayAnimalDetails(animal, details, card);
        })
        .catch(error => {
            console.error("Error fetching animal details:", error);
        });
}

function displayAnimalDetails(animal, details, card) {
    
    const imageElement = document.createElement("img");
    imageElement.src = details.poster; 
    imageElement.alt = animal.name;
//styling the image
    imageElement.style.width = "100%";
    imageElement.style.height = "auto";
//command to remove any existing image
    const existingImage = card.querySelector("img");
        if (existingImage) {
            existingImage.remove();
        }
 
 

    card.appendChild(imageElement);
    


   
}





  function incrementLikes(button) {
    const likes = parseInt(button.dataset.likes) + 1;
    button.dataset.likes = likes;
    button.textContent = `Like (${likes})`;
  }

  function decrementLikes(button) {
    let likes = parseInt(button.dataset.likes);
    if (likes > 0) {
        likes--;
        button.dataset.likes = likes;
        button.textContent = `Like (${likes})`;
    }
}