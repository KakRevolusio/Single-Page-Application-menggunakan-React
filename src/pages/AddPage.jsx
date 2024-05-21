import React, { useState } from 'react';
import NoteInput from '../components/NoteInput';
import ButtonAction from '../components/ButtonAction';
import { addNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';

function AddPageWrapper() {
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: '', body: '' });

  const saveNoteHandler = () => {
    addNote(note);
    navigate('/');
  };

  const handleTitleChange = event => {
    setNote(prevNote => ({
      ...prevNote,
      title: event.target.value
    }));
  };

  const handleBodyInput = event => {
    setNote(prevNote => ({
      ...prevNote,
      body: event.target.innerHTML
    }));
  };

  return (
    <AddPage
      note={note}
      onTitleChange={handleTitleChange}
      onBodyInput={handleBodyInput}
      onSaveNoteHandler={saveNoteHandler}
    />
  );
}

function AddPage({ note, onTitleChange, onBodyInput, onSaveNoteHandler }) {
  const onClickSaveButton = () => {
    onSaveNoteHandler(note);
  };

  return (
    <section className='add-new-page'>
      <NoteInput state={note} onTitleChange={onTitleChange} onBodyInput={onBodyInput} />
      <div className='add-new-page__action'>
        <ButtonAction title='Simpan' onClick={onClickSaveButton} icon={<FiCheck />} />
      </div>
    </section>
  );
}

export default AddPageWrapper;
