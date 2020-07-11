import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home";
import history from "./history";

interface IListPages {
    path: string,
    component: any,
    key: string
}


interface IListProps {
}

interface IListState {
    pages: Array<IListPages>;
}

/**
 * Routes provider for the application routes
 */
export default class Pages extends React.Component<IListProps, IListState> {
    constructor(props: IListProps) {
        super(props);
        history.push('/Login');
        this.state = {
            pages: [
                {
                    path: '/Login',
                    component: Login,
                    key: 'LoginPage'
                },
                {
                    path: '/Home',
                    component: Home,
                    key: 'HomePage'
                }
            ]
        }
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    {this.state.pages.map(route => {
                        return <Route key={route.key} exact path={route.path} component={route.component}/>
                    })}
                </Switch>
            </Router>
        );
    }
}
