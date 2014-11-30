'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('ifizika', function() {

  browser.get('index.html');

  it('should automatically redirect to / when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/beta/");
  });
});