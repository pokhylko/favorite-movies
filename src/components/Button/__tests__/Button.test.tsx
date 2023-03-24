import {fireEvent, render} from '@testing-library/react';

import {Button} from '../Button';

describe('Button component', () => {
    it('should render correctly with default props', () => {
        const onClick = jest.fn();
        const {getByText} = render(<Button onClick={onClick}>Click me</Button>);
        const buttonEl = getByText('Click me');

        expect(buttonEl).toBeInTheDocument();
        expect(buttonEl).toHaveClass('button--primary');
    });

    it('should handle click events', () => {
        const onClick = jest.fn();
        const {getByText} = render(<Button onClick={onClick}>Click me</Button>);
        const buttonEl = getByText('Click me');

        fireEvent.click(buttonEl);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
