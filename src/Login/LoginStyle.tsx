import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const LoginStyle = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            overflow: 'hidden',
            padding: theme.spacing(0, 3),
            margin: 200,
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        paper: {
            maxWidth: 300,
            margin: `${theme.spacing(1)}px auto`,
            padding: theme.spacing(2),
        },
        button:{
            maxWidth: 300,
            margin: `${theme.spacing(1)}px auto`,
            padding: theme.spacing(1)
        }
    })
);
