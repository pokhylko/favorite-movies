import { RefObject, useRef, useState } from 'react';

export function getRefValue<C>(ref: RefObject<C>) {
  return ref.current as C;
}

export function useStateRef<S>(
  defaultValue: S,
): [S, (value: S) => void, RefObject<S>] {
  const ref = useRef<S>(defaultValue);
  const [state, setState] = useState<S>(defaultValue);
  const setNewState = (value: S) => {
    setState(value);
    ref.current = value;
  };

  return [state, setNewState, ref];
}
