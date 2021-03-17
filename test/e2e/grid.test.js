const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlGridPage = require('./pages/vl-grid.page');

describe('vl-region', async () => {
  let driver;
  let vlGridPage;

  before(() => {
    driver = getDriver();
    vlGridPage = new VlGridPage(driver);
    return vlGridPage.load();
  });

  it('WCAG', async () => {
    await assert.eventually.isFalse(vlGridPage.hasWcagIssues());
  });

  it('de gewone region heeft geen speciale eigenschappen', async () => {
    const region = await vlGridPage.getRegion();
    await assert.eventually.isFalse(region.hasNoSpace());
    await assert.eventually.isFalse(region.hasNoSpaceBottom());
    await assert.eventually.isFalse(region.hasNoSpaceTop());
    await assert.eventually.isFalse(region.isAlt());
    await assert.eventually.isFalse(region.isOverlap());
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
    await assert.eventually.isFalse(region.isOverlap());
    await assert.eventually.isFalse(region.isSmall());
    await assert.eventually.isFalse(region.isMedium());
    await assert.eventually.isFalse(region.hasBorder());
  });

  it('de overlap region heeft enkel de overlap eigenschap', async () => {
    const region = await vlGridPage.getOverlapRegion();
    await assert.eventually.isFalse(region.hasNoSpace());
    await assert.eventually.isFalse(region.hasNoSpaceBottom());
    await assert.eventually.isFalse(region.hasNoSpaceTop());
    await assert.eventually.isFalse(region.isAlt());
    await assert.eventually.isTrue(region.isOverlap());
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

  it('men kan een grid stacked maken', async () => {
    const stackedGrid = await vlGridPage.getStackedGrid();
    await assert.eventually.isTrue(stackedGrid.isStacked());
  });

  it('men kan een grid stacked large maken', async () => {
    const stackedGrid = await vlGridPage.getStackedLargeGrid();
    await assert.eventually.isTrue(stackedGrid.isStackedLarge());
  });

  it('men kan een grid stacked small maken', async () => {
    const stackedGrid = await vlGridPage.getStackedSmallGrid();
    await assert.eventually.isTrue(stackedGrid.isStackedSmall());
  });

  it('men kan een grid links aligneren', async () => {
    const startAlignedGrid = await vlGridPage.getStartAlignedGrid();
    await assert.eventually.isTrue(startAlignedGrid.isHorizontallyStartAligned());
  });

  it('men kan een grid in het midden aligneren', async () => {
    const centerAlignedGrid = await vlGridPage.getCenterAlignedGrid();
    await assert.eventually.isTrue(centerAlignedGrid.isHorizontallyCenterAligned());
  });

  it('men kan een grid rechts aligneren', async () => {
    const endAlignedGrid = await vlGridPage.getEndAlignedGrid();
    await assert.eventually.isTrue(endAlignedGrid.isHorizontallyEndAligned());
  });

  it('men kan zoveel mogelijk ruimte rond kolommen laten', async () => {
    const alignedWithSpaceAroundGrid = await vlGridPage.getAlignedWithSpaceAroundGrid();
    await assert.eventually.isTrue(alignedWithSpaceAroundGrid.isHorizontallyAlignedWithSpaceAround());
  });

  it('men kan zoveel mogelijk ruimte tussen kolommen laten', async () => {
    const alignedWithSpaceBetweenGrid = await vlGridPage.getAlignedWithSpaceBetweenGrid();
    await assert.eventually.isTrue(alignedWithSpaceBetweenGrid.isHorizontallyAlignedWithSpaceBetween());
  });

  it('men kan verticaal aligneren aan de top', async () => {
    const verticallyTopAlignedGrid = await vlGridPage.getVerticallyTopAlignedGrid();
    await assert.eventually.isTrue(verticallyTopAlignedGrid.isVerticallyTopAligned());
  });

  it('men kan bovenaan aligneren', async () => {
    const verticallyTopAlignedGrid = await vlGridPage.getVerticallyTopAlignedGrid();
    await assert.eventually.isTrue(verticallyTopAlignedGrid.isVerticallyTopAligned());
  });

  it('men kan verticaal in het midden aligneren', async () => {
    const verticallyCenterAlignedGrid = await vlGridPage.getVerticallyCenterAlignedGrid();
    await assert.eventually.isTrue(verticallyCenterAlignedGrid.isVerticallyCenterAligned());
  });

  it('men kan onderaan aligneren', async () => {
    const verticallyBottomAlignedGrid = await vlGridPage.getVerticallyBottomAlignedGrid();
    await assert.eventually.isTrue(verticallyBottomAlignedGrid.isVerticallyBottomAligned());
  });

  it('men kan kolommen tot aan hun maximale hoogte rekken', async () => {
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
    await assert.eventually.equal(defaultSizeColumn.getMediumSize(), 10);
    await assert.eventually.equal(defaultSizeColumn.getMediumMaxSize(), 12);
    await assert.eventually.equal(defaultSizeColumn.getSmallSize(), 12);
    await assert.eventually.equal(defaultSizeColumn.getSmallMaxSize(), 12);
    await assert.eventually.equal(defaultSizeColumn.getExtraSmallSize(), 12);
    await assert.eventually.equal(defaultSizeColumn.getExtraSmallMaxSize(), 12);

    const defaultMaxSizeColumn = await vlGridPage.getColumnWithDefaultMaxSize();
    await assert.eventually.equal(defaultMaxSizeColumn.getSize(), 4);
    await assert.eventually.equal(defaultMaxSizeColumn.getMaxSize(), 12);
    await assert.eventually.equal(defaultMaxSizeColumn.getMediumSize(), 10);
    await assert.eventually.equal(defaultMaxSizeColumn.getMediumMaxSize(), 12);
    await assert.eventually.equal(defaultMaxSizeColumn.getSmallSize(), 12);
    await assert.eventually.equal(defaultMaxSizeColumn.getSmallMaxSize(), 12);
    await assert.eventually.equal(defaultMaxSizeColumn.getExtraSmallSize(), 12);
    await assert.eventually.equal(defaultMaxSizeColumn.getExtraSmallMaxSize(), 12);
  });

  it('men kan responsive sizes instellen', async () => {
    const column = await vlGridPage.getColumnWithResponsiveSizes();
    await assert.eventually.equal(column.getSize(), 4);
    await assert.eventually.equal(column.getMaxSize(), 12);
    await assert.eventually.equal(column.getMediumSize(), 6);
    await assert.eventually.equal(column.getMediumMaxSize(), 12);
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
