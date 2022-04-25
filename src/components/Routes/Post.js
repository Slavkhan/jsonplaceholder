import {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {fetchPost} from '../../services/API';

export default function Post() {
  const {id} = useParams();
  const {state: uName} = useLocation();
  console.log(uName);
  const [post, setPost] = useState();
  useEffect(() => {
    const fecth = async (id) => {
      if (!id) {
        return;
      }
      const {data} = await fetchPost(id);
      setPost(data);
    };
    fecth(id);
  }, [id]);
  console.log(post);
  return <></>;
}
