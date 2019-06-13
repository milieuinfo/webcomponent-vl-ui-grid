import {VlElement} from "/node_modules/vl-ui-core/vl-core.js";

export class VlGrid extends VlElement(HTMLElement) {
  constructor() {
    super(`
          <style>
            @import '/node_modules/vl-ui-core/core-style.css';
          </style>

          <slot></slot>
    `)
  }

  connectedCallback() {
    this.classList.add('vl-grid');
  }
}

export class VlColumn extends VlElement(HTMLElement) {
  constructor() {
    super(`
          <style>
            @import '/node_modules/vl-ui-core/core-style.css';
          </style>
        
          <div>
              <slot></slot>
          </div>
    `);
  }

  get _defaultMaxSize() {
    return 12;
  }

  get _columnElement() {
    return this;
  }

  get _sizeAttribute() {
    return this.getAttribute('size');
  }

  get _maxSizeAttribute() {
    const value = this.getAttribute('max-size');
    if (value) {
      return value;
    } else {
      return this._defaultMaxSize;
    }
  }

  get _smallSizeAttribute() {
    return this.getAttribute('small-size');
  }

  get _smallMaxSizeAttribute() {
    const value = this.getAttribute('small-max-size');
    if (value) {
      return value;
    } else {
      return this._defaultMaxSize;
    }
  }

  get _pushAttribute() {
    return this.getAttribute('push');
  }

  connectedCallback() {
    this._setClasses();
  }

  _setClasses() {
    this._setNormalSizeClasses();
    this._setSmallSizeClasses();
    this._setPushSizeClasses();
  }

  _setNormalSizeClasses() {
    const size = this._sizeAttribute;
    const maxSize = this._maxSizeAttribute;

    if (size && maxSize) {
      const prefix = 'vl-col--';
      this._columnElement.classList.add(prefix.concat(size, '-', maxSize));
    }
  }

  _setSmallSizeClasses() {
    const smallSize = this._smallSizeAttribute;
    const smallMaxSize = this._smallMaxSizeAttribute;

    if (smallSize && smallMaxSize) {
      const prefix = 'vl-col--';
      this._columnElement.classList.add(
          prefix.concat(smallSize, '-', smallMaxSize, '--', 's'));
    }
  }

  _setPushSizeClasses() {
    const pushSize = this._pushAttribute;
    const maxSize = this._maxSizeAttribute;

    if (pushSize && maxSize) {
      const prefix = 'vl-push--';
      this._columnElement.classList.add(prefix.concat(pushSize, '-', maxSize));
    }
  }
}

customElements.define('vl-grid', VlGrid);
customElements.define('vl-column', VlColumn);

