/**
 * @author LUDO
 * Licence Lud-ly2020
 * JeuxRow.js react
 */
import React ,{Component} from 'react';

class JeuxRow extends Component{
    constructor (props){
        super(props);
        console.log("le jeu",props.jeu)
        
    }
    
    render(){
        let name
        if(this.props.jeu.checked){
             name = this.props.jeu.name;
        }
        else{
             name = <span>{this.props.jeu.name}</span>;
        }
        return(
        
            <tr>
                <td>{name}</td>
                <td>{this.props.jeu.genre}</td>
                <td>{this.props.jeu.Année}</td>
                <td>{this.props.jeu.age}</td>
                <td>{this.props.jeu.console}</td>
            </tr>
        
        )
    }
   
}
export default JeuxRow;

 