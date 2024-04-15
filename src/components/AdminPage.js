/* a page to hold a Admin navbar and other fns later on */
import React, {Fragment, useState, useEffect} from "react";

    function AdminLogin(){
        return(<h1>Admin Dashboard Welcome</h1>);
    }
    
    function UnwantedLogin(){
        return(<h1>Admin Dashboard DENIED</h1>);
    }

   /* function AdminPage(props){
        const isAdmin = props.isAdmin;
        if(isAdmin == true){
            return <AdminLogin/>;
        }else{
            return <UnwantedLogin/>;
        }


    } */

    const AdminPage = () => {
        /* things to build:
        1) login as sysadmin fn
        2) sysadmin logout fn
        under view user account page:
        3) sysadmin create user account page
        4) sysadmin search for user account ID:20 similar to ID23 whereby if u have a searchbar u will cfm the validity of an acc at the same time
        5) sysadmin view user account page
        6) sysadmin update user account details
        7) sysadmin suspend/reactivate user account
        under view user page:
        8) sysadmin create user profile fn
        9) sysadmin wants to view profiles
        10) sysadmin can suspend user profiles
        11) sysadmin can update user profiles



        */
        return(
            <></>
        );
    }


export default AdminPage;