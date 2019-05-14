import snap from 'jest-auto-snapshots';
import NavBar, { getLogoutUrl } from './NavBar';

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


snap(NavBar, './NavBar.jsx');
