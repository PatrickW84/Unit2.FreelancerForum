document.addEventListener("DOMContentLoaded", () => {
  // TO DO - set up an array for Name, price and job. DONE
  const freeLancers = [
    { name: "Lancealot", price: 45, job: "Lancer" },
    { name: "Arturo", price: 75, job: "Prince" },
    { name: "Rumple", price: 1, job: "Warlock" },
    { name: "Merlin", price: 35, job: "Retired Wizard" },
    { name: "Hagrid", price: 30, job: "Groundskeeper" },
    { name: "Wimbly", price: 15, job: "Toilet Cleaner" },
    { name: "Pippin", price: 10, job: "Chimney Sweep" },
  ];

  // TO DO - WRITE and CALL a function to render the initial freelancer data - DONE

  // Function to render freelancer data
  const renderFreelancers = () => {
    const board = document.querySelector("#freelancerBoard"); // or const board = document.getElementById("freelancerBoard");
    board.innerHTML = ""; // clears the board instead of using a while loop, when adding new professionals

    // Calculate average price before rendering
    const averagePrice = calculateAveragePrice();

    // Display average price in the board heading
    board.innerHTML = `<h2>Freelancers (Average Price: $${averagePrice})</h2>`;

    freeLancers.forEach((freelancer) => {
      const div = document.createElement("div");
      div.textContent = `Name: ${freelancer.name}, Price: $${freelancer.price}, Job: ${freelancer.job}`;
      board.appendChild(div);
      const averagePrice = calculateAveragePrice();
      console.log("Average Price:", averagePrice);
    });
  };

  // Function to calculate average price
  const calculateAveragePrice = () => {
    const total = freeLancers.reduce(
      (acc, freelancer) => acc + freelancer.price,
      0
    );
    return total / freeLancers.length;
  };

  // Function to generate a random freelancer
  const generateRandomFreelancer = () => {
    const names = [
      "Juliet",
      "Morgana",
      "Finnaeus",
      "Dimetries",
      "Hansel",
      "Yerba",
      "Donathan",
      "Jimmothy",
      "Beutrid",
      "Ingrid",
      "Inga",
      "Valentina",
      "Sondre",
      "Ava",
      "Cad",
      "Bartolomeo",
      "Girdy",
    ];
    const jobs = [
      "Carpenter",
      "Jester",
      "Caravaner",
      "Honorguard",
      "Blacksmith",
      "Miller",
      "Slaver",
      "Juggler",
      "Knight",
      "Futurist",
      "Cult Leader",
      "Artist",
      "Cook",
      "Plowsman",
      "Musician",
    ];

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomJob = jobs[Math.floor(Math.random() * jobs.length)];

    return {
      name: randomName,
      price: Math.floor(Math.random() * (100 - 5 + 1)) + 5, //get a random price between 5 and 100
      job: randomJob,
    };
  };
  // Function to render formContainer
  const renderFormContainer = () => {
    const formContainer = document.getElementById("formContainer");

    // Adds code as if it were in HTML
    formContainer.innerHTML = `
        <h2>Add a New Freelancer</h2>
        <form id="freelancerForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br>
            
            <label for="price">Price:</label>
            <input type="number" id="price" name="price" required><br>
            
            <label for="job">Job:</label>
            <input type="text" id="job" name="job" required><br>
            
            <button type="submit">Add Freelancer</button>
        </form>
      `;

    // Form submission handler
    document
      .getElementById("freelancerForm")
      .addEventListener("submit", function (e) {
        e.preventDefault(); //prevents event listener from performing default action of reloading the page when you add input

        const name = document.getElementById("name").value;
        const price = parseInt(document.getElementById("price").value, 10); //10 assigns the 10 radix, instead of 2 for boolean or 16 for hexadecimal
        const job = document.getElementById("job").value;

        // Adding new freelancer to array
        freeLancers.push({ name, price, job });

        // Re-render Freelancers
        renderFreelancers();

        // Clear form
        this.reset();
      });
  };

  // Initial render
  renderFreelancers();
  renderFormContainer();

  let freelancerCount = 0;
  // generate random freelancer every 5 seconds, max at 15 additions
  setInterval(() => {
    if (freelancerCount < 15) {
      freeLancers.push(generateRandomFreelancer());
      renderFreelancers();
      freelancerCount++;
    }
  }, 5000); // 5 seconds
});
