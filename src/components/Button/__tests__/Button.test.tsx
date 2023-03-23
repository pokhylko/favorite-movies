import {fireEvent, render} from '@testing-library/react';

import {Button} from '../Button';

describe('Button component', () => {
    it('should render correctly with default props', () => {
        const onClick = jest.fn();
        const {getByText} = render(<Button onClick={onClick}>Click me</Button>);
        const buttonElement = getByText('Click me');

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('button--primary');
    });

    it('should handle click events', () => {
        const onClick = jest.fn();
        const {getByText} = render(<Button onClick={onClick}>Click me</Button>);
        const buttonElement = getByText('Click me');

        fireEvent.click(buttonElement);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
