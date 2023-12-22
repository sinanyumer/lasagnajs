import { TWindowHandler, TStoreItem, TStore, TSubscribeItem } from "./types";

let store: TStore = {
  windows: []
};
let subscribers: Set<TSubscribeItem> = new Set();

const WindowHandler: TWindowHandler = {
  open (payload) {
    const isUnique = !(store.windows.some((item: TStoreItem) => item.id === payload.id));
        
    if (isUnique) {
      store = {
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
    const filteredWindows = store.windows.filter((window: TStoreItem) => window.id !== id);

    store = {
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