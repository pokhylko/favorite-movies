import {render} from '@testing-library/react';

import {Container} from '../Container';

describe('Container component', () => {
    it('renders without title', () => {
        const {getByText} = render(<Container>Hello, world!</Container>);

        const container = getByText('Hello, world!');

        expect(container).toBeInTheDocument();
    });

    it('renders with title', () => {
        const {getByText} = render(<Container title="Some title">Hello, world!</Container>);

        const container = getByText('Hello, world!');
        const title = getByText('Some title');

        expect(container).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });
});
