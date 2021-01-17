import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Avatar from './Avatar';

Enzyme.configure({ adapter: new Adapter() });

describe('Avatar component', () => {
    test('renders', () => {
        const wrapper = shallow(<Avatar avatar="no-image.png" />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});
