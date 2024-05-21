import React, { useState, useEffect } from 'react';
import ButtonAction from '../components/ButtonAction';
import NoteDetail from '../components/NoteDetail';
import { useNavigate, useParams } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi'; // Mengimpor ikon dari react-icons/bi

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(getNote(id));

  const deleteNoteHandler = (id, archived) => {
    deleteNote(id);
    archived ? navigate('/archives') : navigate('/');
  };

  const archiveNoteHandler = (id) => {
    archiveNote(id);
    navigate('/');
  };

  const unarchiveNoteHandler = (id) => {
    unarchiveNote(id);
    navigate('/archives');
  };

  const editButtonHandler = () => {
    navigate(`/notes/edit/${id}`);
  };

  return (
    <DetailPage
      note={note}
      id={id} // Menambahkan prop id
      onDeleteNoteHandler={deleteNoteHandler}
      onArchiveNoteHandler={archiveNoteHandler}
      onUnarchiveNoteHandler={unarchiveNoteHandler}
      onEditButtonHandler={editButtonHandler}
    />
  );
}

function DetailPage({ note, id, onDeleteNoteHandler, onArchiveNoteHandler, onUnarchiveNoteHandler, onEditButtonHandler }) {
  const onClickDeleteButton = () => {
    onDeleteNoteHandler(id, note.archived); // Menggunakan prop id
  };
  const onClickArchiveButton = () => {
    onArchiveNoteHandler(id); // Menggunakan prop id
  };
  const onClickUnarchiveButton = () => {
    onUnarchiveNoteHandler(id); // Menggunakan prop id
  };

  const navigate = useNavigate(); // Menggunakan useNavigate di dalam komponen

  useEffect(() => {
    if (note === undefined) {
      navigate(`/notes/edit/${id}`);
    }
  }, [note, id, navigate]);

  return (
    <section>
      {note !== undefined ? (
        <>
          <NoteDetail {...note} />
          <div className='detail-page__action'>
            <ButtonAction title='Edit' onClick={onEditButtonHandler} icon={<FiEdit2 />} />
            <ButtonAction
              title={note.archived ? 'Aktifkan' : 'Arsipkan'}
              onClick={note.archived ? onClickUnarchiveButton : onClickArchiveButton}
              icon={note.archived ? <BiArchiveOut /> : <BiArchiveIn />} 
            />
            <ButtonAction title='Hapus' onClick={onClickDeleteButton} icon={<FiTrash2 />} />
          </div>
        </>
      ) : (
        <p>Note dengan ID "{id}" tidak tersedia.</p>
      )}
    </section>
  );
}

export default DetailPageWrapper;
