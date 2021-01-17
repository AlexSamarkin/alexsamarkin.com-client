import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Article from './Article';

Enzyme.configure({ adapter: new Adapter() });

describe('Article component', () => {
    test('renders', () => {
        const wrapper = shallow(
            <Article date={new Date()} thumb={'img.png'} title={'Test article'} slug={'test'} excerpt={'test'} />,
        );
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});
