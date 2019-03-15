export const swapKeyValue = (object: any) => {
    return Object.keys(object).reduce((acc: any, key: string) => {
        const value = object[key];
        acc[value] = key;
        return acc;
    }, {});
}