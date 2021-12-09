import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import {Route} from "react-router-dom";

const ProtectedRoute = ({element, ...args}) => (
    <Route
        element={withAuthenticationRequired(element)}
        {...args}/>
);

export default ProtectedRoute;