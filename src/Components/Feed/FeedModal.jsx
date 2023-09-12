import React from 'react';
import useFetch from '../../Hooks/useFetch';
import styles from './FeedModal.module.css';
import Error from '../Utils/Error';
import Loading from '../Utils/Loading';
import { PHOTO_GET } from '../../Routes/api';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
