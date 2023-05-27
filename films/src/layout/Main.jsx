import { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import Movies from '../components/Movies';
import '../index.css'

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('Test');

  const handleChange = event => {
    setSearch(event.target.value);

    console.log('value is:', event.target.value);
  };

  const handleSubmit = event => {
    fetch(`http://www.omdbapi.com/?apikey=c8ed8ebe&s=${search}&page=1`)
      .then(res => res.json())
      .then(data => setMovies(data.Search))
  }


  return (
    <Layout.Content>
      <div className="searchField">
        <input onChange={handleChange}></input>
        <button onClick={handleSubmit}>Поиск</button>
      </div>
      <Row>
        <Col xs={24} sm={{ span: 18, offset: 3 }}>
          <Row className='justify-center' gutter={[32, 32]}>
            {
              movies.length ?
                <Movies movies={movies} />
                : <h1>Loading...</h1>
            }
          </Row>
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default Main;