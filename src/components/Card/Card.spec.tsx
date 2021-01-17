import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card, { CardProps } from './Card';

Enzyme.configure({ adapter: new Adapter() });

const mockedProps: CardProps = {
    icon: 'icon.svg',
    title: 'test',
    children: <div>123</div>,
};

describe('Card component', () => {
    test('renders', () => {
        const wrapper = shallow(<Card {...mockedProps} />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});
