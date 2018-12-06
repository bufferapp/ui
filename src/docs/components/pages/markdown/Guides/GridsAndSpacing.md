# Grids and Spacing

## Overview
Our design system is based on an overarching 8px grid. This means that by and large, component dimensions, spacing between components, and padding within components will be divisible by 8 pixels (and no less than 8 pixels). 

Note: There are a few notable exceptions to this rule – see below. 

## Common dimensions
Component dimensions and spacing between components will generally use one of these common values (all multiples of 8):

```
8px, 16px, 24px, 32px, 40px, 48px, 56px, 64px, etc
```

## Exceptions

### Sub-component padding and margins

There are a few instances in which the sub-component elements' padding and margins will not fall on an 8px grid. 

Buttons are a specific example of this in which the vertical padding of the button label does not fall on the grid – instead the label is vertically centered within the button component itself:

![Grids](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LFNym8ScnaWKWBQFWTw%2F-LJyUTfgi9aZnPg370Hj%2F-LJyhLr2SrLz94trBf7O%2Fgrid-exception--button%402x.png?alt=media&token=3a112fc1-7cce-4bc5-9777-593360d3859d)

### Component dimensions and dynamic content
Components that contain dynamic content, such as text or other elements that differ between each component instance, may have one dimension (width or height) that does not fall on an 8px grid. 

For example, a button's width may vary between instances and not fall on an 8px grid:

![Spacing](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LFNym8ScnaWKWBQFWTw%2F-LJyUTfgi9aZnPg370Hj%2F-LJyqX5j7dzNTY-0lUNA%2Fgrid-exception--button-width%402x.png?alt=media&token=220738cc-919c-43bc-92c5-1e1966babe34)

Or a queue item item in which it's height may vary between instances (but width remains consistent and on the grid):

![Spacing](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LFNym8ScnaWKWBQFWTw%2F-LJyUTfgi9aZnPg370Hj%2F-LJytLOIM5SaEj5giAWW%2Fgrid-exception--queue-item%402x.png?alt=media&token=3516b7e8-201e-49ef-9201-e8f9a7b4d503)

## Examples

![Spacing Example](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LFNym8ScnaWKWBQFWTw%2F-LG1ws2y1S8wyJxmy3M6%2F-LG1wtyPfXNlRhnr3sLb%2Fgrid%402x.png?alt=media&token=2d126f27-e70a-4b6b-9485-cbf7acb51e64)

![Spacing Example](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LFNym8ScnaWKWBQFWTw%2F-LJp3rdk0RK3RD29DeWm%2F-LJp45NSFsFsyQNzwber%2Fgrid-card-form-example%402x.png?alt=media&token=9c8079af-5746-4b4d-a95a-d5f0c5b101c2)

![Spacing Example](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LFNym8ScnaWKWBQFWTw%2F-LJtX7U3iyyHjyXwOiLf%2F-LJtX9xAKcUw029sIcKi%2Fgrid-button-example%402x.png?alt=media&token=ceda18e9-cc87-4927-9d27-b881defa9a6f)

