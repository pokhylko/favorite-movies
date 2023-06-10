import {render} from '@testing-library/react';

import {SectionTitle} from '../SectionTitle';

describe('SectionTitle component', () => {
    it('renders', () => {
        const {getByText} = render(<SectionTitle>Hello, world!</SectionTitle>);

        const title = getByText('Hello, world!');

        expect(title).toBeInTheDocument();
    });
});
