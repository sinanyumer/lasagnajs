import React from "react";
import { useSnapshot } from "./hooks";
import { TStoreItem } from "./types";
import { WindowX } from "./WindowX";

const Container = () => {
    const {windows}: any = useSnapshot(WindowX);

    return (
        <div>
            {windows.map((window: TStoreItem) => (
                <div key={window.id}>
                    {window.component}
                </div>
            ))}
        </div>
    )
}

export {Container};