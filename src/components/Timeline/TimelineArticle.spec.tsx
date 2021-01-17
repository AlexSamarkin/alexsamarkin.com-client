import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TimelineArticle, { TimelineArticleProps } from './TimelineArticle';

Enzyme.configure({ adapter: new Adapter() });

const mockedProps: TimelineArticleProps = {
    title: 'test',
    description: 'test desc',
    yearStart: 2020,
    yearEnd: 2021,
};

describe('TimelineArticleProps component', () => {
    test('renders', () => {
        const wrapper = shallow(<TimelineArticle {...mockedProps} />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});
