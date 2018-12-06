#Typography

## Font Family
Our design system uses the Roboto font family from Google. 

Roboto provides:

- A clear hierarchy of font weights

- Broad character support for latin and non-latin languages and encodings

- Includes additional sister fonts, like Roboto Mono. which can be paired nicely for the display of numbers, charts, code, etc. 

## Google Fonts Usage
You can include the Roboto font, and the needed font weights, directly from the Google Fonts CDN by including the code snippet below between the <head> tags  your app / website:

```
<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
```

Alternatively, if you plan to use both Roboto and Roboto Mono, you can include both with this single code snippet:
```
<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,500,700" rel="stylesheet">
```

## Font Weights

Three distinct font weights are used throughout our design system:

| Font Weight Name        | Font Weight Value           | CSS Property  |
| ------------- |:-------------:| -----:|
| Regular      | 400 | `font-weight: 400` |
| Medium      | 500      |  `font-weight: 500 |
| Bold | 700      |    `font-weight: 700` |


## Usage
Font weights should be used intentionally to convey importance and context with Bold (500) used only sparingly:


<InfoCard title='Do:' color='green'>
- Use a medium font weight to put emphasis on buttons, form inputs and labels. 

- Use a medium font weight for help text and other text at 12px in size to improve legibility. 

- Use a bold font weight for headings.

- Use a bold font weight to highlight important or critical information: "Are you sure you want to permanently delete your account?".

- When in doubt, avoid using a bold font weight. 
</InfoCard>


<InfoCard title='Don't:' color='red'>
- Mix font weights in headings, buttons, form inputs and labels.

- Mix more than two font weights in any given body of paragraph text.

- Change font weights between component states, i.e. hover, or active states.
</InfoCard>


## Font Sizes
By and large, text should fall within these common font sizes:

32px, 24px or 18px – these sizes are reserved exclusively for titles and headings.

14px – typically used for sub-section headings, buttons, form inputs, labels and paragraph text.

12px – reserved exclusively for help text, captions and other meta information.

### Extra Large Heading

![Bug Heading](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LFNym8ScnaWKWBQFWTw%2F-LF_HiBjfkjWR-ToO8rp%2F-LF_bUbyoXzlJIjpIBmd%2Fheading-xl%402x.png?alt=media&token=c2745a1e-fab1-4d6c-9892-81b3e43ea929)

```
line-height: 44px;
font-size: 32px;
font-weight: 700;
```

### Large Heading

![Bug Heading](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LFNym8ScnaWKWBQFWTw%2F-LF_HiBjfkjWR-ToO8rp%2F-LF_bhIkhgXe1u3fEhxx%2Fheading-lg%402x.png?alt=media&token=7ed845e2-dce8-4a2c-a0ef-401d82f1f60c)

```
line-height: 34px;
font-size: 24px;
font-weight: 700;
``` 


### Normal Heading

![Bug Heading](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LFNym8ScnaWKWBQFWTw%2F-LF_HiBjfkjWR-ToO8rp%2F-LF_bwcUWLb-FMqD4JFy%2Fheading-med%402x.png?alt=media&token=202e8dd6-08c0-4aa1-a87c-dd38e8d89f96)

```
line-height: 28px;
font-size: 24px;
font-weight: 500;
``` 

### Paragraph Text

![Bug Heading](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LFNym8ScnaWKWBQFWTw%2F-LF_HiBjfkjWR-ToO8rp%2F-LF_cPMP4L1-FqQxBLZ_%2Fparagraph%402x.png?alt=media&token=96919fc7-507a-4b31-8cb7-36d5375b980e)

```
line-height: 20px;
font-size: 14px;
font-weight: 400;
``` 


<InfoCard title='Do:' color='green'>
- Limit bodies of paragraph text to 50 to 75 characters per line. This is the optimal line length for readability. 
</InfoCard>


## Resources
- [Figma](https://www.figma.com/file/Zlx2ZAx6xxJwYtXUORQYb7TK/BDS-Typography?node-id=0%3A1)