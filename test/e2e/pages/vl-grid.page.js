const VlGrid = require('../components/vl-grid');
const { Page } = require('vl-ui-core');
const { Config } = require('vl-ui-core');

class VlGridPage extends Page {
    async _getGrid(selector) {
        return new VlGrid(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-grid.html');
    }
}

module.exports = VlGridPage;
