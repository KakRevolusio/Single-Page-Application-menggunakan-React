import React, { useState } from 'react';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import ButtonAction from '../components/ButtonAction';
import { getActiveNotes } from '../utils/local-data';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const navigate = useNavigate();

  const changeSearchParams = (newKeyword) => {
    setSearchParams({ keyword: newKeyword });
  };

  const addButtonHandler = () => {
    navigate('/notes/new');
  };

  return (
    <HomePage
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
      onAddButtonHandler={addButtonHandler}
    />
  );
}

function HomePage({ defaultKeyword, keywordChange, onAddButtonHandler }) {
  const [keyword, setKeyword] = useState(defaultKeyword || '');
  const notes = getActiveNotes().filter(({ title }) =>
    title.toLowerCase().includes(keyword.toLowerCase())
  );

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    keywordChange(newKeyword);
  };

  return (
    <section className='homepage'>
      <h2>Catatan Aktif</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={notes} />
      <div className='homepage__action'>
        <ButtonAction title='Tambah' onClick={onAddButtonHandler} icon={<FiPlus />} />
      </div>
    </section>
  );
}

export default HomePageWrapper;
