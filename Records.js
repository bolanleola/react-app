
import React, {useState, useEffect} from 'react'

function Records(){
    const [student, setStudent]= useState({
        loading: false,
        student: null,

    });
    const url="https://api.hatchways.io/assessment/students";
    const apiGet = ()=>{
        fetch(url)
        .then((response) => response.json())
        .then((json) =>{
            console.log(json);
            setStudent(json);
        });
    };

    useEffect(() =>{
        setStudent({loading: true});
        apiGet();
    }, []);

    return (
        <div>
            <button onClick={apiGet}>Get Data</button>
            <pre>{JSON.stringify(student, null, 2)}</pre>

           
        </div>
    
    )
}

export default Records
