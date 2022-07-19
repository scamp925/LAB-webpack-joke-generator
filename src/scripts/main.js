import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
// import jokeData from '../api/jokeData';

const init = () => {
  document.querySelector('#app').innerHTML = `<div>
  <h1>Setup</h1>
  <h4>Punchline</h4>
  <button type="button" id="jokeBtn" class="btn btn-outline-dark">Get A Joke</button>
  </div>
  `;
};

init();
