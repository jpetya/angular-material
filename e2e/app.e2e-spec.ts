import { AngularMatPage } from './app.po';

describe('angular-mat App', () => {
  let page: AngularMatPage;

  beforeEach(() => {
    page = new AngularMatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
