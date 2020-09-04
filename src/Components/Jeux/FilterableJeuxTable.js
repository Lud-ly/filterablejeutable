/**
 * @author LUDO
 * Licence Lud-ly2020
 * FilterableJeuxTable.js react
 */
import React ,{Component} from 'react';
import SearchCompo from './SearchCompo';
import JeuxTable from './JeuxTable';




class FilterableJeuxTable extends Component{
    constructor(props){
        super(props);
        console.log("liste des jeux" ,props.jeux)
        this.state = {
            filterText:'',
            ps3Only:true,
            ps4Only:true,
            neoOnly:true
        }
        this.handleFiltertextChange = this.handleFiltertextChange.bind(this); 
        this.handlePs3InStockChange = this.handlePs3InStockChange.bind(this);
        this.handlePs4InStockChange = this.handlePs4InStockChange.bind(this);
        this.handleNeoInStockChange = this.handleNeoInStockChange.bind(this);
    }
    handleFiltertextChange(e){
        console.log("parent" ,e);
        this.setState({filterText:e})
    }
    handlePs3InStockChange(e){
        console.log("parent" ,e);
        this.setState({ps3Only:e})
       
    }
    handlePs4InStockChange(e){
        console.log("parent" ,e);
        this.setState({ps4Only:e})
    }
    handleNeoInStockChange(e){
        console.log("parent" ,e);
        this.setState({neoOnly:e})
    }
    
    render(){
        return(
            <div style={{"border":"solid 3px black"}}>MY FILTER GAME TABLE

                <SearchCompo 
                  filterText={this.state.filterText}
                  handleFiltertextChange={this.handleFiltertextChange}
                  handlePs3InStockChange={this.handlePs3InStockChange}
                  ps3Only={this.state.ps3Only}
                  handlePs4InStockChange={this.handlePs4InStockChange}
                  ps4Only={this.state.ps4Only}
                  handleNeoInStockChange={this.handleNeoInStockChange}
                  neoOnly={this.state.neoOnly}
                 />

                <JeuxTable 
                  jeux={this.props.jeux}  
                  jeux1={this.props.jeux1}
                  jeux2={this.props.jeux2}   
                  filterText={this.state.filterText}
                  ps3Only={this.state.ps3Only}
                  ps4Only={this.state.ps4Only}
                  neoOnly={this.state.neoOnly}
                />
               
               
              
                 
                
            </div>
        )
    }
   
}
export default FilterableJeuxTable;

 