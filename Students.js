import React from 'react'

class Students extends React.Component{
    componentDidMount(){
        fetch('https://api.hatchways.io/assessment/students')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors
    
    }

    render(){
        return <h1>Students Biodata</h1>
    }
}


    
        
    

export default Students


