import { ReactNode } from "react";

export type TStore = {
    windows: Array<TStoreItem>
}

export type TStoreItem = {
    id: string,
    component: ReactNode
};

export type TSubscribeItem = () => void;

export type TWindowX = {
    open: (payload: TStoreItem) => void,
    close: (id: string) => void,
    getSnapshot: () => void,
    subscribe: (callback: () => void) => any
}