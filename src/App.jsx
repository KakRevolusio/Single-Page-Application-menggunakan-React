import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePageWrapper from './pages/HomePage';
import ArsipPageWrapper from './pages/ArsipPage';
import AddPage from './pages/AddPage';
import DetailPageWrapper from './pages/DetailPage';
import EditPageWrapper from './pages/EditPage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className='app-container'>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePageWrapper />} />
          <Route path='/archives' element={<ArsipPageWrapper />} />
          <Route path='/notes/new' element={<AddPage />} />
          <Route path='/notes/:id' element={<DetailPageWrapper />} />
          <Route path='/notes/edit/:id' element={<EditPageWrapper />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
