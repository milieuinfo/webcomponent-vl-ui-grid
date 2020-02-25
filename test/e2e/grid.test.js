const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlGridPage = require('./pages/vl-grid.page');

describe('vl-region', async () => {
    const vlGridPage = new VlGridPage(driver);

    before(() => {
        return vlGridPage.load();
    });

    it('de gewone region heeft geen speciale eigenschappen', async () => {
        const region = await vlGridPage.getRegion();
        await assert.eventually.isFalse(region.hasNoSpace());
        await assert.eventually.isFalse(region.hasNoSpaceBottom());
        await assert.eventually.isFalse(region.hasNoSpaceTop());
        await assert.eventually.isFalse(region.isAlt());
        await assert.eventually.isFalse(region.isSmall());
        await assert.eventually.isFalse(region.isMedium());
        await assert.eventually.isFalse(region.hasBorder());
    });

    it('de alt region heeft enkel de alt eigenschap', async () => {
        const region = await vlGridPage.getAltRegion();
        await assert.eventually.isFalse(region.hasNoSpace());
        await assert.eventually.isFalse(region.hasNoSpaceBottom());
        await assert.eventually.isFalse(region.hasNoSpaceTop());
        await assert.eventually.isTrue(region.isAlt());
        await assert.eventually.isFalse(region.isSmall());
        await assert.eventually.isFalse(region.isMedium());
        await assert.eventually.isFalse(region.hasBorder());
    });
});

describe('vl-grid', async () => {
    const vlGridPage = new VlGridPage(driver);

    before(() => {
        return vlGridPage.load();
    });

    it('alle ondersteunde opties van een grid kunnen geactiveerd worden', async () => {
        const stackedGrid = await vlGridPage.getStackedGrid();
        await assert.eventually.isTrue(stackedGrid.isStacked());

        const startAlignedGrid = await vlGridPage.getStartAlignedGrid();
        await assert.eventually.isTrue(startAlignedGrid.isHorizontallyStartAligned());

        const centerAlignedGrid = await vlGridPage.getCenterAlignedGrid();
        await assert.eventually.isTrue(centerAlignedGrid.isHorizontallyCenterAligned());

        const endAlignedGrid = await vlGridPage.getEndAlignedGrid();
        await assert.eventually.isTrue(endAlignedGrid.isHorizontallyEndAligned());

        const alignedWithSpaceAroundGrid = await vlGridPage.getAlignedWithSpaceAroundGrid();
        await assert.eventually.isTrue(alignedWithSpaceAroundGrid.isHorizontallyAlignedWithSpaceAround());

        const alignedWithSpaceBetweenGrid = await vlGridPage.getAlignedWithSpaceBetweenGrid();
        await assert.eventually.isTrue(alignedWithSpaceBetweenGrid.isHorizontallyAlignedWithSpaceBetween());

        const verticallyTopAlignedGrid = await vlGridPage.getVerticallyTopAlignedGrid();
        await assert.eventually.isTrue(verticallyTopAlignedGrid.isVerticallyTopAligned());

        const verticallyCenterAlignedGrid = await vlGridPage.getVerticallyCenterAlignedGrid();
        await assert.eventually.isTrue(verticallyCenterAlignedGrid.isVerticallyCenterAligned());

        const verticallyBottomAlignedGrid = await vlGridPage.getVerticallyBottomAlignedGrid();
        await assert.eventually.isTrue(verticallyBottomAlignedGrid.isVerticallyBottomAligned());

        const verticallyStretchedGrid = await vlGridPage.getVerticallyStretchedGrid();
        await assert.eventually.isTrue(verticallyStretchedGrid.isVerticallyStretched());
    });
});

describe('vl-column', async () => {
    const vlGridPage = new VlGridPage(driver);

    before(() => {
        return vlGridPage.load();
    });

    it('men kan er op vertrouwen dat er default sizes worden gekozen', async () => {
        const defaultSizeColumn = await vlGridPage.getColumnWithDefaultSize();
        await assert.eventually.equal(defaultSizeColumn.getSize(), 12);
        await assert.eventually.equal(defaultSizeColumn.getMaxSize(), 12);
        await assert.eventually.isUndefined(defaultSizeColumn.getSmallSize());
        await assert.eventually.isUndefined(defaultSizeColumn.getSmallMaxSize());
        await assert.eventually.isUndefined(defaultSizeColumn.getExtraSmallSize());
        await assert.eventually.isUndefined(defaultSizeColumn.getExtraSmallMaxSize());

        const defaultMaxSizeColumn = await vlGridPage.getColumnWithDefaultMaxSize();
        await assert.eventually.equal(defaultMaxSizeColumn.getSize(), 4);
        await assert.eventually.equal(defaultMaxSizeColumn.getMaxSize(), 12);
        await assert.eventually.isUndefined(defaultMaxSizeColumn.getSmallSize());
        await assert.eventually.isUndefined(defaultMaxSizeColumn.getSmallMaxSize());
        await assert.eventually.isUndefined(defaultMaxSizeColumn.getExtraSmallSize());
        await assert.eventually.isUndefined(defaultMaxSizeColumn.getExtraSmallMaxSize());
    });

    it('men kan responsive sizes instellen', async () => {
        const column = await vlGridPage.getColumnWithResponsiveSizes();
        await assert.eventually.equal(column.getSize(), 4);
        await assert.eventually.equal(column.getMaxSize(), 12);
        await assert.eventually.equal(column.getSmallSize(), 8);
        await assert.eventually.equal(column.getSmallMaxSize(), 12);
        await assert.eventually.equal(column.getExtraSmallSize(), 12);
        await assert.eventually.equal(column.getExtraSmallMaxSize(), 12);
        await assert.eventually.isUndefined(column.getPush());
    });

    it('men kan de kolom pushen', async () => {
        const column = await vlGridPage.getPushedColumn();
        await assert.eventually.equal(column.getSize(), 4);
        await assert.eventually.equal(column.getMaxSize(), 12);
        await assert.eventually.equal(column.getPush(), 1);
    });
});