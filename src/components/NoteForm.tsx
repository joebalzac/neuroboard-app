import React, { useState } from "react";
import type { CreateNoteInput } from "../types/note";

type Props = {
  onSubmit: (input: CreateNoteInput) => void;
};

const initialState: CreateNoteInput = {
  title: "",
  content: "",
  tags: [],
};

export const NoteForm = ({ onSubmit }: Props) => {
  const [form, setForm] = useState(initialState);
  const [tagInput, setTagInput] = useState(" ");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !form.tags.includes(tagInput.trim())) {
      setForm((prev) => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }));
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setForm((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tag) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return;
    onSubmit(form);
    setForm(initialState);
  };

  return (
    <div>
      <form className="flex flex-col" action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Note Title"
          value={form.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Write your note here..."
          value={form.content}
          onChange={handleChange}
        />
        <div>
          <input
            type="text"
            placeholder="Add tag"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
          />
          <button type="button" onClick={handleAddTag}>
            + Tag
          </button>
        </div>
        <div>
          {form.tags.map((tag) => (
            <span key={tag}>
              {tag} <button onClick={() => handleRemoveTag(tag)}>x</button>
            </span>
          ))}
        </div>
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
};
