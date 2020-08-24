import * as React from 'react'

interface IProps {
}

interface IState {
    hasError: boolean,
    error: any
    errorInfo: any
}

export default class Error extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error: any, errorInfo: any) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {

        if (this.state.hasError) {
            return <h1>{this.state.errorInfo}</h1>
        } else {
            return this.props.children;
        }
    }
}
