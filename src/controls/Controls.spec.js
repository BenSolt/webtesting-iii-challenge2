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

const unlockBtn = getByText(/Unlock Gat/i)
fireEvent.click(unlockBtn);
expect(toggleLockMock).not.toHaveBeenCalled();
})

test ('lock gate', () => {
    const toggleunLockMock = jest.fn();
const {getByText} = render(<Controls toggleLocked={toggleunLockMock} locked={false}/>)

const lockBtn = getByText(/Lock Gat/i)
fireEvent.click(lockBtn);
expect(toggleLockMock).not.toHaveBeenCalled();
})