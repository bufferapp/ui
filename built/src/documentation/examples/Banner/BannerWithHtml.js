import React from 'react';
import Banner from '@bufferapp/ui/Banner';
export default function ExampleBanner() {
    return (React.createElement(Banner, { themeColor: "orange", customHTML: {
            __html: "<b>You're on the Business trial.</b> Complete your billing details to make the transition smooth.",
        }, onCloseBanner: () => console.log('Banner closed!') }));
}
//# sourceMappingURL=BannerWithHtml.js.map