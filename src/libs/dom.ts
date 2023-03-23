import {MouseEvent, TouchEvent} from 'react'

export const getTouchEventData = (
    event:
        | TouchEvent
        | MouseEvent
        | TouchEvent<HTMLElement>
        | MouseEvent<HTMLElement>,
) => ('changedTouches' in event ? event.changedTouches[0] : event);
