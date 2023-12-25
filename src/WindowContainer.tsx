import React from "react";
import { useWindowSnapshot } from "./hooks";
import { TStoreOptions, TStoreWindow } from "./types";
import ReactPortal from "./ReactPortal";
import WindowsList from "./Windows";

import './styles.css';

const WindowContainer = () => {
    const {windows, options}: {
        windows: Array<TStoreWindow>,
        options: TStoreOptions
    } = useWindowSnapshot();

    if (options.usePortal) {
        return (
            <ReactPortal>
                <WindowsList windows={windows} />
            </ReactPortal>
        )
    }

    return <WindowsList windows={windows} />
}

export {WindowContainer};