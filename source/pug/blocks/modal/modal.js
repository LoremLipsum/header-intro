import { $, $$ } from '../../../scripts/global/selector';
import { ACTIVE, LARGE } from '../../../scripts/global/const';
import onEsc from '../../../scripts/global/onEsc';

const modal = $$('.modal');
const btnsClose = $$('.modal__close');
const overlay = $('.overlay--modal');
const priceOrder = $('.modal--price-order');

const onClickBtnClose = (e) => {
  e.preventDefault();
  for (let i = 0; i < btnsClose.length; i += 1) {
    btnsClose[i].parentNode.parentNode.classList.remove(ACTIVE);
  }
}

const onOverlayClick = () => {
  overlay.parentNode.classList.remove(ACTIVE);
}

const onPriceOrder = () => {
  if (window.innerWidth >= LARGE) {
    priceOrder.classList.remove(ACTIVE);
	}
}

const onEscKeyup = e => {
  e.preventDefault();
  onEsc(e, close());
};

for (let i = 0; i < btnsClose.length; i += 1) {
  btnsClose[i].addEventListener('click', onClickBtnClose);
}

overlay.addEventListener('click', onOverlayClick);
window.addEventListener('resize', onPriceOrder);
