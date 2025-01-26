import { onAuthenticateUser } from '@/actions/user'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const DashboardPage = async (props: Props) => {

  const auth = await onAuthenticateUser()

  if (auth.status === 200 || auth.status === 201) {
    return redirect(`/dashboard/${auth.user?.workspace[0].id}`);
  }

  if (auth.status === 403 || auth.status === 401 || auth.status === 404 || auth.status === 500) {
      return redirect('/auth/sign-in')
  }
}

export default DashboardPage