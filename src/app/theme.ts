function stringTuple<T extends [string] | string[]>(...data: T): T {
    return data;
}

export const ThemeValues = stringTuple('default', 'forest', 'glacier', 'watermelon', 'dark');
export type Theme = typeof ThemeValues[number];