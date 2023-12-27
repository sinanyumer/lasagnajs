import { ReactNode } from "react";

export type TStore = {
    windows: Array<TStoreWindow>
}

export type TStoreWindow = {
    id: string,
    component: ReactNode,
    onClose: () => void
};

export type TSubscriberItem = () => void;

export type TWindowHandler = {
    open: (payload: {
        id: string,
        component: ReactNode
    }) => void,
    close: (id: string) => void,
    getSnapshot: () => void,
    subscribe: (callback: () => void) => any
}

export type TWindowContainer = {
    config: {
        usePortal: boolean
    }
}