import { cookies } from "next/headers"
import { createClient } from "@/lib/supabase/server"
import HomePage from "@/components/home-page"

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { data } = await supabase.auth.getSession()
  const userEmail = data?.session?.user?.email ?? null

  return <HomePage userEmail={userEmail} />
}
