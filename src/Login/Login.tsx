import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

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
    }),
);

interface IProps {
    classes: any;

    onChange(name: string, value: string): void;
}

interface IState {
    validationData: {
        name: string,
        password: string
    };
}

class LoginComponent extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {};

    public state: IState = {
        validationData: {
            name: "",
            password: ""
        }
    };
    public increase = () => {
        const data: object = this.state.validationData;
    };

    handleLoginInput = (event: React.ChangeEvent<{ value: string }>) => {
        const result = {
            name: event.target.value,
            password: this.state.validationData.password
        }
        this.setState({validationData: result});
    };

    handlePasswordInput = (event: React.ChangeEvent<{ value: string }>) => {
        const result = {
            name:  this.state.validationData.name,
            password:event.target.value
        }
        this.setState({validationData: result});
    };

    public render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {onChange, ...htmlProps} = this.props;
        return (
            <form className={this.props.classes} noValidate autoComplete="off">
                <Paper className={this.props.classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs zeroMinWidth>
                            <TextField
                                required
                                id="outlined-required"
                                label="Login"
                                defaultValue=""
                                variant="outlined"
                                onChange={this.handleLoginInput}
                            />
                        </Grid>
                    </Grid>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs>
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="outlined"
                                onChange={this.handlePasswordInput}
                            />
                        </Grid>
                    </Grid>

                    <Grid container wrap="nowrap">
                        <Grid item xs>
                            <Button onClick={this.increase} variant="contained" color="primary"
                                    disableElevation>
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        );
    }
}

export default function Login() {
    const classes = useStyles();
    return (
        <LoginComponent classes={classes}/>
    );
}
