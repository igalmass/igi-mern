import {createUseStyles} from "react-jss";

const useStyles =
    createUseStyles({
            root: {
                border: '1px solid yellow',
                paddingLeft: 0,
                '& .sub-style-root': {
                    // margin: theme.spacing(1),
                },
            },
            contentWrapper: {
                display: "flex",
                flexDirection: "column",
                alignItems: 'center'
            },
            authorListWrapper: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                // flexDirection: 'column',
                flexWrap: "wrap"
            },
            notifierClass: {
                height: 200,
                width: 200,
                backgroundColor: 'red',
                top: '16px',
                right: '16px',
                position: 'fixed',
                zIndex: 100,

                // left: '50%'
            }
        }
    );

export default useStyles;