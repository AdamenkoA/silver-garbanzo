import React from "react";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import DeveloperBoard from '@material-ui/icons/DeveloperBoard';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {HomeStyle} from './HomeStyle'
import {useTheme} from '@material-ui/core/styles';
import {Lorem, WelcomeText} from "./TemplateText";
import SpacingGrid from "./Board/Board";
import EnhancedTable from "./Board/Table/BoardTable";
import Tbs from "../Components/Tbs";

const useStyles = HomeStyle;

interface IState {
    Caption: string,
    ShowBoard: boolean
}

interface IProps {
    classes: any;
    theme: any;
    window?: () => Window;
}

const leftPanel = [
    {
        name: 'Board',
        key: 'id_Board',
        board: true,
        icon: <DeveloperBoard/>
    },
    {
        name: 'Table',
        key: 'id_Sprint',
        board: false,
        icon: <AssignmentTurnedIn/>
    }
];

class ResponsiveDrawer extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {};

    public state: IState = {
        Caption: WelcomeText,
        ShowBoard: true
    };
    leftPanelClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, name: any, board: boolean) => {
        this.setState({Caption: name, ShowBoard: board})
    };
    drawer = (
        <div>
            <div className={this.props.classes.toolbar}/>
            <Divider/>
            <List>
                {leftPanel.map((item) => (
                    <ListItem button={true} key={item.key} onClick={(event) =>
                        this.leftPanelClick(event, item.name, item.board)}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
        </div>
    );
    caption = () => {
        return "Logout";
    }

    public render() {
        return (
            <div className={this.props.classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={this.props.classes.appBar}>
                    <Tbs caption={this.caption()}/>
                </AppBar>
                <Drawer
                    className={this.props.classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: this.props.classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <div className={this.props.classes.toolbar}/>
                    {this.drawer}
                </Drawer>
                <main className={this.props.classes.content}>
                    <div className={this.props.classes.toolbar}/>
                    {this.state.ShowBoard ? <SpacingGrid/> : <EnhancedTable/>}
                </main>
            </div>
        );
    }
}

export default function Home() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <ResponsiveDrawer classes={classes} theme={theme}/>
    );
}
