import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputComponent from './InputComponent'
import {LoginStyle} from './LoginStyle'
import history from "../Server/history";

const useStyles = LoginStyle;

interface IProps {
    classes: any;

    onChange(name: string, value: string): void;
}

interface IState {

    name: string,
    password: string

}

/**
 * Login form
 */
class LoginComponent extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {};

    public state: IState = {
        name: "",
        password: ""
    };

    /**
     *
     */
    loginClick = () => {
        if (this.state.name === "" || this.state.password === "") {
            window.alert("Login or password is empty");
        } else if (this.state.name === "admin" && this.state.password === "12345") {
            history.push('/Home');
        } else {
            window.alert("Wrong login or password");
        }
    };

    handleLoginInput = (event: React.ChangeEvent<{ value: string }>) => {
        this.setState({name: event.target.value});
    };

    handlePasswordInput = (event: React.ChangeEvent<{ value: string }>) => {
        this.setState({password: event.target.value});
    };

    public render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {onChange, ...htmlProps} = this.props;
        return (
            <form className={this.props.classes} noValidate autoComplete="off">
                <Paper className={this.props.classes.paper}>
                    <InputComponent onChange={this.handleLoginInput} label={"Login"} type={"text"}/>
                    <InputComponent onChange={this.handlePasswordInput} label={"Password"}
                                    type={"password"}/>
                    <Grid container wrap="nowrap">
                        <Grid item xs>
                            <Button className={this.props.classes.login_button} onClick={this.loginClick}
                                    variant="contained" color="primary"
                                    disableElevation>
                                Sign in
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
