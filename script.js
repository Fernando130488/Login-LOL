const inputs = document.querySelectorAll('.input');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classlist.add('span_active');
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));