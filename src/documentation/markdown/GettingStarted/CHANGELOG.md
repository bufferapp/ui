# Changelog

## [5.75.8]
- Select: Set `hideOnSearch` property to true on items to hide them during search

## [5.75.7] - 2021-09-27

### Fixed
- Search: Revert `resetOnBlur` prop to `clearSearchOnBlur` as renaming an existing prop is technically a breaking change

## [5.75.6] - 2021-09-22

### Fixed
- Styled-Components: Added namespacing on the Babel build process to prevent style collisions on micro frontends setups.
- Styled-Components: Added SC_ATTR in the production build process to prevent style collisions on micro frontends setups.
- Styled-Components: moved styled-components from devDependencies to dependencies in package.json

## [5.75.5] - 2021-09-22

### Fixed
- Styled-Components: Added displayName on the Babel build process to prevent style collisions on micro frontends setups.

## [5.75.2] - 2021-09-22

### Fixed
- Select: Bug that doesn't allow clicking on filtered options because Search will always clear on blur
- Select: Does not filter menu options when 'clearSearchOnBlur' is false and menu is re-opened with saved search value

### Added
- Select: Clear Search input value on blur using 'clearSearchOnBlur' prop ie when the Select menu is closed
- Search: Reset search value on focus with 'resetOnFocus' prop 

## [5.75.1] - 2021-09-14

### Fixed
- Select Component: Search field onBlur prevents getDerivedStateFromProps from running
- Select Component: Set selectedItems to items prop in getDerivedStateFromProps

### Added
- Select example with a Select All option

## [5.75.0] - 2021-08-31
- Add icon: Save

## [5.74.0] - 2021-08-25
- Add icon: Apple Music
- Add icon: Hamburger
- Add icon: Patreon
- Add icon: SMS
- Add icon: Snapchat
- Add icon: Spotify
- Add icon: TikTok
- Add icon: Twitch

## [5.73.0] - 2021-08-17
- displays Icons in grid for easier scrolling ✨

## [5.72.0] - 2021-08-16

- New tag property for MenuItem in DropDownMenu component

## [5.71.0] - 2021-08-03

- Add icon: Appearance
- Add icon: Layout

## [5.70.1] - 2021-08-03

### Fixed

- Adjust Notice width.

## [5.70.0] - 2021-08-02

- Add icon: AddMedia
- Add icon: ButtonLink
- Add icon: Heading
- Add icon: Subheading

## [5.69.4] - 2021-07-29

- Fix DropDownMenu Menu hover for Tag

## [5.69.3] - 2021-07-28

- Fix SimpleModal focus on mount

## [5.69.2] - 2021-07-27

- Add icon: Star

## [5.69.1] - 2021-07-27

- Fix :hover text color for Tag component

## [5.69.0] - 2021-07-27

- Add new Tag component

## [5.68.3] - 2021-07-27

- Added Canva, Pin and Title Icon
- Added Add Icon example

## [5.68.2] - 2021-07-19

- Fix Segmented Control component padding

## [5.68.0] - 2021-07-13

- Create new Segment control component

## [5.66.0] - 2021-06-10

- add new colors

## [5.65.0] - 2021-05-05

- Add title to icons, for better accessibility.

## [5.64.0] - 2021-04-14

- Add new 'Building' icon.

## [5.63.1] - 2021-03-17

- Adjust styles to improve acessibility and consistency in inputs and textareas.
- Add _className_ to SidebarListItem.

## [5.63.0] - 2021-03-10

- Changed the `color` prop to a `colors` prop on `items` passed into the `DropDownMenu` component. (#292)

## [5.62.3] - 2021-03-10

- add z-index to the simple modal close button

## [5.62.2] - 2021-03-09

- Make the `loading` prop for the `Button` transient ([#284](https://github.com/bufferapp/ui/pull/284))

## [5.62.0] - 2021-03-09

- Move some `dependencies` into `devDependencies` (https://github.com/bufferapp/ui/commit/df5d8e7c250a0533792452b3501dce0a77a61efe)

## [5.61.0] - 2021-03-09

- Add optional `color` prop to `items` passed into the `DropDownMenu` component.

## [5.60.1] - 2021-03-04

- fix icon script
- generate new icons: Coupon, Card and Spam
- remove padding in Simple Modal
- fix Switch propType for id: change from bool to string

## [5.59.0] - 2021-03-01

- Add new simple modal. The other modal will be updated to use this scaffolding in the future

## [5.58.4] - 2021-02-11

- Add new 'Giveaway' icon.

## [5.58.3] - 2021-02-10

- Removes guides and pattern reference content. This has now been moved to our internal Design Wiki in Notion.

## [5.58.2] - 2021-01-26

- Merges #271 (@hijuliancode) to fix border bug in disabled `Button`

## [5.58.1] - 2021-01-26

- fixes the publish script reference from 'master' to 'main'

## [5.58.0] - 2021-01-20

- Extends Carousel to navigate to the right only and optionally hide indicator buttons

## [5.57.0] - 2021-01-04

- Adds [States component](https://www.notion.so/buffer/WIP-States-7508ca11ed5946f8b8c67f2947ade44a)

## [5.56.1] - 2020-12-09

- Adds a disabled menu option for the dropdown menu items.

## [5.56.0] - 2020-12-07

- Improves order of search results returned from select input.
- Adds _black_ to the list of colors.

## [5.55.0] - 2020-12-01

- Fixes Banner component bug in Publish.

## [5.54.1] - 2020-12-01

- Adds shopify icon to Avatar component.
- Adds optional type to the Modal action button.

## [5.54.0] - 2020-11-26

- Adds fontWeight prop to Link: accepts fontWeightMedium (500) and fontWeightBold (700).

## [5.53.1] - 2020-11-17

- Adds validation that Modal component actions and secondary actions have a label and callback present.

## [5.53.0] - 2020-11-17

- Adds new icons - Audience, Day, Frequency and Post

## [5.52.0] - 2020-11-02

- Adds a 'danger' style variation for the Button component to convey destructive actions.

## [5.51.0] - 2020-10-27

- Added deprecation notice for `AppShell` (use https://github.com/bufferapp/app-shell instead).

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

- _red_, _blueLighter_, _green_ and _redLight_ color codes.

### Added

- _pinkLighter_, _blueLight_ and _redDark_ to the list of colors.
- possibility to add color prop _blue_ and _grayDark_ to Text.

## [5.25.0] - 2020-02-18

### Added

- _Calendar_ icon

## [5.24.1] - 2020-02-10

### Fixed

- renames customHTML to customLabel for tooltips

## [5.24.0] - 2020-02-06

### Added

- optional customHTML for tooltips

## [5.23.1] - 2020-02-03

### Added

- _Flash_ icon.

### Fixed

- Fixed the icon generation script (`npm run gen:icons`).

### Updated

- _badge_ proptype is now a string.

## [5.23.0] - 2020-01-23

### Added

- _badgeIcon_ and _fallbackUrl_ prop to the SidebarListItem component.

### Updated

- _badge_ proptype is now a string.

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

- Added the result of generating latest Icons/\* based on changes to the Figma.

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

- Allow conditional rendering of the Modal component's primary action (button) if an _action_ prop is provided.

## [5.2.3] - 2019-08-12

## [5.2.2] - 2019-08-12

### Added

- Adding _dismissible_ prop to modal, to handle autoclosing on primary action.

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

- Color prop _white_, _gray_ and _red_ to all Text Components, except _span_ and _help_.

### Removed

- Possibility to add any color string to the _label_.
