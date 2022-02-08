let hamburger = document.querySelector('.header_hamburger'),
    menu = document.querySelector('.li');


hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('header_hamburger_active');
    menu.classList.toggle('li_active')
})

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show')
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.promo_title');
  let element = document.querySelectorAll('.btn');
  let elemen = document.querySelectorAll('.promo_line');
  let eleme = document.querySelectorAll('.promo_wrapper');
  let wrapper = document.querySelectorAll('.beutiful_wrapper')
  let wrapper1 = document.querySelectorAll('.beutiful_wrapper_1')
  let event = document.querySelectorAll('.beutiful_event')
  let here = document.querySelectorAll('.beutiful_here')
  let btn = document.querySelectorAll('.beutiful_wrapper_btn')
  for (let elm of elements) {
    observer.observe(elm);
  }
  for (let elm of element) {
    observer.observe(elm);
  }
  for (let elm of elemen) {
    observer.observe(elm);
  }
  for (let elm of eleme) {
    observer.observe(elm);
  }
  for (let elm of wrapper) {
    observer.observe(elm);
  }
  for (let elm of wrapper1) {
    observer.observe(elm);
  }
  for (let elm of event) {
    observer.observe(elm);
  }
  for (let elm of here) {
    observer.observe(elm);
  }
  for (let elm of btn) {
    observer.observe(elm);
  }

