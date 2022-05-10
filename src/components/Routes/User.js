import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {fetchUser} from '../../services/API';

export function useUserData(id) {
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
  return {
    user,
    setUser,
  };
}

export default function User() {
  const {id} = useParams();
  const {user, setUser} = useUserData(id);
  console.log(user);
  return <></>;
}
