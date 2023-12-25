import { createPortal } from "react-dom";

const ReactPortal = ({children}: any) => {
    const domNode = document.body;

    if (!domNode) {
        throw new Error("Cannot find document.body");
    }
    
    return createPortal(children, domNode);

}

export default ReactPortal;