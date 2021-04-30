document.addEventListener("DOMContentLoaded", function () {

  // Custom JS

  const select = document.querySelectorAll('.section-select'),
        options = document.querySelectorAll('.section-select__option'),
        wrapper = document.querySelectorAll('.section-select__wrapper'),
        checkbox = document.querySelector('.section-input__temperature'),
        temperatureBlock = document.querySelector('.section-block__optional');


  wrapper.forEach((wrap, i) => {
    wrap.addEventListener('click', function () {
      select[i].classList.toggle('open');
    })
  })

  options.forEach((option, i) => {
    option.addEventListener('click', function() {
      let text = this.innerText,
          select = this.closest('.section-select'),
          currentText = select.querySelector('.select-option');

      currentText.innerText = text;
      currentText.dataset.value = this.dataset.value;
      select.classList.remove('.open');

      if(currentText.dataset.value = "danger") {
        currentText.classList.add("text-grad");
      } else {
        currentText.classList.remove("text-grad")
      }
    })
  })

  checkbox.addEventListener('click', function() {
    if(checkbox.checked) {
      temperatureBlock.style.display = 'flex';
    } else {
      temperatureBlock.style.display = 'none';
    }
  })

});
