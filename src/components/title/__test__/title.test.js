import React from 'react';
import ReactDom from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Title from '../title-component';

afterEach(cleanup);

it("render whitout crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<Title title='' />, div);
});

it("renders title correctly", () => {
    const {getByTestId} = render(<Title title='test' />);
    expect(getByTestId('title')).toHaveTextContent('test');
});

it("matches title snapshot", () => {
    const tree = renderer.create(<Title title='test' />).toJSON();
    expect(tree).toMatchSnapshot();
});