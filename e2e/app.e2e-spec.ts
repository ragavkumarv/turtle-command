import { TurtleCommandPage } from './app.po';

describe('turtle-command App', () => {
  let page: TurtleCommandPage;

  beforeEach(() => {
    page = new TurtleCommandPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
