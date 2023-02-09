document.body.style.padding = '20px';
document.body.style.border = '5px solid rgb(46, 173, 214, 1)';
document.body.style.backgroundColor = 'rgb(138,209,232,1)';

const title = document.getElementById('title');
title.style.padding = '20px';
title.style.textAlign = 'center';
title.style.backgroundColor = 'rgb(82, 181, 214, 1)';
title.style.margin = '10px';
title.style.border = 'solid rgb(46, 173, 214, 1)';

document.getElementById('basic-info').style.padding = '20px';

const bgColor = 'rgb(165, 205, 218, 1)';
document.getElementById('fullName').style.backgroundColor = bgColor;
document.getElementById('email').style.backgroundColor = bgColor;

const typeDestiny = document.getElementById('type-destiny');
typeDestiny.style.padding = '2px';
typeDestiny.style.textAlign = 'center';
typeDestiny.style.margin = '20px';
typeDestiny.style.border = '1px solid rgb(46, 173, 214, 1)';

const question = document.getElementById('question');
question.style.padding = '20px';
question.style.width = '50%';
question.style.margin = '5px';
question.style.marginRight = 'auto';
question.style.marginLeft = 'auto';
question.style.resize = 'none';
question.style.backgroundColor = bgColor;

document.getElementById('checkboxs').style.padding = '20px';

document.getElementById('date').style.margin = '20px';

const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;
const clearBtn = document.getElementById('clear-btn');

submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
});

clearBtn.addEventListener('click', function () {
  const inputs = document.querySelectorAll('input');
  if (inputs) {
    inputs.forEach((input) => {
      input.value = '';
    });
  }
});

const checkbox = document.getElementById('agreement');
checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
});
