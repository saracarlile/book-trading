import { BooktradingPage } from './app.po';

describe('booktrading App', () => {
  let page: BooktradingPage;

  beforeEach(() => {
    page = new BooktradingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
