export default class LoadMoreBtn {
  constructor({ selector, isHidden }) {
    this.btn = this.getBtn(selector);
    if (isHidden) this.hideBtn();
    else this.show;
  }

  getBtn(selector) {
    return document.querySelector(selector);
  }

  hideBtn() {
    this.btn.classList.add('hidden');
  }

  showBtn() {
    this.btn.classList.remove('hidden');
  }
}
