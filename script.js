const ratings = {                                                       // Initial Ratings
  peugeot: 4.7,
  vw: 4.1,
  ford: 3.3,
  honda: 4.4,
  scoda: 2.9
}
    
const starsTotal = 5;                                                   // Total Stars
    
document.addEventListener('DOMContentLoaded', getRatings);              // Run getRatings when DOM loads
 
const productSelect = document.getElementById('product-select');        // Form Elements
const ratingControl = document.getElementById('rating-control');
   
let product;                                                            // Init product


productSelect.addEventListener('change', (e) => {                       // Product select change
  product = e.target.value;                                             // Enable rating control    
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});


ratingControl.addEventListener('blur', (e) => {                         // Rating control change
  const rating = e.target.value;
    
  if (rating > 5) {                                                     // Make sure 5 or under
    alert('Please rate 1 - 5');
    return;
  }

    ratings[product] = rating;                                         // Change rating
    getRatings();
});

    
function getRatings() {                                                // Get ratings
  for (let rating in ratings) {
    const starPercentage = (ratings[rating] / starsTotal) * 100;       // Get percentage
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;                   // Round to nearest 10
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;      // Set width of stars-inner to percentage
    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];            // Add number rating
  }
}