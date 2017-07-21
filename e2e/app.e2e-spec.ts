import { A2CIPage } from './app.po';

describe('a2-ci App', () => {
  let page: A2CIPage;

  beforeEach(() => {
    page = new A2CIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
