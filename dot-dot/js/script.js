document.addEventListener("DOMContentLoaded", function () {

  // Custom JS

  const select = document.querySelectorAll('.section-select'),
        option = document.querySelectorAll('.section-select__option'),
        wrapper = document.querySelectorAll('.section-select__wrapper'),
        selectOption = document.querySelector('.select-option');

  function openOptions() {

  }

  console.log(select)


  wrapper.forEach((wrap, i) => {
    wrap.addEventListener('click', function () {
      select[i].classList.toggle('open');
    })
  })

  option.forEach((item, i) => {
    item.addEventListener('click', function() {
      let text = this.innerText;
      selectOption.innerText = text;
    })
  })

});
