import{VlElement}from"/node_modules/vl-ui-core/vl-core.js";export class VlGrid extends(VlElement(HTMLElement)){constructor(t){super("\n          <style>\n            @import '/node_modules/vl-ui-core/core-style.css';\n          </style>\n        \n          <slot></slot>\n    ")}static get _observedClassAttributes(){return["is-stacked"]}connectedCallback(){this.classList.add("vl-grid")}get _classPrefix(){return"vl-grid--"}};export class VlColumn extends(VlElement(HTMLElement)){constructor(t){super("\n          <style>\n            @import '/node_modules/vl-ui-core/core-style.css';\n          </style>\n        \n          <slot></slot>\n    ")}get _defaultMaxSize(){return 12}get _columnElement(){return this}get _sizeAttribute(){return this.getAttribute("size")}get _maxSizeAttribute(){const t=this.getAttribute("max-size");return t||this._defaultMaxSize}get _smallSizeAttribute(){return this.getAttribute("small-size")}get _smallMaxSizeAttribute(){const t=this.getAttribute("small-max-size");return t||this._defaultMaxSize}get _pushAttribute(){return this.getAttribute("push")}get _classPrefix(){return"vl-col--"}get _pushPrefix(){return"vl-push--"}connectedCallback(){this._setClasses()}_setClasses(){this._setNormalSizeClasses(),this._setSmallSizeClasses(),this._setPushSizeClasses()}_setNormalSizeClasses(){const t=this._sizeAttribute,e=this._maxSizeAttribute;t&&e&&this._columnElement.classList.add(this._classPrefix.concat(t,"-",e))}_setSmallSizeClasses(){const t=this._smallSizeAttribute,e=this._smallMaxSizeAttribute;t&&e&&this._columnElement.classList.add(this._classPrefix.concat(t,"-",e,"--","s"))}_setPushSizeClasses(){const t=this._pushAttribute,e=this._maxSizeAttribute;t&&e&&this._columnElement.classList.add(this._pushPrefix.concat(t,"-",e))}};customElements.define("vl-grid",VlGrid),customElements.define("vl-column",VlColumn);