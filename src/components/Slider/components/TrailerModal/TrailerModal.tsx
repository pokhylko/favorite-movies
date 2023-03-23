import {FC} from 'react';

import {Modal} from '../../../Modal';

interface Props {
    item: {
        id: string;
    };
}

export const TrailerModal: FC<Props> = ({item}) => (
    <Modal id={`modal_${item.id}`}>
        <iframe width="100%" height="500px" title="trailer" />
    </Modal>
);
