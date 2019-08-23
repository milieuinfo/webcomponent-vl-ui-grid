import {NativeVlElement, define} from "/node_modules/vl-ui-core/vl-core.js";

export class VlRegion extends NativeVlElement(HTMLElement) {

  static get _observedClassAttributes() {
    return ['no-space', 'no-space-bottom', 'no-space-top', 'alt', 'small', 'medium', 'bordered'];
  }

  connectedCallback() {
    this.classList.add('vl-region');
  }

  get _classPrefix() {
    return 'vl-region--';
  }

  get _stylePath() {
    return '../style.css';
  }
}

export class VlLayout extends NativeVlElement(HTMLDivElement) {
  static get _observedClassAttributes() {
    return [];
  }

  connectedCallback() {
    this.classList.add('vl-layout');
  }

  get _classPrefix() {
    return 'vl-layout--';
  }

  get _stylePath() {
    return '../style.css';
  }
}

/**
 * VlGrid
 * @class
 * @classdesc
 * De grid(.vl-grid) dient om de lay-out van jouw pagina in orde te brengen.
 * Je kan vl-grid vergelijken met de Row element in Bootstrap. <a href="demo/vl-grid.html">Demo</a>.
 * @extends VlElement
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-grid/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-grid/issues|Issues}
 */
export class VlGrid extends NativeVlElement(HTMLDivElement) {
  static get _observedClassAttributes() {
    return ['is-stacked']
  }

  connectedCallback() {
    this.classList.add('vl-grid');
  }

  get _classPrefix() {
    return 'vl-grid--';
  }

  get _stylePath() {
      return '../style.css';
  }
}

/**
 * VlColumn
 * @class
 * @classdesc
 * De parent van een VlColumn is altijd een VlGrid. <a href="demo/vl-grid.html">Demo</a>.
 * @extends VlElement
 * @property {number} size - De teller van de verdeling van grote scherm.
 * @property {number} max-size - De noemer van de verdeling van grote scherm.
 * @property {number} small-size - De teller van de verdeling van kleine scherm.
 * @property {number} small-max-size - De nomer van de verdeling van kleine scherm.
 * @property {number} push - aantal partities te verschuiven.
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-grid/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-grid/issues|Issues}
 */
export class VlColumn extends NativeVlElement(HTMLDivElement) {
  static get _observedAttributes() {
    return ['size', 'max-size', 'small-size', 'small-max-size', 'push'];
  }

  get _defaultMinSize() {
    return 12;
  }

  get _defaultMaxSize() {
    return 12;
  }

  get _sizeAttribute() {
    return this.getAttribute('size') || this._defaultMinSize;
  }

  get _maxSizeAttribute() {
    return this.getAttribute('max-size') || this._defaultMaxSize;
  }

  get _smallSizeAttribute() {
    return this.getAttribute('small-size') || this._defaultMinSize;
  }

  get _smallMaxSizeAttribute() {
    return this.getAttribute('small-max-size') || this._defaultMaxSize;;
  }

  get _classPrefix() {
    return 'vl-col--';
  }

  get _pushPrefix() {
    return 'vl-push--';
  }

  get _stylePath() {
      return '../style.css';
  }

  _sizeChangedCallback(oldValue, newValue) {
    this._changeClass(this, (oldValue + '-' + this._maxSizeAttribute), (newValue + '-' + this._maxSizeAttribute), this._classPrefix);
  }

  _max_sizeChangedCallback(oldValue, newValue) {
    this._changeClass(this, (this._sizeAttribute + '-' + oldValue), (this._sizeAttribute + '-' + newValue), this._classPrefix);
  }

  _small_sizeChangedCallback(oldValue, newValue) {
    this._changeClass(this, (oldValue + '-' + this._smallMaxSizeAttribute + '--s'), (newValue + '-' + this._smallMaxSizeAttribute + '--s'), this._classPrefix);
  }

  _small_max_sizeChangedCallback(oldValue, newValue) {
    this._changeClass(this, (this._smallSizeAttribute + '-' + oldValue + '--s'), (this._smallSizeAttribute + '-' + newValue + '--s'), this._classPrefix);
  }

  _pushChangedCallback(oldValue, newValue) {
    this._changeClass(this, (oldValue + '-' + this._maxSizeAttribute), (newValue + '-' + this._maxSizeAttribute), this._pushPrefix);
  }
}

define('vl-region', VlRegion, {extends: 'section'});
define('vl-layout', VlLayout, {extends: 'div'});
define('vl-grid', VlGrid, {extends: 'div'});
define('vl-column', VlColumn, {extends: 'div'});
