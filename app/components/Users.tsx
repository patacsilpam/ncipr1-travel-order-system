import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("users").select("id,user_id,first_name,last_name");

  return <pre>
    <ul>
      {notes?.map(note => (
        <li key={note.id}>{note.first_name}</li>
      ))}
    </ul>
  </pre>
}