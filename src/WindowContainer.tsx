import React from "react";
import { useWindowSnapshot } from "./hooks";
import { TStore, TWindowContainer } from "./types";
import ReactPortal from "./ReactPortal";
import WindowContent from "./WindowContent";

import './styles.css';

const WindowContainer: React.FC<TWindowContainer> = ({
    config = {
        usePortal: false
    }
}) => {
    const {windows}: TStore = useWindowSnapshot();

    if (config.usePortal) {
        return (
            <ReactPortal>
                <WindowContent windows={windows} />
            </ReactPortal>
        )
    }

    return <WindowContent windows={windows} />
}

export {WindowContainer};