import {nativeVlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlRegion
 * @class
 * @classdesc Het region element (vl-region) wordt gebruikt om secties te definiëren op je website. Het zorgt ervoor dat er consistente spacing is tussen verschillende secties beschikbaar op een pagina. Als een voorbeeld: een pagina die de modules "intro", "portfolio", "nieuws" en "contact" bevat, zal in vier verschillende regions worden gewrapped.
 *
 * @extends HTMLElement
 * @mixes nativeVlElement
 *
 * @property {boolean} data-vl-alt - Maakt de achtergrond lichtgrijs.
 * @property {boolean} data-vl-no-space - Gebruik geen marges.
 * @property {boolean} data-vl-no-space-bottom - Gebruik geen marges onderaan.
 * @property {boolean} data-vl-no-space-top - Gebruik geen marges bovenaan.
 * @property {boolean} data-vl-small - Gebruik kleinere marges.
 * @property {boolean} data-vl-medium - Gebruik middelgrote marges.
 * @property {boolean} data-vl-bordered - Teken een rand.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-grid/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-grid/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-grid.html|Demo}
 */
export class VlRegion extends nativeVlElement(HTMLElement) {
  static get _observedClassAttributes() {
    return ['no-space', 'no-space-bottom', 'no-space-top', 'alt', 'small', 'medium', 'bordered'];
  }

  connectedCallback() {
    this.classList.add('vl-region');
  }

  get _classPrefix() {
    return 'vl-region--';
  }
}

/**
 * VlLayout
 * @class
 * @classdesc Het layout element (vl-layout) centreert uw inhoud in de viewport. Het layout element heeft een breedte van 1200px. Je kan het layout element vergelijken met het Container element in Bootstrap.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-grid/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-grid/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-grid.html|Demo}
 */
export class VlLayout extends nativeVlElement(HTMLDivElement) {
  static get _observedClassAttributes() {
    return [];
  }

  connectedCallback() {
    this.classList.add('vl-layout');
  }

  get _classPrefix() {
    return 'vl-layout--';
  }
}

/**
 * VlGrid
 * @class
 * @classdesc De grid(.vl-grid) dient om de lay-out van jouw pagina in orde te brengen. Je kan vl-grid vergelijken met de Row element in Bootstrap.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @property {boolean} data-vl-is-stacked - Voeg marge toe tussen gestapelde kolommen.
 * @property {boolean} data-vl-align-start - Aligneer een of meerdere kolommen links.
 * @property {boolean} data-vl-align-center - Centreer een of meerdere kolommen horizontaal.
 * @property {boolean} data-vl-align-end - Aligneer een of meerdere kolommen rechts.
 * @property {boolean} data-vl-align-space-between - Laat zoveel mogelijke ruimte tussen kolommen.
 * @property {boolean} data-vl-align-space-around - Laat zoveel mogelijke ruimte rond kolommen..
 * @property {boolean} data-vl-v-top - Aligneer een of meerdere kolommen bovenaan.
 * @property {boolean} data-vl-v-center - Centreer een of meerdere kolommen verticaal.
 * @property {boolean} data-vl-v-bottom - Aligneer een of meerdere kolommen onderaan.
 * @property {boolean} data-vl-v-stretch - Rek de kolommen tot aan hun maximum hoogte.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-grid/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-grid/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-grid.html|Demo}
 */
export class VlGrid extends nativeVlElement(HTMLDivElement) {
  static get _observedClassAttributes() {
    return [
      'is-stacked',
      'align-start', 'align-center', 'align-end',
      'align-space-between', 'align-space-around',
      'v-top', 'v-center', 'v-bottom', 'v-stretch',
    ];
  }

  connectedCallback() {
    this.classList.add('vl-grid');
  }

  get _classPrefix() {
    return 'vl-grid--';
  }
}

/**
 * VlColumn
 * @class
 * @classdesc De parent van een VlColumn is altijd een VlGrid.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @property {number} data-vl-size - De teller van de verdeling van grote scherm.
 * @property {number} data-vl-max-size - De noemer van de verdeling van grote scherm.
 * @property {number} data-vl-small-size - De teller van de verdeling van kleine scherm.
 * @property {number} data-vl-small-max-size - De noemer van de verdeling van kleine scherm.
 * @property {number} data-vl-extra-small-size - De teller van de verdeling van extra kleine scherm.
 * @property {number} data-vl-extra-small-max-size - De noemer van de verdeling van extra kleine scherm.
 * @property {number} data-vl-push - aantal partities te verschuiven.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-grid/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-grid/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-grid.html|Demo}
 */
export class VlColumn extends nativeVlElement(HTMLDivElement) {
  static get _observedAttributes() {
    return ['size', 'max-size', 'medium-size', 'medium-max-size', 'small-size', 'small-max-size', 'extra-small-size', 'extra-small-max-size', 'push'];
  }

  connectedCallback() {
    this._configureDefaults();
  }

  get _defaultSize() {
    return 8;
  }

  get _defaultMediumSize() {
    return 10;
  }

  get _defaultSmallSize() {
    return 12;
  }

