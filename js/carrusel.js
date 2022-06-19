window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        dots: '#dots',
        draggable: true,
        dots: '.dots' ,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    })
  })