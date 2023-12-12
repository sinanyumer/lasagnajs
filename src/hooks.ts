import { useContext, useSyncExternalStore } from "react";
import { WindowContext } from "./context"

export function useWindowItem() {
    const context = useContext(WindowContext);

    if (context === undefined) {
        throw new Error("useWindowItem must be used within a WindowProvider");
    }
  
    return context;
}
  

export function useWindowSnapshot(controller: any) {
    const snapshot = useSyncExternalStore(
        controller.subscribe.bind(controller),
        controller.getSnapshot.bind(controller),
    );
  
    return snapshot;
}