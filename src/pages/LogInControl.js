import { useState, useEffect } from 'react'
import { supabase } from '../api'
import SignIn from './SupabaseLogin'
import EditProfile from '../components/UI/UserDashboard/EditProfile'

export default function LogInControl() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <SignIn /> : <EditProfile key={session.user.id} session={session} />}
    </div>
  )
}