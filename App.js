import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Navbar from "./components/Navbar/navbar"
import Table from "./components/Table/table"

const person=[
    {
        id:'002',
        first:'shamil',
        last:'tp',
        handle:'@shamiltp',
        role:'main'
    },
    {
        id:'016',
        first:'muhammed',
        last:'fasil',
        handle:'@muhammedfasil',
        role:'top'
    },
    {
        id:'073',
        first:'muhammed',
        last:'yaseen',
        handle:'@muhammedyaseen',
        role:'top'
    },
]
const personList = person
const Main = ()=>{
    const [user,setUser] =useState(personList)
    return <>
        <Navbar/>
        
        <div className="container">
        <div className="row">
            <div className="col-10 offset-1">
                <table className="table table-bordered table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((prsn)=>{
                            return <Table data={prsn} key={prsn.id}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        <div className="row">
        <div className="col-10 offset-1">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                  Filter
                </button>
                <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={()=>setUser(personList.filter((prsn)=>prsn.role))}>ALL</button>
                  <button className="dropdown-item" onClick={()=>setUser(personList.filter((prsn)=>prsn.role == 'main'))}>MAIN ONLY</button>
                  <button className="dropdown-item" onClick={()=>setUser(personList.filter((prsn)=>prsn.role == 'top'))}>TOP ONLY</button>
                </div>
              </div>
        </div>
    </div>

    </div>

    </>
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<Main/>);