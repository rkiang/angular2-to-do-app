import { Angular2ToDoAppPage } from './app.po';

describe('angular2-to-do-app App', function() {
  let page: Angular2ToDoAppPage;

  beforeEach(() => {
    page = new Angular2ToDoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
