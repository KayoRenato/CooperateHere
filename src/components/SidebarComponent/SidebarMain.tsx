import { SidebarSignUp } from './SidebarSignUp'
import { SidebarForm } from './SidebarForm'
import { Sidebar } from "./Sidebar"
import { useEffect, useState } from 'react'
import userData from '../../context/userData'


export function renderSidebar() {
    const { userComment } = userData()
    const hasUserComment = !!userComment?.name && !!userComment?.role

    const [sidebarSignUp, setSidebarSignUp] = useState(true)
    const [sidebarForm, setSidebarForm] = useState(false)
    const [sidebar, setSidebar] = useState(false)

    function SignUp() {
        setSidebarSignUp(false)
        setSidebarForm(true)
        setSidebar(false)
    }

    function AbortSignUp() {
        setSidebarSignUp(true)
        setSidebarForm(false)
    }

    function HandleFormCancel() {
        if (hasUserComment) {
            setSidebarForm(false)
            setSidebar(true)
        } else AbortSignUp()
    }

    useEffect(() => { 
        if (hasUserComment) {
            setSidebar(true)
            setSidebarForm(false)
        } else {
            setSidebar(false)
            AbortSignUp()
        }
    }, [hasUserComment])

    return (
        <>
            {sidebarSignUp && <SidebarSignUp handleSignUp={SignUp} />}
            {sidebar && <Sidebar handleEditProfile={SignUp} />}
            {sidebarForm && <SidebarForm handleCancel={HandleFormCancel} />}
        </>
    );

}