
export function removeRandomItem<T>(values: T[]): T{
    const index = getIndex(values);

    return values.splice(index, 1)[0];
}

export function pickRandomItem<T>(values: T[]): T{
    const index = getIndex(values);

    return values[index];
}

function getIndex(values: any[]): number{
    return Math.floor(Math.random() * values.length);
}
