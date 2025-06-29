// src/pages/NotesPage.tsx
import { useNotes } from "../hooks/useNotes";
import { NoteForm } from "../components/NoteForm";
import { NoteList } from "../components/NoteList";

export const NotesPage = () => {
  const { notes, loading, createNote, updateNote, deleteNote } = useNotes();

  if (loading) return <p>Loading notes...</p>;

  return (
    <main style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1>🧠 BrainDump</h1>

      <NoteForm onSubmit={createNote} />

      <hr />

      <NoteList
        notes={notes}
        onDelete={deleteNote}
        onUpdate={(updateNote) => {
          console.log("Edit this note:", updateNote);
          // For now: wire this up to editing flow next.
        }}
      />
    </main>
  );
};
