import { Angular2TodoAppTutorialPage } from './app.po';

describe('angular2-todo-app-tutorial App', function() {
  let page: Angular2TodoAppTutorialPage;

  beforeEach(() => {
    page = new Angular2TodoAppTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
