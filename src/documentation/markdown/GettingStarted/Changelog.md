# Changelog

## [5.49.1] - 2020-10-27
- Accept minor versions of React 16

## [5.49.0] - 2020-10-27
### Fixed
- Fixed color contrast in Input and Text Area errors.

### Updated
- Copy changes in org switcher.

## [5.48.1] - 2020-09-09
### Updated
- Update SocialButton Instagram copy

## [5.47.0] - 2020-09-09
### Added
- Added new icons Home and Channels

## [5.46.0] - 2020-08-31
### Dependencies
- Upgraded to `styled-components@5` ✨

## [5.45.0] - 2020-08-13
### Added
- Create new Notice component.

## [5.44.1] - 2020-08-05
### Fixed
- Scroll in PopupMenu, when used inside the AppShell Navbar. 

## [5.44.0] - 2020-07-27
### Added
- Create new Switch component.

## [5.43.1] - 2020-07-22
### Updated
- Update styles for `New!` label.

## [5.43.0] - 2020-07-22
### Updated
- Updates light and dark social channel colors to match current designs.
- Sets the `SocialButton` component background color to use dark variations to meet contrast standards for accessibility.
- Applies a drop shadow on hover for the `SocialButton` component.

### Added
- Adds light and dark colors for Shopify.

## [5.42.0] - 2020-07-21
### Added
- Add default Tooltip message when no social network found for an organization in the orgSwitcher.

### Fixed
- Fix styles when only one social network is displayed in the Tooltip in the orgSwitcher.

## [5.41.6] - 2020-06-29
- Fix: add support for `'linkedin'` network type in org switcher popout.

## [5.41.5] - 2020-06-22
- Add icons: Add, Organic, PercentageDown, PercentageUp, Promoted

## [5.41.4] - 2020-06-22
- Remove unused `onClick` prop from `NavBarMenu`.

## [5.41.3] - 2020-06-22
- Allow `PropType.node` for `SidebarListItem`'s' `badges`.

## [5.41.1] - 2020-06-16
- Hotfix: ensure AppShell/NavBar updates when new `orgSwitcher` prop passed in.

## [5.41.0] - 2020-06-15
- Add org switcher support to AppShell / NavBar

## [5.40.0] - 2020-06-15
- Add support for impersonation

## [5.38.0] - 2020-06-12
- Add new icons
- Remove Reply and add Engage
- Remove lodash

## [5.37.3] - 2020-06-01
- Allow select to reset even if searching is interrupted

## [5.37.2] - 2020-05-21
- add flexibility for height and width in custom icons for Select

## [5.37.1] - 2020-05-07
- Improve accessibility of buttons, split buttons and select elements

## [5.36.0] - 2020-05-04
- add id and required props for Input component to match the htmlFor from label for a11y

## [5.35.0] - 2020-05-04
- add a hidden skip to main content link in the navbar

## [5.34.6] - 2020-04-21
- add flex-shrink in select for when text overflows

## [5.34.5] - 2020-04-13
- aligns items in select

## [5.34.4] - 2020-04-13
- adds modal and carousel animations

## [5.34.3] - 2020-04-07
- allow clicks on Links inside of modal

## [5.34.2] - 2020-04-07
- Allow NavBar to re-render if the contents of "products" prop changes.

## [5.34.1] - 2020-04-06
- Fix tests.

## [5.34.0] - 2020-04-06
- Adds 'featureFlips' parameter in AppShell.

## [5.33.3] - 2020-04-06
- moves the close button on the modal closer

## [5.33.2] - 2020-04-03
- darkens the modal overlay background

## [5.33.1] - 2020-04-03
### Fixed
- moves close button closer to the modal content
- focuses the modal after open so that ESC works right away
- removes buttons and nav in the carousel if there's only 1 item
- adds click anywhere outside the modal to close for modals with closeButton
- adds opacity option to tooltip

## [5.33.0] - 2020-03-30
### Fixed
- Fixed AppShell bug, not clicking on help items

## [5.32.0] - 2020-03-25
### Fixed
- Extends Modal component with width, noBackground and closeButton props

## [5.31.0] - 2020-03-25
### Fixed
- Fixed AppShell after 5.30.0 fix to close popup when selecting an item in the menu

## [5.30.0] - 2020-03-25
### Fixed
- Fixed toggle for Select component when Select uses Custom Button.

## [5.29.0] - 2020-03-19
### Added
- New icons - Carousel, InstagramComment, InstagramLike, Movie

## [5.28.0] - 2020-03-16
### Added
- Carousel component.

