import * as React from 'react';
import { render } from '@testing-library/react';
import NavDate from '../NavDate';

beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2022, 1, 1));
});

afterAll(() => {
    jest.useRealTimers();
});

describe('<NavDate />', () => {
    it('should render correctly', () => {
        
        const { container } = render(
            <NavDate />
        );

        expect(container).toMatchSnapshot();
    });
});
