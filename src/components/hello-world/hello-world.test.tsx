import { render, screen } from '@testing-library/react';
import React from 'react';

import HelloWorld from './hello-world';

describe('Hello World', () => {
    it('should render the component with name', () => {
        render(<HelloWorld name={'Michelle'} />);
        expect(screen.getByRole('heading')).toHaveTextContent('Hello Michelle');
    });
});
