import { ReactNode } from "react";

export type TStore = {
    windows: Array<TStoreItem>
}

export type TStoreItem = {
    id: string,
    component: ReactNode,
    onClose: () => void
};

export type TSubscribeItem = () => void;

export type TOpenParams = {
    id: string,
    component: ReactNode
}

export type TWindowHandler = {
    open: (payload: TOpenParams) => void,
    close: (id: string) => void,
    getSnapshot: () => void,
    subscribe: (callback: () => void) => any
}