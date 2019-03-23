import { $ } from '../../../scripts/global/selector';
import { ACTIVE } from '../../../scripts/global/const';
import onEsc from '../../../scripts/global/onEsc';
// import closeModalOnDock from '../../../scripts/global/closeModalOnDock';

const mainNav = $('.header__main-nav');
const btnOpen = $('.header__button-nav');
const overlay = $('.overlay');

const toggle = () => {
  mainNav.classList.toggle(ACTIVE);
  btnOpen.classList.toggle(ACTIVE);
  overlay.classList.toggle(ACTIVE);
};

const close = () => {
  mainNav.classList.remove(ACTIVE);
  btnOpen.classList.remove(ACTIVE);
  overlay.classList.remove(ACTIVE);
}

const onBtnOpenClick = e => {
  e.preventDefault();
  toggle();
};

const onEscKeyup = e => {
  e.preventDefault();
  onEsc(e, close());
};

btnOpen.addEventListener('click', onBtnOpenClick);
// document.addEventListener('mouseup', onDocClick);
document.addEventListener('keyup', onEscKeyup);
