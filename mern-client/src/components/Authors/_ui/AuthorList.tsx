import React, {ReactElement, useEffect, useState} from 'react';
import {AuthorModel} from "../models/author.model";
import Author from "./Author";
import authorUtilsInstance from "../bl/author-utils";
import axios from 'axios';
import {IgiMernClientConsts} from "../../../services/consts/IgiMernClientConsts";
import MyStyledButton from "../../common/MyStyledButton";
import useStyles from "./AuthorListStyles";
import Modal from "../../model-in-portal/Modal";


interface IUserListProps {
    // prop1: string
}

const AuthorList: React.FC<IUserListProps> = (props: IUserListProps): ReactElement => {
    const classes = useStyles();

    const [allAuthors, setAllAuthors] = useState<AuthorModel[] | null>(null);

    const BASE_AUTHORS_URL = `${IgiMernClientConsts.BASE_MERN_SERVER_URL}/authors`;

    const [isOpen, setIsOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');

    const getAllAuthorsFromServer = () => {
        axios.get(BASE_AUTHORS_URL)
            .then((result: any) => {
                const authors = result.data.map((cur: any) => new AuthorModel({...cur}));
                setAllAuthors(authors);
                showDialogForShortTime(`Author List Was Successfully Retrieved`)
            }).catch((error: any) => {
            console.log(error);
            showDialogForShortTime(`Retrieve error!`);
        })
    }

    useEffect(() => {
            if (!allAuthors) {
                getAllAuthorsFromServer();
            }
    }, [allAuthors]);


    const createNotifyContainer = () => {
        const notificationId = "test";
        const element = document.createElement("div");
        element.setAttribute("id", notificationId);
        element.className = classes.notifierClass;
        document.body.appendChild(element);
        setTimeout(() => {
            const element = document.getElementById(notificationId);
            if (element) {
                element.remove()
            }
        }, 1000)
    }

    const addDummyAuthor = () => {
        const newAuthor = authorUtilsInstance.createFakedAuthor();
        axios.post(`${IgiMernClientConsts.BASE_MERN_SERVER_URL}/authors`, newAuthor)
            .then((response) => {
                const authorFromData: any = response.data.author as AuthorModel;
                const author = new AuthorModel({...authorFromData});
                setAllAuthors(((prevState: AuthorModel[] | null) => prevState ? prevState.concat(author) : [author]));
            })
            .catch(
                (error: any) => console.log(error)
            );
    }


    const onGetAllAuthorsClicked = () => {
        getAllAuthorsFromServer();
    }

    const onDeleteAllAuthorsClicked = (): void => {
        axios.delete(BASE_AUTHORS_URL)
            .then((result: any) => {setAllAuthors([])})
            .catch((error: any) => console.log(error));
    }

    const showDialogForShortTime = (message: string): void => {
        setIsOpen(true);
        setDialogMessage(message);

        setTimeout(() => {
            setIsOpen(false);
        }, 1200);
    }

    const onOpenDialogClicked = (): void => {
        showDialogForShortTime("booom boom");
    }

    const onCloseDialog = (): void => {
        setIsOpen(false);
    }

    const onAuthorClicked = (id: string): void => {
        axios.delete(`${BASE_AUTHORS_URL}/${id}`)
            .then((response: any) => {
            showDialogForShortTime(`${response.data.message}`);
            getAllAuthorsFromServer();
        })
            .catch((error: any) => {
                console.log(error)
                showDialogForShortTime(String(error));
            });
    }

    return <>
        <div className={classes.root}>

            <div className={classes.contentWrapper}>
                <strong>Total Authors: {allAuthors?.length} </strong>
                <div>
                    <MyStyledButton onClick={createNotifyContainer}>Create Dummy Container</MyStyledButton>
                    <MyStyledButton onClick={addDummyAuthor}>Add Dummy Author</MyStyledButton>
                    <MyStyledButton onClick={onGetAllAuthorsClicked}>Get All Authors</MyStyledButton>
                    <MyStyledButton onClick={onDeleteAllAuthorsClicked}>Delete All Authors</MyStyledButton>
                    <MyStyledButton onClick={onOpenDialogClicked}>Open Dialog</MyStyledButton>
                </div>
                <div className={classes.authorListWrapper}>
                {
                    allAuthors ?
                    allAuthors.map((cur: AuthorModel) => {
                        return <Author key={cur.id}
                                       author={cur}
                                       onAuthorClicked={onAuthorClicked}
                        />
                    }) : null
                }
                </div>
                <Modal isOpen={isOpen} onClose={onCloseDialog}>
                    <p>{dialogMessage}</p>
                </Modal>
            </div>

        </div>
    </>
};

export default AuthorList;