  get _defaultExtraSmallSize() {
    return 12;
  }

  get _defaultMaxSize() {
    return 12;
  }

  get _size() {
    return this.getAttribute('size') || this._defaultSize;
  }

  get _maxSize() {
    return this.getAttribute('max-size') || this._defaultMaxSize;
  }

  get _mediumSize() {
    return this.getAttribute('medium-size') || this._defaultMediumSize;
  }

  get _mediumMaxSize() {
    return this.getAttribute('medium-max-size') || this._defaultMaxSize;
  }

  get _smallSize() {
    return this.getAttribute('small-size') || this._defaultSmallSize;
  }

  get _smallMaxSize() {
    return this.getAttribute('small-max-size') || this._defaultMaxSize;
  }

  get _extraSmallSize() {
    return this.getAttribute('extra-small-size') || this._defaultExtraSmallSize;
  }

  get _extraSmallMaxSize() {
    return this.getAttribute('extra-small-max-size') || this._defaultMaxSize;
  }

  get _columnClassPrefix() {
    return 'vl-col--';
  }

  get _pushClassPrefix() {
    return 'vl-push--';
  }

  static __sizeClass(minSize, maxSize, responsiveModifier) {
    return `${minSize}-${maxSize}` + (responsiveModifier ? `--${responsiveModifier}` : '');
  }

  __changeColumnClass(oldValue, newValue) {
    this._changeClass(this, oldValue, newValue, this._columnClassPrefix);
  }

  __changePushClass(oldValue, newValue) {
    this._changeClass(this, oldValue, newValue, this._pushClassPrefix);
  }

  _sizeChangedCallback(oldValue, newValue) {
    oldValue = oldValue || this._defaultSize;
    this.__changeColumnClass(VlColumn.__sizeClass(oldValue, this._maxSize), VlColumn.__sizeClass(newValue, this._maxSize));
  }

  _maxSizeChangedCallback(oldValue, newValue) {
    oldValue = oldValue || this._defaultMaxSize;
    this.__changeColumnClass(VlColumn.__sizeClass(this._size, oldValue), VlColumn.__sizeClass(this._size, newValue));
  }

  _mediumSizeChangedCallback(oldValue, newValue) {
    oldValue = oldValue || this._defaultMediumSize;
    this.__changeColumnClass(VlColumn.__sizeClass(oldValue, this._mediumMaxSize, 'm'), VlColumn.__sizeClass(newValue, this._mediumMaxSize, 'm'));
  }

  _mediumMaxSizeChangedCallback(oldValue, newValue) {
    oldValue = oldValue || this._defaultMaxSize;
    this.__changeColumnClass(VlColumn.__sizeClass(this._mediumSize, oldValue, 'm'), VlColumn.__sizeClass(this._mediumSize, newValue, 'm'));
  }

  _smallSizeChangedCallback(oldValue, newValue) {
    oldValue = oldValue || this._defaultSmallSize;
    this.__changeColumnClass(VlColumn.__sizeClass(oldValue, this._smallMaxSize, 's'), VlColumn.__sizeClass(newValue, this._smallMaxSize, 's'));
  }

  _smallMaxSizeChangedCallback(oldValue, newValue) {
    oldValue = oldValue || this._defaultMaxSize;
    this.__changeColumnClass(VlColumn.__sizeClass(this._smallSize, oldValue, 's'), VlColumn.__sizeClass(this._smallSize, newValue, 's'));
  }

  _extraSmallSizeChangedCallback(oldValue, newValue) {
    oldValue = oldValue || this._defaultExtraSmallSize;
    this.__changeColumnClass(VlColumn.__sizeClass(oldValue, this._extraSmallMaxSize, 'xs'), VlColumn.__sizeClass(newValue, this._extraSmallMaxSize, 'xs'));
  }

  _extraSmallMaxSizeChangedCallback(oldValue, newValue) {
    oldValue = oldValue || this._defaultMaxSize;
    this.__changeColumnClass(VlColumn.__sizeClass(this._extraSmallSize, oldValue, 'xs'), VlColumn.__sizeClass(this._extraSmallSize, newValue, 'xs'));
  }

  _pushChangedCallback(oldValue, newValue) {
    this.__changePushClass(VlColumn.__sizeClass(oldValue, this._maxSize), VlColumn.__sizeClass(newValue, this._maxSize));
  }

  _configureDefaults() {
    if (!this.hasAttribute('size')) {
      this._sizeChangedCallback(null, this._size);
    }

    if (!this.hasAttribute('medium-size')) {
      this._mediumSizeChangedCallback(null, this._mediumSize);
    }

    if (!this.hasAttribute('small-size')) {
      this._smallSizeChangedCallback(null, this._smallSize);
    }

    if (!this.hasAttribute('extra-small-size')) {
      this._extraSmallSizeChangedCallback(null, this._extraSmallSize);
    }
  }
}

define('vl-region', VlRegion, {extends: 'section'});
define('vl-layout', VlLayout, {extends: 'div'});
define('vl-grid', VlGrid, {extends: 'div'});
define('vl-column', VlColumn, {extends: 'div'});
