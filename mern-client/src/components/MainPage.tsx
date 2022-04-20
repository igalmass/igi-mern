import React, {ReactElement} from 'react';
import {createUseStyles} from 'react-jss';
import AuthorList from "./Authors/_ui/AuthorList";

const useStyles = createUseStyles({
            root: {
                border: '1px solid blue',
                paddingLeft: 0,
                '& .sub-style-root': {
                    // margin: theme.spacing(1),
                },
            }
        }
    );

interface IMainPageProps {
    // prop1: string
}

const MainPage: React.FC<IMainPageProps> = (props: IMainPageProps): ReactElement => {
    const classes = useStyles();

    return <div className={classes.root}>
        <p>Hello! I am MainPage Component!</p>
        <AuthorList/>
        {/*<p>props.prop1 = {props.prop1}</p>*/}
    </div>
};

export default MainPage;