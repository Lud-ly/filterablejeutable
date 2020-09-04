/**
 * @author LUDO
 * Licence Lud-ly2020
 * Premier composant pure react
 */
import React,{Component} from 'react';
import './StateCompo.css';

class StateCompo extends Component{
    constructor(props){ 
        super(props);
        console.log("label " + props.label);
        this.state = {nom : ''};
       // this.handleChange = this.handleChange.bind(this);
    }
   /* handleChange(e){
        console.log("Ca passe par ici");
        this.setState({nom : "le nouveau"});
    }*/
    handleChange = (e) =>{
        console.log("nouvelle value dans COMPO =>" + e.target.value)
        this.setState({nom : e.target.value});
        this.props.onInputChange(e.target.value);
    }


    render(){
        return(
        <div>
           <h3 className="state-h3">mon 1er Compo State pour {this.props.label}</h3>
           <input type="text" value={this.state.nom} onChange={this.handleChange}></input>
        </div>
        )
    }
}
export default StateCompo;