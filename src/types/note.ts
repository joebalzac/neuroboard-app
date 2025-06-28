export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
}

export type CreateNoteInput = Omit<Note, "id" | "createdAt">;
export type UpdateNoteInput = Partial<Omit<Note, "id" | "createdAt">> & {
  id: string;
};
