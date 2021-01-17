import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer component', () => {
    test('renders', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});
