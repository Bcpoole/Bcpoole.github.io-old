import {PageObjectWelcome} from './welcome.po.js';
import {PageObjectSkeleton} from './skeleton.po.js';

describe('aurelia skeleton app', function() {
  let poWelcome;
  let poSkeleton;

  beforeEach(() => {
    poSkeleton = new PageObjectSkeleton();
    poWelcome = new PageObjectWelcome();

    browser.loadAndWaitForAureliaPage('http://localhost:9000');
  });

  it('should load the page and display the initial page title', () => {
    expect(poSkeleton.getCurrentPageTitle()).toBe('Welcome | Brandon Poole');
  });
/*
  // Turned off due to a Chrome Bug
  it('should show alert message when clicking submit button', () => {
    expect(poWelcome.openAlertDialog()).toBe(true);
  });
*/
});
