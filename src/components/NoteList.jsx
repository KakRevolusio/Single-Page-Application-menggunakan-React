import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NoteList({ notes }) {
  return (
    <div>
      {notes && notes.length > 0 ? (
        <section className='notes-list'>
          {notes.map(note => (
            <NoteItem key={note.id} {...note} />
          ))}
        </section>
      ) : (
        <section className='notes-list-empty'>
          <p className='notes-list__empty'>Tidak ada catatan</p>
        </section>
      )}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default NoteList;
