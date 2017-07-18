import { ApplicPage } from './app.po';

describe('applic App', () => {
  let page: ApplicPage;

  beforeEach(() => {
    page = new ApplicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
