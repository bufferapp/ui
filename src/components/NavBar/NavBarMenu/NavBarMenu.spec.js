import snap from 'jest-auto-snapshots';
import NavBarMenu, { getUserAvatar } from './NavBarMenu';
import 'jest-styled-components';

describe('Avatar', () => {
  it('should return existing avatar URL', () => {
    expect(getUserAvatar({ avatar: 'foo' })).toBe(`foo`);
  });
  it('should return default', () => {
    const user = { email: 'foo@bar.com' };
    expect(getUserAvatar(user)).toBe(
      `https://s3.amazonaws.com/buffer-ui/Default+Avatar.png`
    );
  });
});

describe('NavBarMenu methods', () => {});

snap(NavBarMenu, './NavBarMenu.jsx');
