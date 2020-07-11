import React from "react";
import {Link} from 'react-router-dom';

interface IListItems {
    name: string,
    key: number
}

interface IListProps {

}

interface IListState {
    items: Array<IListItems>;
}

/**
 * List of item in home page
 */
export default class Home extends React.Component<IListProps, IListState> {
    constructor(props: IListProps) {
        super(props);
        this.state = {
            items: [
                {
                    name: 'phone',
                    key: 1
                },
                {
                    name: 'cup',
                    key: 2
                },
                {
                    name: 'book',
                    key: 3
                },
                {
                    name: 'keyboard',
                    key: 4
                }
            ]
        }
    }

    render() {
        return (
            <ul className="list-group">
                {this.state.items.map(item => {
                    return <li className="list-group-item" key={item.key}>
                        <Link to={`/${item.name}`}>{item.name}</Link>
                    </li>
                })}
            </ul>
        );
    }
}
