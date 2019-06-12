import React from 'react';
import CrossSell from '@bufferapp/ui/CrossSell';

/** CrossSell Example */
export default function ExampleCrossSell() {
  const replyMock = {
    title: 'Provide amazing customer service on social media',
    subtitle:
      'Resolve customer questions and engage your fans at the speed of social.',
    cards: [
      {
        image: 'http://placekitten.com/259/167',
        alt: 'Alt text 1',
        title: 'Single Team Inbox',
        description:
          'Direct messages and comments on your posts and ads are gathered into one team inbox to streamline your processes.',
      },
      {
        image: 'http://placekitten.com/259/167',
        alt: 'Alt text 2',
        title: 'Tagging and Organization',
        description:
          'Conversations can be sorted into various categories to help you respond to the urgent and important ones first.',
      },
      {
        image: 'http://placekitten.com/259/167',
        alt: 'Alt text 3',
        title: 'Automated Workflows',
        description:
          'Rules let you automatically tag or assign conversations based on specific criteria and improve your team efficiency.',
      },
    ],
    button: {
      label: 'Start a Free 14-Day Trial',
      url: ''
    },
    priceTagline: 'NO CREDIT CARD REQUIRED',
  }
  return <CrossSell texts={replyMock} />;
}
