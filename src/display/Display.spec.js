// Test away!

import React from 'react';
import {render} from '@testing-library/react';

import Display from './Display';

test('display render', () => {
    expect(render(<Display/>)).toMatchSnapshot();
})

test('use red-led if locked', () => {
    const {queryByText} = render(<Display locked={true}/>)
    const locked = queryByText(/locked/i);
    epect(locked).toHaveClass('red-led');
});
test('use green-led if locked', () => {
    const {queryByText} = render(<Display locked={true}/>)
    const locked = queryByText(/locked/i);
    epect(locked).toHaveClass('red-led');
});

