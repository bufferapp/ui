# New Component Template

This directory is used by the the `new-component` package.json script to bootstrap work on a new component.

## Usage

```bash
$ yarn component:new
```

## Changing the template

The component template files are in `new-component-template/` and will be copied into the root of this package after running the `component:new` script. If the file already exists then the new content is appended. Feel free to make any tweaks or additions there. Any instances of `ComponentNamePlaceholder` in the template files, directory names, or in the source code will be replaced with the name the user chooses.

