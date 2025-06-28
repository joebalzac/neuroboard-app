import type { Note } from "../types/note";

type Props = {
  note: Note;
  onDelete: () => void;
  onEdit: () => void;
};

export const NoteCard = ({ note, onDelete, onEdit }: Props) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <small>{new Date(note.createdAt).toLocaleString()}</small>
      <div>
        {note.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};
