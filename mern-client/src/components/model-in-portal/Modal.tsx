import React from 'react';
import ReactDOM from "react-dom";
import useStyles from "./ModalStyles";

type IModalProps = {
    isOpen: boolean,
    onClose: () => void,
    children: JSX.Element
}

const Modal: React.FC<IModalProps> = (props: IModalProps) => {
    const classes = useStyles();

    if (!props.isOpen) return null;


    const element: any = document.getElementById('portal');
    const toRender = element ? element : <div>NOT FOUND</div>;

    return ReactDOM.createPortal(<>
        <div className={classes.OVERLAY}/>
        <div className={classes.MODAL_STYLES}>
            <button onClick={props.onClose}>Close Modal</button>
            {props.children}
        </div>
    </>, toRender);

};

export default Modal;

