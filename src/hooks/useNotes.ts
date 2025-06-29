import { useEffect, useState } from "react";
import type { CreateNoteInput, Note, UpdateNoteInput } from "../types/note";
import { notesApi } from "../api/notesApi";

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    notesApi.getNotes().then((data) => {
      setNotes(data);
      setLoading(false);
    });
  }, []);

  const createNote = async (input: CreateNoteInput) => {
    const newNote = await notesApi.createNote(input);
    setNotes((prev) => [newNote, ...prev]);
  };

  const updateNote = async (input: UpdateNoteInput) => {
    const updated = await notesApi.updateNote(input);
    if (updated) {
      setNotes((prev) => prev.map((n) => (n.id === updated.id ? updated : n)));
    }
  };

  const deleteNote = async (id: string) => {
    const success = await notesApi.deleteNote(id);
    if (success) {
      setNotes((prev) => prev.filter((n) => n.id !== id));
    }
  };

  return {
    notes,
    loading,
    createNote,
    updateNote,
    deleteNote,
  };
};
