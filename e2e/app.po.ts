export class Ng2FirebasePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-firebase-app h1')).getText();
  }
}
