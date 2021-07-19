
import React, { Component } from 'react';


class Assess extends Component{
    constructor(props){
        super(props);
        this.state = {
            students: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch('https://api.hatchways.io/assessment/students')
        .then(res => res.json())
        .then(json =>{
                this.setState({
                    isLoaded: true,
                    students: json,
                })
        });
    }

    render(){
        const { isLoaded, students} = this.state;
        if(!isLoaded){
            return<div>Loading..</div>
        }

        else{
            return(
                <div className ='App'>
                    <h1>Data has been loaded</h1>
                    <ul>
                        
                        {[students].map(student =>(
                            <li key= {student.id}>
                                 <img src={student.pic} alt="avatar"/>
                                 <h1>{student.name}</h1>

                            </li>
                        ))};
                    </ul>
                </div>
            );
        }

        

        

    }
}

export default Assess