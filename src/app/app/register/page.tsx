import { redirect } from 'next/navigation'

import { getServerSession } from 'next-auth'

import { NotionForm } from '../../../components/NotionForm'
import { authOptions } from '../../../pages/api/auth/[...nextauth]'

const RegisterPage = async () => {
  const session = await getServerSession(authOptions)

  if (session?.user.integration_token || session?.user.database_id) {
    redirect('/app')
  }

  return <NotionForm mode="register" />
}

export default RegisterPage
