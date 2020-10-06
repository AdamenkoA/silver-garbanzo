import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {WelcomeText} from "../Home/TemplateText";
import {TbsStyle} from "./TbsStyle";
import {Toolbar} from "@material-ui/core";
import history from "../Server/history";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = TbsStyle

interface IState {
    Caption: string
}

interface IProps {
    classes: any;
    window?: () => Window;
    buttonCaption: string;
}

class UpperTbs extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {};

    public state: IState = {
        Caption: WelcomeText
    };
    loginClick = () => {
        history.push('/Login');
    };


    public render() {
        return (
            <div className={this.props.classes}>
                <div className={this.props.classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" className={this.props.classes.title}>
                                {this.state.Caption}
                            </Typography>
                            <Button color="inherit" onClick={this.loginClick}>{this.props.buttonCaption}</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        );
    }
}

export default function Tbs({caption, ...props}: { caption: string, prop?: any }) {
    const buttonCaption = caption;
    const classes = useStyles();
    return (
        <UpperTbs classes={classes} buttonCaption={buttonCaption}/>
    );
}
