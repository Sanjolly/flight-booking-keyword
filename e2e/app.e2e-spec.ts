import { HttpModuleDemoPage } from './app.po';

describe('http-module-demo App', () => {
  let page: HttpModuleDemoPage;

  beforeEach(() => {
    page = new HttpModuleDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
