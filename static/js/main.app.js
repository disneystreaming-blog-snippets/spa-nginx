'use strict';

import { WebRouter } from './vendor/web-router.js/dist/web-router.js';

const el = React.createElement.bind(React);
const router = new WebRouter();

function greetingComponent () {
  return el('div', {
    className: 'greeting-box'
  },
  el('h1', {}, 'Welcome'),
  el('a', {
    href: '/page/two'
  }, '2'));
}

router.on('/', () => {
  ReactDOM.render(
    greetingComponent(),
    document.getElementById('container'));
}).on('/page/two', () => {
  ReactDOM.render(
    el('div', {
      className: 'greeting-box'
    }, el('h1', {}, 'Page Two')),
    document.getElementById('container'));
}).notFound(() => {
  ReactDOM.render(
    el('div', {
      className: 'not-found-box'
    }, "Can't find that"),
    document.getElementById('container'));
}).resolve();
