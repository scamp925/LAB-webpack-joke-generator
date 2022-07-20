import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import jokeData from '../api/jokeData';

const init = () => {
  const btnText = 'Get A Joke';

  document.querySelector('#app').innerHTML = `<div>
  <h1 id='setup'></h1>
  <h4 id='delivery'></h4>
  <button type="button" id="jokeBtn" class="btn btn-outline-dark">${btnText}</button>
  </div>
  `;

  document.querySelector('#jokeBtn').addEventListener('click', () => {
    jokeData().then((response) => {
      if (document.querySelector('#jokeBtn').innerText === 'Get A Joke' || document.querySelector('#jokeBtn').innerText === 'Get Another Joke') {
        document.querySelector('#setup').innerHTML = response.setup;
        document.querySelector('#delivery').innerHTML = '';
        document.querySelector('#jokeBtn').textContent = 'Get The Punchline';
      } else if (document.querySelector('#jokeBtn').innerText === 'Get The Punchline') {
        document.querySelector('#delivery').innerHTML = response.delivery;
        document.querySelector('#jokeBtn').textContent = 'Get Another Joke';
      }
    });
  });
};

init();
