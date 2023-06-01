import snap from 'jest-auto-snapshots';
import NavBar, { getLogoutUrl, appendMenuItem, getProductPath, getAccountUrl, } from './NavBar';
describe('get productPath', () => {
    it('return account path', () => {
        const baseUrl = 'https://analyze.buffer.com/facebook/overview/4e88a092512f7e1556000000';
        expect(getProductPath(baseUrl)).toBe(`analyze`);
    });
    it('return local product path', () => {
        const baseUrl = 'https://analyze.local.buffer.com/facebook/overview/4e88a092512f7e1556000000';
        expect(getProductPath(baseUrl)).toBe(`analyze.local`);
    });
});
describe('Logout url', () => {
    it('return logout url', () => {
        const baseUrl = 'https://analyze.buffer.com/facebook/overview/4e88a092512f7e1556000000';
        expect(getLogoutUrl(baseUrl)).toBe(`https://login.buffer.com/logout?redirect=https://analyze.buffer.com`);
    });
});
describe('Account url', () => {
    it('return account url', () => {
        const baseUrl = 'https://analyze.buffer.com/facebook/overview/4e88a092512f7e1556000000';
        expect(getAccountUrl(baseUrl, { name: 'foo' })).toBe(`https://account.buffer.com?redirect=https://analyze.buffer.com&username=foo`);
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
//# sourceMappingURL=NavBar.spec.js.map