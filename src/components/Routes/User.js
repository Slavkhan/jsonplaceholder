import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {fetchUser} from '../../services/API';

export default function User() {
  const {id} = useParams();
  const [user, setUser] = useState();
  useEffect(() => {
    const fecth = async (id) => {
      if (!id) {
        return;
      }
      const {data} = await fetchUser(id);
      setUser(data);
    };
    fecth(id);
  }, [id]);
  console.log(user);
  return <></>;
}
