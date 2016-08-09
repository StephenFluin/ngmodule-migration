import { NgmoduleMigrationPage } from './app.po';

describe('ngmodule-migration App', function() {
  let page: NgmoduleMigrationPage;

  beforeEach(() => {
    page = new NgmoduleMigrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
