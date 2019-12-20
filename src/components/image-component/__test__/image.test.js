import React from 'react';
import ReactDom from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Image from '../image-component';

afterEach(cleanup);

it("render whitout crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<Image url='' />, div);
});

it("renders image correctly", () => {
    const {getByTestId} = render(<Image url='https://via.placeholder.com/600/92c952' />);
    expect(getByTestId('image')).toHaveProperty('src','https://via.placeholder.com/600/92c952' );
});

it("matches snapshot", () => {
    const tree = renderer.create(<Image url='' />).toJSON();
    expect(tree).toMatchSnapshot();
});