import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = await createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Lista de todos</h1>
      <ul className="space-y-3">
        {todos?.map((todo: any) => (
          <li key={todo.id} className="rounded-xl border border-border p-4 bg-card">
            {todo.name}
          </li>
        ))}
      </ul>
      {!todos?.length ? <p className="text-muted-foreground mt-4">No hay tareas registradas.</p> : null}
    </div>
  )
}
