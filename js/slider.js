    const slider = document.getElementById('slider');
    const sliderItems = document.querySelectorAll('.slider-item');
    const paginationContainer = document.getElementById('paginationContainer');

    let currentSlide = 0;
    let itemsPerView = getItemsPerView();
    let dots = [];

    let paginationGroup=0;
    const maxVisibleDots=3;

    function getItemsPerView() {
      if (window.innerWidth < 640) return 1;   // Mobile
      if (window.innerWidth < 1024) return 2;  // Tablet
      return 3;                                 // Desktop
    }

    
   function generatePagination() {
  paginationContainer.innerHTML = '';

  const totalPages = Math.ceil(sliderItems.length / itemsPerView);
  const start = paginationGroup * maxVisibleDots;
  const end = Math.min(start + maxVisibleDots, totalPages);

  
  if (paginationGroup > 0) {
    const prevArrow = document.createElement('button');
    prevArrow.textContent = '←';
    prevArrow.className = 'px-3 text-[#1C238D] font-bold';
    prevArrow.addEventListener('click', () => {
      paginationGroup--;
      generatePagination();
    });
    paginationContainer.appendChild(prevArrow);
  }

  
  for (let i = start; i < end; i++) {
    const dot = document.createElement('button');

    dot.className = `
      dot w-9 h-9 rounded border-2 border-[#1C238D]
      font-bold transition
      ${i === currentSlide
        ? 'bg-[#1C238D] text-white'
        : 'text-[#1C238D] hover:bg-[#1C238D] hover:text-white'}
    `;

    dot.textContent = i + 1;

    dot.addEventListener('click', () => {
      currentSlide = i;
      updateSlider();
      generatePagination();
    });

    paginationContainer.appendChild(dot);
  }

  if (end < totalPages) {
    const nextArrow = document.createElement('button');
    nextArrow.textContent = '→';
    nextArrow.className = 'px-3 text-[#1C238D] font-bold';
    nextArrow.addEventListener('click', () => {
      paginationGroup++;
      generatePagination();
    });
    paginationContainer.appendChild(nextArrow);
    }

        dots = document.querySelectorAll('.dot');
    }


    
    function updateSlider() {
      const offset = -(currentSlide * (100 / itemsPerView));
      slider.style.transform = `translateX(${offset}%)`;

      dots.forEach((dot, index) => {
        if (index === currentSlide) {
          dot.classList.add('active', 'bg-[#1C238D]', 'text-white');
          dot.classList.remove('bg-white', 'text-[#1C238D]');
        } else {
          dot.classList.remove('active', 'bg-[#1C238D]', 'text-white');
          dot.classList.add('bg-white', 'text-[#1C238D]');
        }
      });

      
      const maxSlides = Math.ceil(sliderItems.length / itemsPerView) - 1;

    }

    
    function nextSlide() {
      const maxSlides = Math.ceil(sliderItems.length / itemsPerView) - 1;
      if (currentSlide < maxSlides) {
        currentSlide++;
        updateSlider();
      }
    }

    
    function prevSlide() {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
      }
    }

    


    
    window.addEventListener('resize', () => {
      const newItemsPerView = getItemsPerView();
      if (newItemsPerView !== itemsPerView) {
        itemsPerView = newItemsPerView;
        currentSlide = 0;
        generatePagination();
        updateSlider();
      }
    });

    // Initialize
    generatePagination();
    updateSlider();