import snap from 'jest-auto-snapshots';
import NavBar, { getLogoutUrl, appendMenuItem } from './NavBar';

describe('Logout url', () => {
  it('return logout url', () => {
    const baseUrl = 'https://analyze.buffer.com/facebook/overview/4e88a092512f7e1556000000';
    const productPath = 'analyze'
    expect(getLogoutUrl(baseUrl)).toBe(`https://login${productPath.includes('local') ? '.local' : ''}.buffer.com/logout?redirect=https://${productPath}.buffer.com`);
  });

  it('return local logout url', () => {
    const baseUrl = 'https://analyze.local.buffer.com/facebook/overview/4e88a092512f7e1556000000';
    const productPath = 'analyze.local'
    expect(getLogoutUrl(baseUrl)).toBe(`https://login${productPath.includes('local') ? '.local' : ''}.buffer.com/logout?redirect=https://${productPath}.buffer.com`);
  });
});

describe('Append menu items', () => {
  it('should return the item if no match', () => {
    const item = { id: 'foo' };
    expect(appendMenuItem([], item)).toBe(item);

    expect(appendMenuItem(null, item)).toBe(item);
  });

  it('should return null if ignoreMenuItems matches', () => {
    const item = { id: 'foo' };
    expect(appendMenuItem(['foo'], item)).toBe(null);
  });

});


snap(NavBar, './NavBar.jsx');
