import { Component } from "react/cjs/react.production.min";
import ErrorMessage from "../errorMessage/ErrorMessage";


class ErrorBoundary extends Component{
    state = {
        error: false
    }


    componentDidCath(){
        this.setState({error: true})
    }

    render(){
        if(this.state.error){
            return <h2>{ErrorMessage}</h2>
        }

        return this.props.children
    }
}

export default ErrorBoundary