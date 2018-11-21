import React from 'react';
import Example from './Example';
import Props from './Props';
import style from 'styled-components';

const Wrapper = style.div`
    margin: 0px;
    padding: 0px;
    flex: 1 1 auto;
    min-width: 0px;
    display: flex;
    flex-direction: column;
    background: #fff;
    max-width: 100%;
    padding-bottom: 64px;
`;

const Container = style.div`
    flex: 1 1 auto;
    min-width: 0px;
    display: flex;
    position: relative;
`;

const Body = style.div`
    display: block;
    padding: 0px;
    flex: 1 1 auto;
    min-width: 0px;
    max-width: 750px;
    margin: 0px 88px;
`;

const Header = style.div`
    display: block;
    margin: 0px;
    padding: 0px;
    border-bottom: 1px solid #E6ECF1;
    margin-bottom: 32px;
`;

const Title = style.div`
    margin: 0px;
    padding: 40px 0px;
    flex: auto;
    display: flex;
`;

const Text = style.h2`
    display: block;
    margin: 0px;
    flex: 1 1 auto;
    border-left: 2px solid #E6ECF1;
    padding: 0 16px;
    border-left-color: #2E5DF8;
`;


const ComponentPage = ({component}) => {
    const {name, description, props, examples} = component;
    return (
        <Wrapper>
            <Container>
                <Body>
                <Header>
                    <Title>
                        <Text>{name}</Text>
                    </Title>
                </Header>
                <p>{description}</p>

                <h3>Example{examples.length > 1 && "s"}</h3>
                {
                    examples.length > 0 ?
                        examples.map(example => <Example key={example.code} example={example} componentName={name}/>) :
                        "No examples exist."
                }

                <h3> Props</h3>
                {
                    props ?
                        <Props props={props}/> :
                        "This component accepts no props."
                }
                </Body>
            </Container>
        </Wrapper>
    );
};

export default ComponentPage