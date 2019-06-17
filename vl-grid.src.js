import {NativeVlElement} from "/node_modules/vl-ui-core/vl-core.js";

/**
 * VlGrid
 * @class
 * @classdesc
 * De grid(.vl-grid) dient om de lay-out van jouw pagina in order te brengen.
 * Je kan  vl-grid vergelijken met de Row element in Bootstrap.
 * @extends VlElement
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
 * <vl-column size="3" => .vl-col--3-12
 * <vl-column size="3" small-size="4"></vl-column> => .vl-col--3-4
 * <vl-column small-size="12"></vl-column> => .vl-col--12-12--s
 * <vl-column small-size="8" small-max-size="10"></vl-column> => .vl-col--8-12--s
 * <vl-column size="2" max-size="4" push="1"></vl-column> => .vl-col--2-4 .vl-pus--1-4
 * @extends VlElement
 * @property {number} size
 * @property {number} max-size - default waarde is 12
 * @property {number} small-size
 * @property {number} small-max-size - default waarde is 12
 * @property {number} push
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

customElements.define('vl-grid', VlGrid, {extends: 'div'});
customElements.define('vl-column', VlColumn, {extends: 'div'});