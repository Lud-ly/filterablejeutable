/**
 * @author LUDO
 * Licence Lud-ly2020
 * SearchCompo.js react
 */
import React ,{Component} from 'react';

class SearchCompo extends Component{
    constructor (props){
        super(props);
        //console.log("filterText",this.props.filterText)
       // console.log("ps3Only dans search compo",this.props.ps3Only)
       // console.log("ps4Only dans search compo",this.props.ps4Only)
       // console.log("neoOnly dans search compo",this.props.neoOnly)
        this.handleFiltertextChange = this.handleFiltertextChange.bind(this);
        this.handlePs3InStockChange = this.handlePs3InStockChange.bind(this);
        this.handlePs4InStockChange = this.handlePs4InStockChange.bind(this);
        this.handleNeoInStockChange = this.handleNeoInStockChange.bind(this);   
        
    }
    /*fonction fleché sans le bind 
    handleFiltertext = (e) =>{
        console.log(e.target.value);
    }
    */
   handleFiltertextChange(e){
    //console.log(e.target.value);
    this.props.handleFiltertextChange(e.target.value);
       }
   handlePs3InStockChange(e){
   // console.log(e.target.checked);
    this.props.handlePs3InStockChange(e.target.checked);
   }
   handlePs4InStockChange(e){
    // console.log(e.target.checked);
     this.props.handlePs4InStockChange(e.target.checked);
   }
 handleNeoInStockChange(e){
    // console.log(e.target.checked);
     this.props.handleNeoInStockChange(e.target.checked);
 }
    render(){
        return(
            <div>

              <input type="text"  placeholder="Search"
              text= {this.props.filterText}
              onChange = {this.handleFiltertextChange}
              />

              <input type="checkbox" checked={this.props.ps3Only}
                    onChange = {this.handlePs3InStockChange}
               />
              ps3

              <input type="checkbox" checked={this.props.ps4Only}
                    onChange = {this.handlePs4InStockChange}
               />
            
              
               ps4
              <input type="checkbox" checked={this.props.neoOnly}
                    onChange = {this.handleNeoInStockChange}
               />
              
              Neo-Geo 
            </div>
            
        )
    }
   
}
export default SearchCompo;

 