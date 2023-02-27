import { SidebarLogin } from './SidebarLogin'
import { SidebarForm } from './SidebarForm'
import { Sidebar } from "./Sidebar"
import { useState } from 'react'
import userData from '../context/userData'

export function renderSidebar() {
    const { userComment } = userData()
    const hasUserComment = !!userComment?.name && !!userComment?.role


    const [sidebarSignUp, setSidebarSignUp] = useState(true)
    const [sidebarForm, setSidebarForm] = useState(false)
    const [sidebar, setSidebar] = useState(false)

    function handleEditProfile() {
        setSidebar(false)
        setSidebarForm(true)
    }

    function handleFormSave() {
        setSidebar(true)
        setSidebarForm(false)
    }

    function handleFormClose() {
        hasUserComment ? handleSignOut : handleFormSave;

    }

    function handleSignOut() {
        setSidebarForm(false)
        setSidebar(false)
        setSidebarSignUp(true)
    }

    return (
        <>
            <SidebarLogin />
            <br />
            <Sidebar />
            <br />
            <SidebarForm />
        </>
    );

}