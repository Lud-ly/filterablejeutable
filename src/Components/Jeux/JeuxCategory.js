/**
 * @author LUDO
 * Licence Lud-ly2020
 * Jeuxcategory.js react
 */
import React ,{Component} from 'react';

class Jeuxcategory extends Component{
    constructor (props){
        super(props);
        
    }
    
    render(){
        return(
           <tr>
               <th colSpan="2">
                  {this.props.category}
               </th>
           </tr> 
           
        )
    }
   
}
export default Jeuxcategory;

 