import './App.scss';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {Form} from './components/Form';
import {Loader} from './components/Loader';
import {WorkWithUs} from './components/WorkWithUs';
import {Sturtups} from './components/Startups';
import {Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import {Works} from './components/Works';

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className='App'>
      <Header setIsLoading={setIsLoading} />
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path='/Home' element={<Sturtups setIsLoading={setIsLoading} />} />
          <Route
            path='/Startups'
            element={<Sturtups setIsLoading={setIsLoading} />}
          />
          <Route path='/Contact' element={<Form />} />
          <Route path='/Career' element={<WorkWithUs />} />
          <Route path='/Works' element={<Works />} />
        </Routes>
      )}
      <Footer setIsLoading={setIsLoading} />
    </div>
  );
};

export default App;
