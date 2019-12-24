import{NativeVlElement,define}from"/node_modules/vl-ui-core/vl-core.js";export class VlRegion extends NativeVlElement(HTMLElement){static get _observedClassAttributes(){return["no-space","no-space-bottom","no-space-top","alt","small","medium","bordered"]}connectedCallback(){this.classList.add("vl-region")}get _classPrefix(){return"vl-region--"}get _stylePath(){return"/node_modules/vl-ui-core/core-style.css"}};export class VlLayout extends NativeVlElement(HTMLDivElement){static get _observedClassAttributes(){return[]}connectedCallback(){this.classList.add("vl-layout")}get _classPrefix(){return"vl-layout--"}get _stylePath(){return"/node_modules/vl-ui-core/core-style.css"}};export class VlGrid extends NativeVlElement(HTMLDivElement){static get _observedClassAttributes(){return["is-stacked","align-start","align-center","align-end","align-space-between","align-space-around","v-top","v-center","v-bottom","v-stretch"]}connectedCallback(){this.classList.add("vl-grid")}get _classPrefix(){return"vl-grid--"}get _stylePath(){return"/node_modules/vl-ui-core/core-style.css"}};export class VlColumn extends NativeVlElement(HTMLDivElement){static get _observedAttributes(){return["size","max-size","small-size","small-max-size","extra-small-size","extra-small-max-size","push"]}get _defaultMinSize(){return 12}get _defaultMaxSize(){return 12}get _sizeAttribute(){return this.getAttribute("size")||this._defaultMinSize}get _maxSizeAttribute(){return this.getAttribute("max-size")||this._defaultMaxSize}get _smallSizeAttribute(){return this.getAttribute("small-size")||this._defaultMinSize}get _smallMaxSizeAttribute(){return this.getAttribute("small-max-size")||this._defaultMaxSize}get _extraSmallSizeAttribute(){return this.getAttribute("extra-small-size")||this._defaultMinSize}get _extraSmallMaxSizeAttribute(){return this.getAttribute("extra-small-max-size")||this._defaultMaxSize}get _columnClassPrefix(){return"vl-col--"}get _pushClassPrefix(){return"vl-push--"}get _stylePath(){return"/node_modules/vl-ui-core/core-style.css"}static __sizeClass(minSize,maxSize,responsiveModifier){return`${minSize}-${maxSize}`+(responsiveModifier?`--${responsiveModifier}`:"")}__changeColumnClass(oldValue,newValue){this._changeClass(this,oldValue,newValue,this._columnClassPrefix)}__changePushClass(oldValue,newValue){this._changeClass(this,oldValue,newValue,this._pushClassPrefix)}_sizeChangedCallback(oldValue,newValue){oldValue=oldValue||this._defaultMinSize;this.__changeColumnClass(VlColumn.__sizeClass(oldValue,this._maxSizeAttribute),VlColumn.__sizeClass(newValue,this._maxSizeAttribute))}_max_sizeChangedCallback(oldValue,newValue){oldValue=oldValue||this._defaultMaxSize;this.__changeColumnClass(VlColumn.__sizeClass(this._sizeAttribute,oldValue),VlColumn.__sizeClass(this._sizeAttribute,newValue))}_small_sizeChangedCallback(oldValue,newValue){oldValue=oldValue||this._defaultMinSize;this.__changeColumnClass(VlColumn.__sizeClass(oldValue,this._smallMaxSizeAttribute,"s"),VlColumn.__sizeClass(newValue,this._smallMaxSizeAttribute,"s"))}_small_max_sizeChangedCallback(oldValue,newValue){oldValue=oldValue||this._defaultMaxSize;this.__changeColumnClass(VlColumn.__sizeClass(this._smallSizeAttribute,oldValue,"s"),VlColumn.__sizeClass(this._smallSizeAttribute,newValue,"s"))}_extra_small_sizeChangedCallback(oldValue,newValue){oldValue=oldValue||this._defaultMinSize;this.__changeColumnClass(VlColumn.__sizeClass(oldValue,this._extraSmallMaxSizeAttribute,"xs"),VlColumn.__sizeClass(newValue,this._extraSmallMaxSizeAttribute,"xs"))}_extra_small_max_sizeChangedCallback(oldValue,newValue){oldValue=oldValue||this._defaultMaxSize;this.__changeColumnClass(VlColumn.__sizeClass(this._extraSmallSizeAttribute,oldValue,"xs"),VlColumn.__sizeClass(this._extraSmallSizeAttribute,newValue,"xs"))}_pushChangedCallback(oldValue,newValue){this.__changePushClass(VlColumn.__sizeClass(oldValue,this._maxSizeAttribute),VlColumn.__sizeClass(newValue,this._maxSizeAttribute))}};define("vl-region",VlRegion,{extends:"section"}),define("vl-layout",VlLayout,{extends:"div"}),define("vl-grid",VlGrid,{extends:"div"}),define("vl-column",VlColumn,{extends:"div"});