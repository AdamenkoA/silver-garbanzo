import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
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
        button: {
            marginLeft: `${theme.spacing(2)}px auto`,
        }
    })
);

export function LoginStyle() {
    return useStyles();
}
