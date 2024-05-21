import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';

const NoteInput = ({ state, onTitleChange, onBodyInput, initialBodyEdit }) => (
  <div className='add-new-page__input'>
    <input
      className='add-new-page__input__title'
      placeholder='Catatan rahasia'
      value={state.title}
      onChange={onTitleChange}
      spellCheck='false'
    />
    <div
      className='add-new-page__input__body'
      contentEditable='true'
      data-placeholder='Sebenarnya saya adalah ....'
      onInput={onBodyInput}
      spellCheck='false'
      suppressContentEditableWarning={true}
    >
      {initialBodyEdit !== undefined ? parser(initialBodyEdit) : ''}
    </div>
  </div>
);

NoteInput.propTypes = {
  state: PropTypes.object.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onBodyInput: PropTypes.func.isRequired,
  initialBodyEdit: PropTypes.string
};

export default NoteInput;
