// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component{
    state={showHideFirstName:false,showHideLastName:false}
    showHideFirstNameFunc=()=>{
        const {showHideFirstName}=this.state
        if(showHideFirstName===true){
            this.setState({showHideFirstName:false})
        }
        else{
            this.setState({showHideFirstName:true})
        }
    }
    showHideLastNameFunc=()=>{
        const {showHideLastName}=this.state
        if(showHideLastName===true){
            
            this.setState({showHideLastName:false})
        }
        else{
            this.setState({showHideLastName:true})
        }
    }
    render(){
        const {showHideFirstName,showHideLastName}=this.state
        return(
            <div className="show-hide-container">
                <h1 className="heading">Show/Hide</h1>
                <div>
                    <button className="show-hide-btn" type="button" onClick={this.showHideFirstNameFunc}>Show/Hide Firstname</button>
                    {showHideFirstName && (<div className="sub-container">
                    <p className="name">Joe</p>
                </div>
                )}
                    <button className="show-hide-btn" type="button" onClick={this.showHideLastNameFunc}>Show/Hide Lastname</button>
                    {showHideLastName && (<div className="sub-container">
                     <p className="name">Jonas</p>
                    </div>)}
                </div>
            </div>
        )
    }

}

export default ShowHide
