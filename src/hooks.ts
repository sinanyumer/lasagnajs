import { useContext, useSyncExternalStore } from "react";
import { WindowContext } from "./context"
import { WindowHandler } from "./WindowHandler";
import { TWindowSnapshot } from "./types";

export function useWindowContext() {
    const context = useContext(WindowContext);

    if (context === undefined) {
        throw new Error("useWindowContext must be used within a WindowProvider");
    }
  
    return context;
}
  

export function useWindowSnapshot() {
    const snapshot = useSyncExternalStore(
        WindowHandler.subscribe.bind(WindowHandler),
        WindowHandler.getSnapshot.bind(WindowHandler),
    );
  
    return snapshot as any;
}