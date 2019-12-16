// Test away!
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Controls from './Controls';

test('control render', () => {
    expect(render(<Controls/>)).toMatchSnapShot();
});

test ('unlock gate', () => {
    const toggleLockMock = jest.fn();
const {getByText} = render(<Controls toggleLocked={toggleLockMock} locked={true}/>)
})