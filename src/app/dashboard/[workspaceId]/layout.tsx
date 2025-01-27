import { onAuthenticateUser } from '@/actions/user'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    params: {
        workspaceId: string
    },
    children: React.ReactNode
}

const Layout = async (props: Props) => {
    const auth = await onAuthenticateUser()
    if(!auth.user?.workspace) redirect(`/dashboard/${auth.user?.workspace[0].id}`)
    if(!auth.user.workspace.length) redirect('/auth/sign-in')
    const hasAccess = await verifyWorkspaceAccess(props.params.workspaceId)
  return (
    <div>Layout</div>
  )
}

export default Layout