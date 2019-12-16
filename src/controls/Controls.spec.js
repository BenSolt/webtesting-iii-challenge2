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

const lockBtn = getByText(/Lock Gate/i)
fireEvent.click(lockBtn);
expect(toggleunLockMock).not.toHaveBeenCalled();
})

test('open Gate', () => {
    const toggleOpenMock = jest.fn()
    const {getByText} = render(<Controls toggleClosed={toggleOpenMock} closed={true}/>)

    const openBtn = getByText(/open/i)
fireEvent.click(openBtn);
expect(toggleOpenMock).toHaveBeenCalled();
})

test('close Gate', () => {
    const toggleCloseMock = jest.fn()
    const {getByText} = render(<Controls toggleClosed={toggleCloseMock} closed={false}/>)

    const closeBtn = getByText(/close/i)
fireEvent.click(closeBtn);
expect(toggleCloseMock).toHaveBeenCalled();
})

test('disabled', () => {
    const disableMock = jest.fn();
    const {getByText} = render(<Controls locked={false}/>);
    expect(getByText(disableMock)).tobeDisabled();
})
