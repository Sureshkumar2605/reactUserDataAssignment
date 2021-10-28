import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const baseURL = " https://userdata-disp-on-cards.herokuapp.com/users";

function Getusers() {


    useEffect(() => {

        axios.get(baseURL).then((user) => {
            setUsers(user.data);
            console.log(user.data)
        })

    }, [])

    const [users, setUsers] = useState([])
    return (
        <div>

            <div className="container">

                {
                    users.map((user) => (
                        <div className="card w-75" >
                            <div className="card-body" >

                                <div className="row" style={{textAlign:"left"}}>
                                    <div className="col sm-3" > 

                                <img src={user.imageUrl} style={{width:"200px", height:"200px"}}></img>

                                    </div>
                                    <div className="col sm-9" >
                                        <h3><strong>{user.name}</strong></h3>
                                        <label><b>Email: </b></label> <span>{user.email}</span><br/>
                                        <label><b>Phone: </b></label> <span>{user.phone}</span><br/>
                                        <label><b>Company: </b></label><span>{user.company}</span><br/>
                                        <label><b>Website: </b></label><span>{user.website}</span><br/>
                                        <label><b>Address: </b></label><span>{user.address}</span><br/>
                                    </div>

                                </div>

                            </div>

                        </div> 

                    ))}


            </div>
        </div>
    )
}

export default Getusers
