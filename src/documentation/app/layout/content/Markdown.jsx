import React from 'react';
import style from 'styled-components';
import PropTypes from 'prop-types';
import MarkdownToJsx from 'markdown-to-jsx';
import LinkCard from './components/LinkCard';
import Heading from './components/Heading';
import InfoCard from './components/InfoCard';
import LinkItem from './components/LinkItem';
import ColorCopy from './components/ColorCopy';

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

const Paragraph = style.p`
    font-size: 16px;
    line-height: 1.625;
    font-weight: 400;
    `;

const ColorRow = style.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 20px;
`;

const ColorColumn = style.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin-right: 10px;
    flex-grow: 1;
`;

const CodeBlock = style.pre`
    counter-reset: line 0;
    font-family: "Source Code Pro", Menlo, monospace;
    font-size: 85%;
    line-height: 1.7;
    tab-size: 4;
    background-color: rgb(245, 247, 249);
    overflow-x: auto;
    padding: 15px 20px;
    border-radius: 3px;
    margin: 15px 0;
`;

/** Component Used to show the Markdown file content and replace elements with our own custom shared component */
export default class Markdown extends React.Component {
  render() {
    const DocHeading = ({ children, ...props }) => (
      <Heading {...props} />
    );
    const { page, component, links } = this.props;

    return [
      <MarkdownToJsx options={{
        overrides: {
          h1: {
            component: DocHeading,
            props: {
              text: page.name,
            },
          },
          a: {
            component: LinkItem,
          },
          p: {
            component: Paragraph,
          },
          ColorRow,
          ColorColumn,
          ColorCopy,
          InfoCard,
          code: {
            component: CodeBlock,
          },
        },
      }}
      >
        {component}
      </MarkdownToJsx>,
      <LinkWrapper>
        {links[0] && links.map(link => <LinkCard name={link.name} id={link.id} />)}
      </LinkWrapper>,
    ];
  }
}

Markdown.propTypes = {
  /** Markdown page to display */
  page: PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
    },
  ).isRequired,
};
