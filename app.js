
let offersIndex = 0;

function moveOffers(n) {
  const offer = document.querySelectorAll('.offer-img');
  const offersSlider = document.querySelector('.offers-slider');
  const offersWidth = offer[0].offsetWidth;
  
  offersIndex += n;
  if (offersIndex < 0) {
    offersIndex = offer.length - 1;
  } else if (offersIndex >= offer.length) {
    offersIndex = 0;
  }
  
  offersSlider.style.transform = `translateX(${-offersWidth * offersIndex}px)`;
}



let testimonialIndex = 0;

function moveTestimonial(n) {
  const testimonials = document.querySelectorAll('.testimonial');
  const slider = document.querySelector('.testimonial-slider');
  const testimonialWidth = testimonials[0].offsetWidth;
  
  testimonialIndex += n;
  if (testimonialIndex < 0) {
    testimonialIndex = testimonials.length - 1;
  } else if ((testimonialIndex) >= testimonials.length) {
    testimonialIndex = 0;
  }

  slider.style.transform = `translateX(${-testimonialWidth * testimonialIndex}px)`;
}

// Category
function filterItems(category) {
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    if (item.id === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  const categories = document.querySelectorAll('.category');
  categories.forEach(cat => {
    if (cat.textContent.toLowerCase() === category) {
      cat.classList.add('active');
    } else {
      cat.classList.remove('active');
    }
  });
}