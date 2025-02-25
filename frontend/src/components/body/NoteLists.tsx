import AddNote from "./AddNote";
import Notes from "./Note";
import EditModal from "../ux/EditModal";
import { useState } from "react";

const NoteLists = ({ notes, setNotes, deleteNote, showModalMessage }) => {
    const [editingNote, setEditingNote] = useState(null);

    const handleEdit = (note) => {
        setEditingNote(note);
    };

    const closeEditModal = () => {
        setEditingNote(null);
    };

    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 p-10 pl-20 pr-20 ">
            {notes.map((note) => (
                <div key={note.id} id={`note-${note.id}`} className="motion-preset-expand ">
                    <Notes note={note} onDelete={deleteNote} onEdit={handleEdit} />
                </div>
            ))}
            <div className="hover:scale-105 transition-transform duration-300 ease-out will-change-transform">
                <AddNote setNotes={setNotes} showModalMessage={showModalMessage} />
            </div>
                {editingNote && (
                    <EditModal
                        note={editingNote}
                        setNotes={setNotes}
                        showModalMessage={showModalMessage}
                        onClose={closeEditModal}
                    />
                )}
            
        </div>
)}

export default NoteLists;