import React from 'react';

import { Modal } from '../../../Modal';

export const TrailerModal = ({ item }) => (
  <Modal id={`modal_${item.id}`}>
    <iframe width="100%" height="500px" title="trailer"></iframe>
  </Modal>
);
