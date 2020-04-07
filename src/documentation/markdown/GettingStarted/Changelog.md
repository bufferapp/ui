# Changelog

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

