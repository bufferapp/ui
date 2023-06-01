import React from 'react';
import Carousel from '@bufferapp/ui/Carousel';
export default function ExampleCarousel() {
    return (React.createElement(Carousel, { width: "400px" },
        React.createElement("img", { src: "https://buffer-analyze.s3.amazonaws.com/images/modal-pro-bg.png", alt: "slide 1", width: "400" }),
        React.createElement("img", { src: "https://buffer-analyze.s3.amazonaws.com/images/modal-pro-bg.png", alt: "slide 2", width: "400" }),
        React.createElement("img", { src: "https://buffer-analyze.s3.amazonaws.com/images/modal-pro-bg.png", alt: "slide 3", width: "400" })));
}
//# sourceMappingURL=Carousel.js.map