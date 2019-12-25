$(function() {

  //Запуск карусели для планшета и мобильной версии
  if (window.innerWidth < 768) {
    console.log('карусель');
    var caruseladvantageslist = document.querySelector('.advantages__list')
    if (caruseladvantageslist) {
      // caruseladvantageslist.classList.add('carousel');
      console.log('карусель1');
    }
  }
});
