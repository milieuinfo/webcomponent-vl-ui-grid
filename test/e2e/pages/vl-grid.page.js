const {VlLayout, VlRegion, VlGrid, VlColumn} = require('../components/vl-grid');
const {Page, Config} = require('vl-ui-core').Test;

class VlGridPage extends Page {
  async _getRegion(selector) {
    return new VlRegion(this.driver, selector);
  }

  async _getLayout(selector) {
    return new VlLayout(this.driver, selector);
  }

  async _getGrid(selector) {
    return new VlGrid(this.driver, selector);
  }

  async _getColumn(selector) {
    return new VlColumn(this.driver, selector);
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-grid.html');
  }

  async getRegion() {
    return this._getRegion('#region');
  }

  async getAltRegion() {
    return this._getRegion('#region-alt');
  }

  async getOverlapRegion() {
    return this._getRegion('#region-overlap');
  }

  async getLayout() {
    return this._getLayout('#layout');
  }

  async getStackedGrid() {
    return this._getGrid('#grid-stacking');
  }

  async getStackedLargeGrid() {
    return this._getGrid('#grid-stacking-large');
  }

  async getStackedSmallGrid() {
    return this._getGrid('#grid-stacking-small');
  }

  async getStartAlignedGrid() {
    return this._getGrid('#grid-align-start');
  }

  async getCenterAlignedGrid() {
    return this._getGrid('#grid-align-center');
  }

  async getEndAlignedGrid() {
    return this._getGrid('#grid-align-end');
  }

  async getAlignedWithSpaceBetweenGrid() {
    return this._getGrid('#grid-align-space-between');
  }

  async getAlignedWithSpaceAroundGrid() {
    return this._getGrid('#grid-align-space-around');
  }

  async getVerticallyTopAlignedGrid() {
    return this._getGrid('#grid-v-top');
  }

  async getVerticallyCenterAlignedGrid() {
    return this._getGrid('#grid-v-center');
  }

  async getVerticallyBottomAlignedGrid() {
    return this._getGrid('#grid-v-bottom');
  }

  async getVerticallyStretchedGrid() {
    return this._getGrid('#grid-v-stretch');
  }

  async getColumnWithDefaultSize() {
    return this._getColumn('#vl-column-default-size');
  }

  async getColumnWithDefaultMaxSize() {
    return this._getColumn('#vl-column-default-max-size');
  }

  async getColumnWithResponsiveSizes() {
    return this._getColumn('#vl-column-responsive-sizes');
  }

  async getPushedColumn() {
    return this._getColumn('#vl-column-push');
  }
}

module.exports = VlGridPage;
