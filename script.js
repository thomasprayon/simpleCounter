const getNumber = document.getElementById('number');
const increaseBtn = document.querySelector('.btn--increase');
const decreaseBtn = document.querySelector('.btn--decrease');
const resetBtn = document.querySelector('.btn--reset');
const centerBox = document.querySelector('.center');
let count = 0;

const getNumberText = count => {
    return (getNumber.textContent = count);
};

const containsClass = btn => {
    return btn.classList.contains('active');
};

const removeActive = btn => {
    return btn.classList.remove('active');
};

const addActive = btn => {
    return btn.classList.add('active');
};

const letItRoll = () => {
    if (containsClass(increaseBtn)) {
        count++;
        getNumberText(count);
    } else if (containsClass(decreaseBtn)) {
        count--;
        getNumberText(count);
    }
    count > 0
        ? (centerBox.style.backgroundColor = '#337A00')
        : count < 0
        ? (centerBox.style.backgroundColor = '#D00000')
        : count === 0
        ? (centerBox.style.backgroundColor = '#068d9d')
        : (centerBox.style.backgroundColor = 'black');
};

increaseBtn.addEventListener('click', () => {
    addActive(increaseBtn);
    removeActive(decreaseBtn);
    letItRoll();
});
decreaseBtn.addEventListener('click', () => {
    removeActive(increaseBtn);
    addActive(decreaseBtn);
    letItRoll();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    centerBox.style.backgroundColor = '#068d9d';
    removeActive(increaseBtn);
    removeActive(decreaseBtn);
    getNumberText(count);
});
