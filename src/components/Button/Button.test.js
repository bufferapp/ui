import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('Button renders correctly', () => {
    const tree = renderer
        .create(<Button onClick={()=>{}} primary>Primary Button</Button>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});