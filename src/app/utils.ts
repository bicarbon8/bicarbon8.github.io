import { Theme } from "./theme";

const pkgname = require("../../package.json").name;

type AppData = {
    theme: Theme;
};

export module utils {
    export var shuffle = (array: Array<any>) => {
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

    export var getData = <K extends keyof AppData, V extends AppData[K]>(key: K, defaultVal?: V): V => {
        try {
            const strData = localStorage.getItem(pkgname);
            if (strData) {
                const data: AppData = JSON.parse(strData);
                return data[key] as V ?? defaultVal;
            }
        } catch(e) {
            return defaultVal;
        }
    }

    export var setData = <K extends keyof AppData, V extends AppData[K]>(key: K, val: V): void => {
        let data: AppData;
        try {
            const strData = localStorage.getItem(pkgname);
            if (strData) {
                data = JSON.parse(strData);
            } else {
                data = {theme: null};
            }
        } catch(e) {
            data = {theme: null};
        }
        data[key] = val;
        localStorage.setItem(pkgname, JSON.stringify(data));
    }
}