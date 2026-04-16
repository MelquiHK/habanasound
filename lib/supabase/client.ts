import { createBrowserClient } from "@supabase/ssr"
import type { SupabaseClient } from "@supabase/supabase-js"

let client: SupabaseClient | null = null

export function createClient(): SupabaseClient | null {
  if (client) {
    return client
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

  console.log("[v0] Supabase config:", {
    url: supabaseUrl ? "✓ URL found" : "✗ URL missing",
    key: supabaseKey ? "✓ Key found" : "✗ Key missing",
  })

  if (!supabaseUrl || !supabaseKey) {
    console.warn(
      "Faltan las variables de entorno de Supabase. Verifica NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    )
    return null
  }

  client = createBrowserClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  })

  console.log("[v0] Supabase client created successfully")

  return client
}
