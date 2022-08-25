const input = document.getElementById('selector-input');
const clearBtn = document.getElementById('clear-btn');

const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
const parentBtn = document.getElementById('parent-btn');
const firstBtn = document.getElementById('first-btn');
const lastBtn = document.getElementById('last-btn');
const btn = document.getElementsByClassName('btn')
let seekedElement = null;


function clearAll () {
    const highlightedElements = document.getElementsByClassName('highlight');
    for (const key in highlightedElements) {
        if (Object.hasOwnProperty.call (highlightedElements, key)) {
            const element = highlightedElements[key];
            element.classList.remove('highlight')
        }
    }
}


function clearInput () {
    input.value = null;
}


function findElement (selector) {
    if (seekedElement[selector] === null) {
        return selector;
    }
    toggleBtnStyle();
    clearAll();
    seekedElement = seekedElement[selector];
    seekedElement.classList.add('highlight')
}

 
function toggleBtnStyle (selector) {
    if (seekedElement[selector]) {
        btn.disabled = false
        btn.classList.add('active')
    } else {
        btn.disabled = true 
        btn.classList.add('disabled')
    }
}

input.addEventListener('input', function(e) {
    seekedElement = document.querySelector(this.value)
    console.log(seekedElement)
    if (seekedElement) {
        toggleBtnStyle();
        clearAll();
        seekedElement.classList.add('highlight')
    }
});



clearBtn.addEventListener('click', clearInput );



previousBtn.addEventListener('click', function () {
    findElement('previousElementSibling')
});
previousBtn.addEventListener('click', function () {
    toggleBtnStyle('previousElementSibling')
});



nextBtn.addEventListener('click', function () {
    findElement('nextElementSibling')
});
nextBtn.addEventListener('click', function () {
    toggleBtnStyle('nextElementSibling')
});



parentBtn.addEventListener('click', function () {
    findElement('parent')
});
parentBtn.addEventListener('click', function () {
    toggleBtnStyle('parent')
});



firstBtn.addEventListener('click', function () {
    findElement('firstElementChild')
});
firstBtn.addEventListener('click', function () {
    toggleBtnStyle('firstElementChild')
});



lastBtn.addEventListener('click', function () {
    findElement('lastElementChild')
});
lastBtn.addEventListener('click', function () {
    toggleBtnStyle('lastElementChild')
});


