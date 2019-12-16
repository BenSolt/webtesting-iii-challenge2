// Test away

import React from 'react';
import {render} from '@testing-library/react';

import Dashboard from './Dashboard';

test ('control render', () => {
    expect(render(<Dashboard/>)).toMatchSnapShot();
});