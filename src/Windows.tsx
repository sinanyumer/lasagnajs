import React from "react";
import { WindowContext } from "./context";
import { TStoreWindow } from "./types";

const Windows = ({windows}: {windows: Array<TStoreWindow>}) => {
    if (windows?.length) {
        return (
            <div className='window-container'>
                {windows.map((window: TStoreWindow) => (
                    <WindowContext.Provider value={window as any} key={window.id}>
                        <div className='window' onClick={(e) => {
                                if (e.target === e.currentTarget) {
                                    window.onClose();
                                }
                            }}
                        >
                            {window.component}
                        </div>
                    </WindowContext.Provider>
                ))}
            </div>
        )
    }

    return null;
}

export default Windows;