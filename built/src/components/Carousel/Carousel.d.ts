import React from 'react';
declare class Carousel extends React.Component {
    state: {
        left: number;
        currentSlideIndex: number;
    };
    verifyLastItem: (lengthOfChildren: any, widthOfEachItem: any) => boolean;
    goToSlide: (index: any) => void;
    render(): React.JSX.Element;
}
export default Carousel;
//# sourceMappingURL=Carousel.d.ts.map