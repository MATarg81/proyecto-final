import React from 'react';
import  { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getActivities } from '../redux/actions/activitiesActions';

function Activities() {

    const dispatch = useDispatch();
    const allActivities = useSelector( (state) => state.activities)

    useEffect(() =>{
        dispatch(getActivities())
      },[dispatch])

     

    return (
        <div>
            {
                allActivities
            }
        </div>
    );
}

export default Activities;
