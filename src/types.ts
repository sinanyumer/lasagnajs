import { ReactNode } from "react";

export type TStore = {
    windows: Array<TStoreItem & {onClose: (id: string) => void}>
}

export type TStoreItem = {
    id: string,
    component: ReactNode
};

export type TSubscribeItem = () => void;

export type TWindowHandler = {
    open: (payload: TStoreItem) => void,
    close: (id: string) => void,
    getSnapshot: () => void,
    subscribe: (callback: () => void) => any
}