import React from 'react';
import style from 'styled-components';

const Wrapper = style.div`
    display: block;
    margin: 0px;
    padding: 0px;
`;

const Top = style.div`
    background: #fff;
    border-bottom: 1px solid #d4dadf;
    box-shadow: 0 1px 1px 0 rgba(116, 129, 141, 0.1);
    z-index: 20;
    display: flex;
    align-items: stretch;
    position: relative;
    flex: 0 80px;
    min-height: 80px;
    padding-left: 24px;
    padding-right: 24px;
`;

const Middle = style.div`
    max-width: 1400px;
    width: 100%;
    margin: 0px auto;
    display: flex;
    align-items: center;
    padding: 0;
    flex: auto;
`;


const Title = style.a`
    cursor: pointer;
    display: flex;
    text-decoration: none;
    align-items: center;
`;

const Logo = style.div`
    display: block;
    margin: 0px;
    padding: 0px;
`;

const Image = style.img`
    max-width: 100%;
    border-radius: 3px;
    overflow: hidden;
    width: 40px;
    height: 40px;
    font-size: 24px;
    line-height: 1.5;
    font-weight: 500;
`;


const TextWrapper = style.div`
    display: block;
    margin: 0px;
    padding: 0px;
    padding-left: 16px;
    color: #242A31;
`;


const Text = style.h1`
     font-size: 28px;
    line-height: 1.5;
    font-weight: 500;
`;


const Header = ({ title }) => {
	return (
        <Wrapper>
            <Top>
                <Middle>
                    <Title>
                        <Logo>
                            <Image src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LFNym8ScnaWKWBQFWTw%2Favatar.png?generation=1529427935328806&alt=media"/>
                        </Logo>
                        <TextWrapper>
                            <Text>{title}</Text>
                        </TextWrapper>
                    </Title>
                </Middle>
            </Top>
        </Wrapper>
		);
};

export default Header;