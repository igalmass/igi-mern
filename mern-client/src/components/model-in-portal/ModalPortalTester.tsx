import React, {ReactElement, useState} from 'react';
import {createUseStyles} from "react-jss";
import Modal from "./Modal";

const useStyles =
    createUseStyles({
            otherContentStyle: {
                position: 'relative',
                zIndex: 2,
                backgroundColor: 'red',
                padding: '10px'
            },
            BUTTON_WRAPPER_STYLES: {
                position: 'relative',
                zIndex: 1
            }
        }
    );

interface IModalPortalTesterProps {
    // prop1: string
}


const ModalPortalTester: React.FC<IModalPortalTesterProps> = (props: IModalPortalTesterProps): ReactElement => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onClose = () => {
        setIsOpen(false)
    }

    // @ts-ignore
    return <>
        <div className={classes.BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
            <button onClick={() => setIsOpen(true)}>Open Model</button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <p>Fancy Modal</p>
            </Modal>
        </div>

        <div className={classes.otherContentStyle}>Other Content</div>
    </>
};

export default ModalPortalTester;