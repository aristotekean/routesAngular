import { MyRouterPage } from './app.po';

describe('my-router App', () => {
  let page: MyRouterPage;

  beforeEach(() => {
    page = new MyRouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
