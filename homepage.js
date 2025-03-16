document.addEventListener("DOMContentLoaded", () => {
    // Carousel Functionality
    const slides = document.querySelectorAll(".slide");
    const slideContainer = document.querySelector(".slides");
    const dotsContainer = document.querySelector(".dots");
    const totalSlides = slides.length;
    let slideIndex = 0;
    let autoPlayInterval;

    // Function to show the current slide
    function showSlide(index) {
        slideContainer.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }

    // Function to move to the next slide
    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    // Function to move to the previous slide
    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    }

    // Function to start auto-play
    function startAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, 2000);
    }

    // Function to stop auto-play
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Function to update the active dot
    function updateDots() {
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === slideIndex);
        });
    }

    // Create dots for navigation
    slides.forEach((slide, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            slideIndex = index;
            showSlide(slideIndex);
            stopAutoPlay();
            startAutoPlay();
        });
        dotsContainer.appendChild(dot);
    });

    // Initialize the carousel
    showSlide(slideIndex);
    startAutoPlay();

    // Event listeners for navigation buttons
    document.querySelector(".prev").addEventListener("click", () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    document.querySelector(".next").addEventListener("click", () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    // Pause auto-play on hover
    document.querySelector(".carousel").addEventListener("mouseenter", stopAutoPlay);
    document.querySelector(".carousel").addEventListener("mouseleave", startAutoPlay);

    // Product Section
    const products = [
        { name: "Clothes", price: "$499", img: "dox.jpg" },
        { name: "Shoes", price: "$199", img: "dox.jpg" },
        { name: "Watch", price: "$299", img: "dox.jpg" },
        { name: "Bag", price: "$99", img: "dox.jpg" }
    ];

    const container = document.querySelector(".products-container");

    // Render products
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;

        container.appendChild(productCard);
    });

    const categoryCard = document.querySelectorAll(".category-card");

    categoryCards.forEach(card => {
        card.addEventListener("click", () => {
            const category = card.querySelector("h3").textContent.toLowerCase();
            // window.location.href = `category.html?type=${category}`;
        })
    })

    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const msg = formData.get("message");

    if (!name || ! email || !msg) {
        alert("Please fill out the form");
        return;
    }

    console.log("Form Data:", { name, email, msg});
    alert("Thank you for contacting us!, We'll get back to you soon.");

    contactForm.reset();
});