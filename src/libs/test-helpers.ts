export const setReadOnlyProperty = <
    O extends Record<string, any>,
    K extends keyof O,
    V
>(object: O, property: K, value: V) => {
    Object.defineProperty(object, property, {
        value,
        configurable: true,
    });
}