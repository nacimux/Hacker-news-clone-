import { HackerNewsClonePage } from './app.po';

describe('hacker-news-clone App', function() {
  let page: HackerNewsClonePage;

  beforeEach(() => {
    page = new HackerNewsClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
