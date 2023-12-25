import { ReactNode } from "react";

export type TStoreOptions = {
    usePortal: boolean
}

export type TStore = {
    windows: Array<TStoreWindow>,
    options: TStoreOptions
}

export type TStoreWindow = {
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

export type TWindowSnapshot = {
    windows: TStore
}