## [5.27.0] - 2020-03-03
### Added
- Link component.
- Deprecation warning for Link Button.

## [5.26.0] - 2020-02-24
### Fixed
- *red*, *blueLighter*, *green* and *redLight* color codes.

### Added
- *pinkLighter*, *blueLight* and *redDark* to the list of colors.
- possibility to add color prop *blue* and *grayDark* to Text.

## [5.25.0] - 2020-02-18
### Added
- *Calendar* icon

## [5.24.1] - 2020-02-10
### Fixed
- renames customHTML to customLabel for tooltips

## [5.24.0] - 2020-02-06
### Added
- optional customHTML for tooltips

## [5.23.1] - 2020-02-03
### Added
- *Flash* icon.

### Fixed
- Fixed the icon generation script (`npm run gen:icons`).

### Updated
- *badge* proptype is now a string.

## [5.23.0] - 2020-01-23
### Added
- *badgeIcon* and *fallbackUrl* prop to the SidebarListItem component.

### Updated
- *badge* proptype is now a string.

## [5.21.0] - 2019-12-11
### Added
- Added `maxLength` & `onKeyUp` props to the Input component
- Added a position absolute for the Tooltip component, updated @reach/Tooltip version to 0.6.2

## [5.20.0] - 2019-12-11
### Updated
- Now passing isOpen state to customButton in Selects to use in outside apps

## [5.19.0] - 2019-12-09
### Fixed
- Fixed the icon generation script (`npm run gen:icons`) to work with some of the SVGs we're getting back from the Figma API.

### Updated
- Added the result of generating latest Icons/* based on changes to the Figma.

## [5.18.1-beta.bd7ed5d] - 2019-12-05
### Fixed
- Added a position absolute for the Tooltip component, updated @reach/Tooltip version to 0.6.2

## [5.18.0] - 2019-11-26
### Fixed
- Added the ability to display the icon at the end of buttons, using iconEnd attribute

## [5.17.3] - 2019-11-06
### Fixed
- Switches around the margin and padding in Select Item so it works across browsers


## [5.17.1] - 2019-11-06
### Fixed
- Adds selected and disabled as fields to check for rerendering the Select dropdown

## [5.17.0] - 2019-10-31
### No change from 5.13.0
- This version was a result of attempting to publish 5.13.0 multiple times due to an error in the terminal. Each attempt successfully published and incremented the version.

## [5.16.0] - 2019-10-31
### No change from 5.13.0
- This version was a result of attempting to publish 5.13.0 multiple times due to an error in the terminal. Each attempt successfully published and incremented the version.

## [5.15.0] - 2019-10-31
### No change from 5.13.0
- This version was a result of attempting to publish 5.13.0 multiple times due to an error in the terminal. Each attempt successfully published and incremented the version.

## [5.14.0] - 2019-10-31
### No change from 5.13.0
- This version was a result of attempting to publish 5.13.0 multiple times due to an error in the terminal. Each attempt successfully published and incremented the version.

## [5.13.0] - 2019-10-31
### Added
- Added DollarIcon from Figma

## [5.12.2] - 2019-10-29
### Fixed
- Fix `ref` forwarding for Input. (The prop names weren't matching.)

## [5.12.1] - 2019-10-29
### Fixed
- Fix `prefix` position on Input component that also has a label.

## [5.12.0] - 2019-10-29
### Added
- Added `prefix` prop to Input component.

## [5.11.0] - 2019-10-25
### Added
- Adding Loader component

## [5.10.0] - 2019-10-24
### Added
- Adding OpenNewIcon from figma

## [5.7.0] - 2019-10-15
### Added
- Adding support for a Custom child Select to Button with dropdown.

## [5.4.0] - 2019-09-27
### Added
- Adding `extraLarge` size prop to Icon, to handle 32x32 icons.

## [5.2.4] - 2019-09-05
### Added
- Allow conditional rendering of the Modal component's primary action (button) if an *action* prop is provided.

## [5.2.3] - 2019-08-12

## [5.2.2] - 2019-08-12
### Added
- Adding *dismissible* prop to modal, to handle autoclosing on primary action.

## [5.2.0] - 2019-07-30
### Added
- Social Button component.

## [5.1.0] - 2019-07-25
### Added
- Progress Bar component.

## [5.0.0] - 2019-07-24
### Dependencies
- Upgrade styled-components from 3.4.10 to 4.3.2

## [4.0.0] - 2019-07-24
### Added
- Color prop *white*, *gray* and *red* to all Text Components, except *span* and *help*.

### Removed
- Possibility to add any color string to the *label*.

