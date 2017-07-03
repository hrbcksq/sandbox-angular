import { SandboxAngularPage } from './app.po';

describe('sandbox-angular App', () => {
  let page: SandboxAngularPage;

  beforeEach(() => {
    page = new SandboxAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
