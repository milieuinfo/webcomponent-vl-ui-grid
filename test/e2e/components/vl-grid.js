const {VlElement} = require('vl-ui-core').Test;

class VlRegion extends VlElement {
  async hasNoSpace() {
    return this._hasClass('no-space');
  }

  async hasNoSpaceBottom() {
    return this._hasClass('no-space-bottom');
  }

  async hasNoSpaceTop() {
    return this._hasClass('no-space-top');
  }

  async isAlt() {
    return this._hasClass('alt');
  }

  async isOverlap() {
    return this._hasClass('overlap');
  }

  async isSmall() {
    return this._hasClass('small');
  }

  async isMedium() {
    return this._hasClass('medium');
  }

  async hasBorder() {
    return this._hasClass('bordered');
  }

  async _hasClass(name) {
    return this.hasClass(`${this._classPrefix}${name}`);
  }

  get _classPrefix() {
    return 'vl-region--';
  }
}

class VlLayout extends VlElement {
  get _classPrefix() {
    return 'vl-layout--';
  }
}

class VlGrid extends VlElement {
  async isStacked() {
    return this._hasClass('is-stacked');
  }

  async isStackedLarge() {
    return this._hasClass('is-stacked-large');
  }

  async isStackedSmall() {
    return this._hasClass('is-stacked-small');
  }

  async isHorizontallyStartAligned() {
    return this._hasClass('align-start');
  }

  async isHorizontallyCenterAligned() {
    return this._hasClass('align-center');
  }

  async isHorizontallyEndAligned() {
    return this._hasClass('align-end');
  }

  async isHorizontallyAlignedWithSpaceBetween() {
    return this._hasClass('align-space-between');
  }

  async isHorizontallyAlignedWithSpaceAround() {
    return this._hasClass('align-space-around');
  }

  async isVerticallyTopAligned() {
    return this._hasClass('v-top');
  }

  async isVerticallyCenterAligned() {
    return this._hasClass('v-center');
  }

  async isVerticallyBottomAligned() {
    return this._hasClass('v-bottom');
  }

  async isVerticallyStretched() {
    return this._hasClass('v-stretch');
  }

  async _hasClass(name) {
    return this.hasClass(`${this._classPrefix}${name}`);
  }

  get _classPrefix() {
    return 'vl-grid--';
  }
}

class VlColumn extends VlElement {
  async getSize() {
    return this._getMinSize();
  }

  async getMaxSize() {
    return this._getMaxSize();
  }

  async getMediumSize() {
    return this._getMinSize('m');
  }

  async getMediumMaxSize() {
    return this._getMaxSize('m');
  }

  async getSmallSize() {
    return this._getMinSize('s');
  }

  async getSmallMaxSize() {
    return this._getMaxSize('s');
  }

  async getExtraSmallSize() {
    return this._getMinSize('xs');
  }

  async getExtraSmallMaxSize() {
    return this._getMaxSize('xs');
  }

  async getPush() {
    const pushMatcher = new RegExp(`${this._pushClassPrefix}(\\d+)-\\d+`);
    const [pushSize] = await this._parseMatchingClass(pushMatcher);
    return pushSize;
  }

  async _getMinSize(responsiveModifier) {
    const size = await this._getSize(responsiveModifier);
    if (size) {
      return size.min;
    }
  }

  async _getMaxSize(responsiveModifier) {
    const size = await this._getSize(responsiveModifier);
    if (size) {
      return size.max;
    }
  }

  async _getSize(responsiveModifier) {
    const sizeMatcher = new RegExp(`^${this._columnClassPrefix}(\\d+)-(\\d+)${this.__responsiveModifierClassPostfix(responsiveModifier)}\$`);
    const [min, max] = await this._parseMatchingClass(sizeMatcher);
    return {min: min, max: max};
  }

  __responsiveModifierClassPostfix(responsiveModifier) {
    return responsiveModifier ? `--${responsiveModifier}` : '';
  }

  async _parseMatchingClass(classMatcher) {
    const clazz = await this._getFirstMatchingClass(classMatcher.test.bind(classMatcher));
    const result = classMatcher.exec(clazz) || [];
    return result.slice(1);
  }

  async _getFirstMatchingClass(matcher) {
    const classes = await this._getClasses(matcher);
    if (classes && classes.length > 0) {
      return classes[0];
    }
  }

  async _getClasses(matcher) {
    const classes = await this.getClassList();
    return classes.filter(matcher);
  }

  get _columnClassPrefix() {
    return 'vl-col--';
  }

  get _pushClassPrefix() {
    return 'vl-push--';
  }
}

module.exports = {VlRegion, VlLayout, VlGrid, VlColumn};
