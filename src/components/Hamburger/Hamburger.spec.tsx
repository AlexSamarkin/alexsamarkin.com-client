import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hamburger from './Hamburger';

Enzyme.configure({ adapter: new Adapter() });

describe('Hamburger component', () => {
    test('renders', () => {
        const wrapper = shallow(<Hamburger isOpen={false} onClick={() => true} />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});
