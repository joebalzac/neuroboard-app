import type { Note } from "../types/note";
import { NoteCard } from "./NoteCard";

type Props = {
  notes: Note[];
  onDelete: (id: string) => void;
  onUpdate: (note: Note) => void;
};

export const NoteList = ({ notes, onDelete, onUpdate }: Props) => {
  if (notes.length === 0) return <p>No notes yet.</p>;

  return (
    <div>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={() => onDelete(note.id)}
          onEdit={() => onUpdate(note)}
        />
      ))}
    </div>
  );
};
