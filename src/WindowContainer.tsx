import React from "react";
import { WindowContext } from "./context"
import { useWindowSnapshot } from "./hooks";
import { TStoreItem } from "./types";
import './styles.css';

const WindowContainer = () => {
    const {windows}: any = useWindowSnapshot();

    if (windows.length) {
        return (
            <div className='window-container'>
                {windows.map((window: TStoreItem) => (
                    <WindowContext.Provider value={window as any} key={window.id}>
                        <div className='window' onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                window.onClose();
                            }
                        }}>
                            {window.component}
                        </div>
                    </WindowContext.Provider>
                ))}
            </div>
        )
    }

    return null;
}

export {WindowContainer};