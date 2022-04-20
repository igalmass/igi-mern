import React, {ReactElement} from 'react';
import {createUseStyles} from "react-jss";
import {AuthorModel} from "../models/author.model";

const useStyles =
    createUseStyles({
            root: {
                border: '1px solid blue',
                paddingLeft: 0,
                '& .sub-style-root': {
                    // margin: theme.spacing(1),
                },
                borderRadius: 20,
                maxWidth: 400,
                margin: 10,
                background: 'lavender',
                minWidth: 400,
                boxShadow: '-7px -7px #888888',
                marginTop: 5,
                marginBottom: 20

            },
            contentWrapper: {
                padding: '10px 20px 10px 20px'

            }
        }
    );

interface IAuthorProps {
    author: AuthorModel,
    onAuthorClicked: (id: string) => void
}

const Author: React.FC<IAuthorProps> = (props: IAuthorProps): ReactElement => {
    const classes = useStyles();

    return <div className={classes.root} onClick={() => props.onAuthorClicked(props.author.id)}>
        <div className={classes.contentWrapper}>
            <p>id: {props.author.id}</p>
            <p>First Name: {props.author.firstName}</p>
            <p>Last Name: {props.author.lastName}</p>
        </div>
    </div>
};

export default Author;