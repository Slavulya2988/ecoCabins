const swiper = new Swiper('.materials__slider', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.slider-materials__pagination',
      clickable: true
    },


  });

  window.addEventListener('scroll', ()=>{
    scrollY > 0 ? document.querySelector('.header').classList.add('scroll') :
    document.querySelector('.header').classList.remove('scroll')
  })
