import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import jokeData from '../api/jokeData';

const init = () => {
  let btnText = 'Get A Joke';

  document.querySelector('#app').innerHTML = `<div>
  <h1 id='setup'></h1>
  <h4 id='delivery'></h4>
  <button type="button" id="jokeBtn" class="btn btn-outline-dark">${btnText}</button>
  </div>
  `;

  document.querySelector('#jokeBtn').addEventListener('click', () => {
    jokeData().then((response) => {
      if (btnText === 'Get A Joke' || btnText === 'Get Another Joke') {
        document.querySelector('#setup').innerHTML = response.setup;
        document.querySelector('#delivery').innerHTML = '';
        btnText = 'Get The Punchline';
      } else if (btnText === 'Get The Punchline') {
        document.querySelector('#delivery').innerHTML = response.delivery;
        btnText = 'Get Another Joke';
      }
    });
  });
};

init();
