import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditProfile from "./EditProfile"

export default function ListOfUsers() {

    const users = useSelector((state) => state.usersReducer.users);
    const roles = useSelector((state) => state.usersReducer.roles);

    return (
        <div>
            hola
        </div>
    )
}