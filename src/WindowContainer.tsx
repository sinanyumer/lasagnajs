import React from "react";
import { WindowContext } from "./context"
import { useWindowSnapshot } from "./hooks";
import { TStoreItem } from "./types";

const WindowContainer = () => {
    const {windows}: any = useWindowSnapshot();

    return (
        <div>
            {windows.map((window: TStoreItem) => (
                <WindowContext.Provider value={window as any} key={window.id}>
                    <div>
                        {window.component}
                    </div>
                </WindowContext.Provider>
            ))}
        </div>
    )
}

export {WindowContainer};