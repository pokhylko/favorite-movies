import React from 'react';

export const getTouchEventData = (
  event:
  | TouchEvent
  | MouseEvent
  | React.TouchEvent<HTMLElement>
  | React.MouseEvent<HTMLElement>,
) => ('changedTouches' in event ? event.changedTouches[0] : event);
