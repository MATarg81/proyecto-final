
import React from 'react';
import  {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getActivities } from '../redux/actions/activitiesActions';

export default function Activities() {

    const dispatch = useDispatch();

    const allActivities = useSelector( (state) => state.activitiesReducer.activities)
    
    useEffect(() =>{
        dispatch(getActivities())
    },[dispatch])
    

    return (

       <div>
              <h1>Athenas Club Activities</h1>
              <hr />
            

              <div class="row row-cols-1 row-cols-md-2 g-4">

            {
              allActivities ? allActivities.map( a => {
                return(
                  <div class="col">
                    <div class="card">
                      <img src="..." class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h5 class="card-title">{a.name}</h5>
                        <p class="card-text">{a.detail}</p>
                        <p className="card-text"><small className="text-muted">{a.days}</small></p>
                        <p className="card-text"><small className="text-muted">{a.times}</small></p>
                        <button> Inscribirse </button>
                     </div>
                    </div>
                  </div>
                )

              }):
              <div>Loading Activities....</div>
            }
        </div>
        </div>

    );
}

