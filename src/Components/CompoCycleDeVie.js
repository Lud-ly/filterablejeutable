/**
 * @author LUDO
 * Licence Lud-ly2020
 * Premier composant pure react
 */
import React ,{Component} from 'react';

class CompoCycleDeVie extends Component{
    constructor (props){
        super(props);
        console.log("je passe dans le constructor");
    }
    UNSAFE_componentWillMount(){
        console.log("Je passe dans le componentWillMount");
    }
    render(){
        console.log("Je passe dans le render");
        return(
            <div></div>
        )
    }
    UNSAFE_componentDidMount(){
        console.log("Je passe dans le componentDidMount");
    }
    UNSAFE_componentWillReceiveProps(){
        console.log("Je passe dans componentWillReceiveProps");
    }
    UNSAFE_shouldComponentUpdate(){
        console.log("Je passe dans shouldComponentUpdate");
    }
    UNSAFE_componentWillUpdate(){
        console.log("Je passe dans componentWillUpdate");
    }
    UNSAFE_componentDidUpdate(){
        console.log("Je passe dans componentDidUpdate");
    }
}
export default CompoCycleDeVie;

 