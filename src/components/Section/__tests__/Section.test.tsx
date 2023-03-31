import {render} from '@testing-library/react';

import {Section} from '../Section';

describe('Section component', () => {
    it('renders with default props', () => {
        const {getByText} = render(<Section>Hello, world!</Section>);

        const container = getByText('Hello, world!');

        expect(container).toBeInTheDocument();
    });
});
