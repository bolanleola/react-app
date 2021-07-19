import React from 'react'


export default class Display extends React.Component{
    state ={
        loading: true,
        person: null
    }


    async componentDidMount(){
        const url= "https://api.hatchways.io/assessment/students";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.students[0], loading: false});
        

    }
    render(){
        if(this.state.loading){
            return<div>loading!!</div>;
        }

        if(!this.state.person){
            return<div>Didn't get a student's info</div>

        }

        return(
            <div>
                <img src={this.state.person.pic} alt="avatar"/>
                <div><h1>{this.state.person.firstName}</h1></div>
                <div>{this.state.person.email}</div>
                <div>{this.state.person.company}</div>
                <div>{this.state.person.skill}</div>
                <div>{this.state.person.city}</div>
            </div>
        );
            
        
    }

}

