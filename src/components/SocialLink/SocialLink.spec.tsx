import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SocialLink from './SocialLink';

Enzyme.configure({ adapter: new Adapter() });

describe('SocialLink component', () => {
    test('renders', () => {
        const wrapper = shallow(<SocialLink link={'https://social.link'} icon={'icon.svg'} />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});
