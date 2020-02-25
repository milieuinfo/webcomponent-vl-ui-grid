const { VlElement } = require('vl-ui-core').Test;

class VlRegion extends VlElement {
    constructor(driver, selector) {
        super(driver, selector);
    }

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
        return this.hasClass(`vl-region--${name}`);
    }
}

class VlLayout extends VlElement {
    constructor(driver, selector) {
        super(driver, selector);
    }
}

class VlGrid extends VlElement {  
    constructor(driver, selector) {
        super(driver, selector);
    }

    async isStacked() {
        return this._hasClass('is-stacked');
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
        return this.hasClass(`vl-grid--${name}`);
    }
}

class VlColumn extends VlElement {
    constructor(driver, selector) {
        super(driver, selector);
    }

    async getSize() {
        return this._getMinSize();
    }

    async getMaxSize() {
        return this._getMaxSize()
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
        const classes = await this.getClassList();
        const pushMatcher = /vl-push--(\d+)-(\d+)/;
        const filteredClasses = classes.filter(clazz => pushMatcher.test(clazz));
        if (filteredClasses.length > 0) {
            const result = pushMatcher.exec(filteredClasses[0]);
            if (result && result.length >= 2) {
                return result[1];
            }
        }
    }

    async _getMinSize(responsiveModifier) {
        const size = await this._getSizeAttribute(responsiveModifier);
        if (size) {
            return size.min;
        }
    }

    async _getMaxSize(responsiveModifier) {
        const size = await this._getSizeAttribute(responsiveModifier);
        if (size) {
            return size.max;
        }
    }

    async _getSizeAttribute(responsiveModifier) {
        const classes = await this.getClassList();
        const sizeMatcher = new RegExp('^vl-col--(\\d+)-(\\d+)' + (responsiveModifier ? `--${responsiveModifier}` : '') + '$');
        const filteredClasses = classes.filter(clazz => sizeMatcher.test(clazz));
        if (filteredClasses.length > 0) {
            const result = sizeMatcher.exec(filteredClasses[0]);
            if (result && result.length >= 3) {
                const min = result[1];
                const max = result[2];
                return {
                    min: min,
                    max: max
                }
            }
        }
    }
}

module.exports = { VlRegion, VlLayout, VlGrid, VlColumn };
