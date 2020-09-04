/**
 * @author LUDO
 * Licence Lud-ly2020
 * Premier composant pure react
 */
import React from 'react';
import './PureCompo.css';

 export function PureCompo(){
    return(
        
        <div>
            <h1 className="pure-h1"> CEREBRAL-CLUB USERS</h1>
        </div>
    )
}
 export function PureCompoProps({label,age}){
    return(
        <div>
          <div  className="pureprops-h1">Old pictures Games<br/>{label}  {age} ans
              
          
          </div>
           
        </div>
    )
}
//export default PureCompo;
//export default PureCompoProps;