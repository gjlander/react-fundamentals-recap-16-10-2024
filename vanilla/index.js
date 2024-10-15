import ducksInThePond from './ducks.js';

const motivateBtn = document.querySelector('#motivate');
const pond = document.querySelector('#pond');

const renderDucks = (ducksArray) => {
    pond.innerHTML = '';

    ducksArray.forEach(({ name, imgUrl, quote }) => {
        pond.innerHTML += `<div class="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
            <img
                 class="w-full"
                 src=${imgUrl}
                 alt=${name} />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${name}</h2>
            <p>${quote}</p>
        </div>
        </div>`;
    });
};

// renderDucks(ducksInThePond);

// motivateBtn.addEventListener('click', () => alert('You got this!'));

motivateBtn.onclick = () => alert('You got this!');
