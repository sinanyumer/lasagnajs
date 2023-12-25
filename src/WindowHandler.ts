import { TWindowHandler, TStore, TSubscribeItem, TStoreWindow } from "./types";

let store: TStore = {
  windows: [],
  options: {
    usePortal: true
  }
};
let subscribers: Set<TSubscribeItem> = new Set();

const WindowHandler: TWindowHandler = {
  open (payload) {
    const isUnique = !(store.windows.some((item: TStoreWindow) => item.id === payload.id));
        
    if (isUnique) {
      store = {
        ...store,
        windows: [
          ...store.windows,
          {
            ...payload,
            onClose: () => this.close(payload.id)
          }
        ]
      };
    }

    subscribers.forEach((callback: TSubscribeItem) => callback());
  },
  close (id) {
    const filteredWindows = store.windows.filter((window: TStoreWindow) => window.id !== id);

    store = {
      ...store,
      windows: filteredWindows
    };

    subscribers.forEach((callback: TSubscribeItem) => callback());
  },
  getSnapshot () {
    return store;
  },
  subscribe (callback: TSubscribeItem) {
    subscribers.add(callback);
    return () => subscribers.delete(callback);
  },
};


export {WindowHandler};