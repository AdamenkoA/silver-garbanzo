import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home";
import history from "./history";
import Button from "@material-ui/core/Button";
import {Link} from "@material-ui/core";

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
                    <Route component={() => <div> Error 404. The requested resource is not found. Return on
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                                history.push('/Home');
                            }}
                        >
                            Home Page
                        </Link>
                    </div>}/>
                </Switch>
            </Router>
        );
    }
}
