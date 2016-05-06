import { Ng2FirebasePage } from './app.po';

describe('ng2-firebase App', function() {
  let page: Ng2FirebasePage;

  beforeEach(() => {
    page = new Ng2FirebasePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-firebase works!');
  });
});
