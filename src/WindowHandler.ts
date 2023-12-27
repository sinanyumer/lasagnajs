import { TWindowHandler, TStoreWindow, TStore, TSubscriberItem } from "./types";

let store: TStore = {
  windows: []
};

let subscribers: Set<TSubscriberItem> = new Set();

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

    subscribers.forEach((callback: TSubscriberItem) => callback());
  },
  close (id) {
    const filteredWindows = store.windows.filter((window: TStoreWindow) => window.id !== id);

    store = {
      ...store,
      windows: filteredWindows
    };

    subscribers.forEach((callback: TSubscriberItem) => callback());
  },
  getSnapshot () {
    return store;
  },
  subscribe (callback: TSubscriberItem) {
    subscribers.add(callback);

    return () => subscribers.delete(callback);
  },
};

export {WindowHandler};