import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

test('toggles input type when show/hid password is clicked', ()=> {
    const wrapper = shallow(<PasswordInput htmlId={"test"} name={"name"} onChange={()=>{}} value={""}/>)

    //Password input should have password type initially
    expect(wrapper.find({type: 'password'})).toHaveLength(1)
    expect(wrapper.find({type:'text'})).toHaveLength(0)
})
