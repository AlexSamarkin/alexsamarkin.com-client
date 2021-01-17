import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Preloader from './Preloader';

Enzyme.configure({ adapter: new Adapter() });

describe('Preloader component', () => {
    test('renders', () => {
        const wrapper = shallow(<Preloader />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});
