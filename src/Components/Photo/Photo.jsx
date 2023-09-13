import React from 'react';
import useFetch from '../../Hooks/useFetch';
import Error from '../Utils/Error';
import Loading from '../Utils/Loading';
import PhotoContent from './PhotoContent';
import { useParams } from 'react-router-dom';
import { PHOTO__GET } from '../../Routes/api';

const Photo = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO__GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
