import { KritWebPage } from './app.po';

describe('krit-web App', () => {
  let page: KritWebPage;

  beforeEach(() => {
    page = new KritWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
