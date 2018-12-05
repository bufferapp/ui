import React from 'react';
import style from 'styled-components';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import LinkCard from '../shared/LinkCard';
import Heading from '../shared/Heading';

const LinkWrapper = style.div`
    width: 100%;
    display: grid;
    grid-template-columns: calc(50% - 8px) calc(50% - 8px);
    grid-template-rows: auto;
    justify-content: center;
    padding: 0px;
    margin: 24px 0px;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    background: #ffffff;
`;

export default class Document extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          title: 'Getting Started',
          href: '/#Button',
        },
        {
          title: 'Getting Started',
          href: '#',
        },
      ],
    };
  }

  render() {
    const DocHeading = ({ children, ...props }) => (
      <Heading {...props} />
    );

    const { links } = this.state;
    const { page, component } = this.props;
    return [
      <Markdown options={{
        overrides: {
          h1: {
            component: DocHeading,
            props: {
              text: page.name,
            },
          },
        },
      }}
      >
        {component}
      </Markdown>,
      <LinkWrapper>
        {links.map(link => <LinkCard title={link.title} href={link.href} />)}
      </LinkWrapper>,
    ];
  }
}

Document.propTypes = {
  page: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
    },
  ).isRequired,
};
