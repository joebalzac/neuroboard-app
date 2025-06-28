import type { CreateNoteInput, Note, UpdateNoteInput } from "../types/note";

let notes: Note[] = [];

export const notesApi = {
  getNotes: async (): Promise<Note[]> => {
    return Promise.resolve([...notes]);
  },

  createNote: async (input: CreateNoteInput): Promise<Note> => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...input,
    };
    notes.push(newNote);
    return Promise.resolve(newNote);
  },

  updateNote: async (input: UpdateNoteInput): Promise<Note | null> => {
    const index = notes.findIndex((n) => n.id === input.id);
    if (index === -1) return Promise.resolve(null);

    notes[index] = { ...notes[index], ...input };
    return Promise.resolve(notes[index]);
  },

  deleteNote: async (id: string): Promise<boolean> => {
    const index = notes.findIndex((n) => n.id === id);
    if (index === -1) return Promise.resolve(false);

    notes.splice(index, 1);
    return Promise.resolve(true);
  },
};
