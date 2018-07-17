import { observable, action } from 'mobx';
import debounce from '../utils/debounce';

class UIStore {
  @observable windowWidth = 0;
  @observable windowHeight = 0;
  @observable windowMin = 0;
  @observable scrollTop = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      this.createListeners();
      this.updateDimensions();
      this.updateScrollTop();
    }
  }

  createListeners() {
    window.addEventListener('resize', this.onWindowResized);
    window.addEventListener('scroll', this.onWindowScrolled);
  }

  @action
  updateDimensions = () => {
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = undefined;
    }
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.windowMin =
      this.windowWidth < this.windowHeight
        ? this.windowWidth
        : this.windowHeight;
  };

  @action
  updateScrollTop = () => {
    this.scrollTop = window.pageYOffset;
  };

  onWindowResized = debounce(() => {
    if (!this.resizeTimer) {
      this.resizeTimer = setTimeout(this.updateDimensions, 20);
    }
  }, 100);
  onWindowScrolled = () => this.updateScrollTop();
  onMouseMoved = e => this.updateMousePosition(e);


  @observable stretchContentHeight = true;

  @action
  setStretchContentHeightTrue = () => {
    this.stretchContentHeight = true;
  }

  @action
  setStretchContentHeightFalse = () => {
    this.stretchContentHeight = false;
  }
}

export default new UIStore();
