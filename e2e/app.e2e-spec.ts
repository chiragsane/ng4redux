import { Ng4reduxPage } from './app.po';

describe('ng4redux App', () => {
  let page: Ng4reduxPage;

  beforeEach(() => {
    page = new Ng4reduxPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
