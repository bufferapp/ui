import React from 'react';
import styled from 'styled-components';
const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;
const Content = styled.div `
  flex: 1;
  box-sizing: border-box;
  padding: 0 4rem 0 0;
  font-family: 'Poppins', sans-serif;
  color: #14225e;
`;
const Illustration = styled.div `
  flex: 1;
  box-sizing: border-box;
  background: transparent url('./images/illustration.png') no-repeat center;
  background-size: contain;
`;
const Header = styled.div `
  line-height: 1.3em;
  font-weight: 700;
  font-size: 38px;
`;
const Places = styled.div `
  margin: 2rem 0 0;
`;
const Place = styled.a `
  cursor: pointer;
  display: block;
  padding: 0rem calc(2rem + 3px) 0.25rem 1.25rem;
  margin: 0 0 2rem;
  box-sizing: border-box;
  border: 5px solid #14225e;
  border-width: 0 0 0 5px;
  transition: all 75ms ease-in-out;
  text-decoration: none;
  color: #14225e;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    padding-right: 2rem;
    border-width: 0 0 0 8px;
  }
`;
const Title = styled.span `
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 0.5rem;
`;
const Description = styled.span `
  display: block;
  font-size: 16px;
  font-weight: 400;
`;
const Welcome = styled.div `
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  color: #231ef7;
  margin: 0 0 0.5rem;
`;
function Home() {
    return (React.createElement(Container, null,
        React.createElement(Content, null,
            React.createElement(Welcome, null, "Welcome"),
            React.createElement(Header, null,
                "Design drives us",
                React.createElement("br", null),
                "here at Buffer"),
            React.createElement(Places, null,
                React.createElement(Place, { href: "/#/Guides/guides" },
                    React.createElement(Title, null, "Guides"),
                    React.createElement(Description, null, "Not sure where to start? Check out our guides to implement these in your site")),
                React.createElement(Place, { href: "/#/Patterns/patterns" },
                    React.createElement(Title, null, "Patterns"),
                    React.createElement(Description, null, "Not a dark pattern in sight! Follow our comprehensive guides for great design")),
                React.createElement(Place, { href: "/#/ui/ui" },
                    React.createElement(Title, null, "Components"),
                    React.createElement(Description, null, "Understand how to use our components or even to contribute your own")))),
        React.createElement(Illustration, null)));
}
export default Home;
//# sourceMappingURL=Home.js.map