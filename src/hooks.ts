import { useContext, useSyncExternalStore } from "react";
import { WindowContext } from "./context"
import { TWindowX } from "./types";

export function useWindow() {
    const context = useContext(WindowContext);

    if (context === undefined) {
        throw new Error("useWindowItem must be used within a WindowProvider");
    }
  
    return context;
}
  

export function useSnapshot(WindowX: TWindowX) {
    const snapshot = useSyncExternalStore(
        WindowX.subscribe.bind(WindowX),
        WindowX.getSnapshot.bind(WindowX),
    );
  
    return snapshot;
}