// import Windows from "./Windows"
import React from "react";
import { useWindowSnapshot } from "./hooks";
import { TStoreItem } from "./types";

const Container = (props: any) => {
    const windows: any = useWindowSnapshot(props.controller);

    return (
        <div>
            {windows.map((window: TStoreItem) => (
                <div>
                    {window.component}
                </div>
            ))}
        </div>
    )
}

export {Container};