import React, { useState, useEffect } from 'react';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/local-data';
import { useSearchParams } from 'react-router-dom';

function ArsipPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');

  useEffect(() => {
    setSearchParams({ keyword });
  }, [keyword, setSearchParams]);

  return <ArsipPage defaultKeyword={keyword} keywordChange={setKeyword} />;
}

function ArsipPage({ defaultKeyword, keywordChange }) {
  const [notes, setNotes] = useState(getArchivedNotes());
  const [keyword, setKeyword] = useState(defaultKeyword || '');

  useEffect(() => {
    const filteredNotes = getArchivedNotes().filter(({ title }) =>
      title.toLowerCase().includes(keyword.toLowerCase())
    );
    setNotes(filteredNotes);
  }, [keyword]);

  const handleKeywordChange = (newKeyword) => {
    setKeyword(newKeyword);
    keywordChange(newKeyword);
  };

  return (
    <section className='homepage'>
      <h2>Catatan Arsip</h2>
      <SearchBar keyword={keyword} keywordChange={handleKeywordChange} />
      <NoteList notes={notes} />
    </section>
  );
}

export default ArsipPageWrapper;
