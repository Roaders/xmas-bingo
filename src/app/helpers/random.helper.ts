
export function removeRandomItem<T>(values: T[]): T{
    const index = Math.random() * values.length;

    return values.splice(index, 1)[0];
}
