import{VlElement}from"/node_modules/vl-ui-core/vl-core.js";export class VlGrid extends VlElement(HTMLElement){constructor(){super(`
          <style>
            @import '../style.css';
          </style>
        
          <div class="vl-grid">
              <slot></slot>
          </div>
    `)}};export class VlColumn extends VlElement(HTMLElement){constructor(){super(`
          <style>
            @import '../style.css';
          </style>
        
          <div data-vl-column>
              <slot></slot>
          </div>
    `)}get _columnElement(){return this._element}get _sizeAttribute(){return this.getAttribute("size")}get _maxSizeAttribute(){return this.getAttribute("max-size")}connectedCallback(){this._setClasses()}_setClasses(){const prefix="vl-col--";this._columnElement.classList.add(prefix.concat(this._sizeAttribute,"-",this._maxSizeAttribute))}};customElements.define("vl-grid",VlGrid),customElements.define("vl-column",VlColumn);