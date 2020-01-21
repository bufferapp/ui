# Link components
This file explains how we handle links in the UI components library.


## Goal

We want to take the most out of semantic markup, so we can build accessible products for our users and create cleaner code by using elements that meet our engineering needs.


## Implementation

### Context
As stated in our Guide, *"Link buttons are most often used for secondary actions that may navigate a user away from the core app experience. For example, you might place a link button in app that takes a user to an external documentation / FAQ page or 3rd party website for more details."* Cases of misapplication: navigation within the app and for primary actions.

There are two HTML elements that might meet the needs: the anchor element `<a>` and the button element `<button>`. Even though they can be used for similar purposes, they respond to different keyboard events and are interpreted by screen readers differently. In general, the navigation to a real URL should be made using the anchor and its href element.


In the past, our library treats all links as Link Buttons:

```jsx

<Button type="link" onClick={} />

```

Most frequently we want to send users to an external link. We are using more complex logic in an `Onclick` function of a button, when the same could be easily achieved with an `<a href>`.

### Proposal
I propose the creation of a new and separated Link component, using an anchor element:

```jsx

<Link href="" />

const Link = styled.a`
	//link styles
`;

```

The styles from the current Link Button can only be partially copied, as anchors have default styles that need to be overridden.

### Transition

My proposal for v1 is to implement the Link Component and keep the support for Link Button (with a warning of deprecation coming soon). After the transition period is over, on v2 I suggest us one of two paths: 
- if all the features with links benefit from the Link Component, we would just remove the Link Button component.
- are there places where we still need the Link Button? We add a color prop to the Text Button component, and use `<Button type="text" color="blue"` instead. We remove the Link Button component, decreasing the confusion around terminology.

**Note:** As we build features that require a link, if we end up in a situation when the most appropriated element is not an anchor we should ask ourselves: Are we facing a case of misapplication? Would a Text Button be more appropriate? Should the guide for links be updated?