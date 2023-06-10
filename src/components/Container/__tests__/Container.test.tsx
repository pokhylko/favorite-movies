import {render} from '@testing-library/react';

import {Container} from '../Container';

describe('Container component', () => {
    it('renders', () => {
        const {getByText} = render(<Container>Hello, world!</Container>);

        const container = getByText('Hello, world!');

        expect(container).toBeInTheDocument();
    });
});
