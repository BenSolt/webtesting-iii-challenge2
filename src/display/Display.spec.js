// Test away!

import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Display from './Display';

test('display render', () => {
    expect(render(<Display/>)).toMatchSnapshot();
});

test('use red-led if locked', () => {
    const {queryByText} = render(<Display locked={true}/>)
    const locked = queryByText(/locked/i);
    expect(locked).toHaveClass('red-led');
});
test('use green-led if locked', () => {
    const {queryByText} = render(<Display locked={false}/>)
    const unlocked = queryByText(/locked/i);
    expect(unlocked).toHaveClass('green-led');
});

