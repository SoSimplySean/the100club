import { useState, useEffect } from 'react'
import { supabase } from '../api'
import SAccount from './Account'
import SignIn from './SupabaseLogin'

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
      {!session ? <SignIn /> : <SAccount key={session.user.id} session={session} />}
    </div>
  )
}