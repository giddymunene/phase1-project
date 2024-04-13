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
  
        card.appendChild(nameElement);
        card.appendChild(animal_kingdomElement);
        card.appendChild(button);
  
        return card;
    }
  });