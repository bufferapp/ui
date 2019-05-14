import snap from 'jest-auto-snapshots';
import md5 from 'blueimp-md5';
import NavBarMenu, { getUserAvatar } from './NavBarMenu';
import 'jest-styled-components';

describe('Avatar', () => {
  it('should return existing avatar URL', () => {
    expect(getUserAvatar({ avatar: 'foo'})).toBe(`foo`);
  });
  it('should return gravatar', () => {
    const user = { email: 'foo@bar.com' };
    expect(getUserAvatar(user)).toBe(`https://www.gravatar.com/avatar/${md5(user.email)}?d=https%3A%2F%2Fs3.amazonaws.com%2Fbuffer-ui%2FDefault%2BAvatar.png`);
  });
});

describe('NavBarMenu methods', () => {
});


snap(NavBarMenu, './NavBarMenu.jsx');
