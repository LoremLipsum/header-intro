import { $, $$ } from '../../../scripts/global/selector';

const line = $('.main-nav__item--line');
const links = $$('.main-nav__link');

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    const left = links[i].offsetLeft;
    line.style.left = left + 'px';
  });
}
