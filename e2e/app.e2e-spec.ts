import { SportsKsPage } from './app.po';

describe('sports-ks App', () => {
  let page: SportsKsPage;

  beforeEach(() => {
    page = new SportsKsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
