import React, { useState, useEffect } from 'react';
import NoteInput from '../components/NoteInput';
import ButtonAction from '../components/ButtonAction';
import { editNote, getNote } from '../utils/local-data';
import { useNavigate, useParams } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';

function EditPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const note = getNote(id);
    if (note === undefined) {
      navigate('/');
    }
  }, [id, navigate]);

  const saveNoteHandler = (note) => {
    editNote(note);
    navigate('/');
  };

  return <EditPage onSaveNoteHandler={saveNoteHandler} noteId={id} />;
}

function EditPage({ onSaveNoteHandler, noteId }) {
  const [note, setNote] = useState(getNote(noteId));
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onBodyInputHandler = (event) => {
    setBody(event.target.innerHTML);
  };

  const onClickSaveButton = () => {
    onSaveNoteHandler({ id: noteId, title, body });
  };

  return (
    <section className='add-new-page'>
      <NoteInput
        state={{ id: noteId, title, body }}
        onTitleChange={onTitleChangeHandler}
        onBodyInput={onBodyInputHandler}
        initialBodyEdit={note.body}
      />
      <div className='add-new-page__action'>
        <ButtonAction title='Simpan' onClick={onClickSaveButton} icon={<FiCheck />} />
      </div>
    </section>
  );
}

export default EditPageWrapper;
