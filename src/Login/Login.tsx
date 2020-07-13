import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputComponent from './InputComponent'
import {LoginStyle} from './LoginStyle'
import history from "../Server/history";
import {ButtonGroup} from "@material-ui/core";

const useStyles = LoginStyle;

interface IProps {
    classes: any;

    onChange(name: string, value: string): void;
}

interface IState {

    Login: string,
    Password: string,
    ShowAdditionalField: boolean

}

/**
 * Login form
 */
class LoginComponent extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {};

    public state: IState = {
        Login: "",
        Password: "",
        ShowAdditionalField: false
    };

    /**
     *
     */
    signInClick = () => {
        if (this.state.Login === "" || this.state.Password === "") {
            window.alert("Login or password is empty");
        } else if (this.state.Login === "admin" && this.state.Password === "12345") {
            history.push('/Home');
        } else {
            window.alert("Wrong login or password");
        }
    };

    signUpClick = () => {
        this.setState({ShowAdditionalField: !this.state.ShowAdditionalField});
    };

    onChangeInput = (event: React.ChangeEvent<{ name: string, value: string }>) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value} as any);
    };


    public render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {onChange, ...htmlProps} = this.props;
        return (
            <form className={this.props.classes} noValidate autoComplete="off">
                <Paper className={this.props.classes.paper}>
                    <InputComponent onChange={this.onChangeInput} label={"Login"} type={"text"}/>
                    <InputComponent onChange={this.onChangeInput} label={"Password"}
                                    type={"password"}/>
                    {this.state.ShowAdditionalField && <InputComponent onChange={() => {
                    }} label={"Email"} type={"text"}/>}
                    <Grid container justify="center" spacing={2}>

                        <ButtonGroup disableElevation variant="contained" color="primary">
                            <Button className={this.props.classes.button}
                                    size="medium"
                                    onClick={this.signInClick}
                                    variant="contained"
                                    color="inherit"
                                    disableElevation>
                                Sign in
                            </Button>
                            <Button className={this.props.classes.button}
                                    size="small"
                                    onClick={this.signUpClick}
                                    variant="outlined"
                                    color="inherit"
                                    disableElevation>
                                Sign up
                            </Button>
                        </ButtonGroup>

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
