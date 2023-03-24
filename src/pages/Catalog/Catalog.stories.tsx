import {Meta} from "@storybook/react";
import {MemoryRouter, Route, Routes} from "react-router-dom";

import {Catalog} from "./Catalog";

export default {
    component: Catalog,
    decorators: [(Story) => (
        <MemoryRouter initialEntries={["/movies"]}>
            <Routes>
                <Route path="/:category" element={<Story/>}/>
            </Routes>
        </MemoryRouter>)],
} as Meta;

export const Default = () => <Catalog/>;
