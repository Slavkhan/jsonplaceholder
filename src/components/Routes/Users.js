import {useState, useEffect} from 'react';
import {fetchUsers} from '../../services/API';
import UserCard from '../UserCard';
import GoBack from '../GoBack';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fecth = async () => {
      const {data} = await fetchUsers();
      setUsers(data);
      setFilteredUsers(data);
    };
    fecth();
  }, []);

  const handleSearch = (e) => {
    setSearchValue(e);
  };

  useEffect(() => {
    if (searchValue) {
      const filtered = users.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchValue.toLowerCase()) || item.username.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, filteredUsers]);
  if (!filteredUsers) return null;
  return (
    <>
      <div className="users-container">
        <div className="users-filter">
          <GoBack></GoBack>

          <label className="users-filter-input">
            <input onInput={(e) => handleSearch(e.target.value)} type="text" placeholder="Filter users by Name/Username" />
          </label>
          <span>
            <h3 className="users-filter-title">Users</h3>
            <label className="users-filter-label">{filteredUsers.length} Users</label>
          </span>
        </div>
        <div className="users-row">
          {filteredUsers.map((user, key) => {
            return <UserCard key={user.name + key} className {...user} />;
          })}
          {/* {!filteredUsers && <NothingHere/>} */}
        </div>
      </div>
    </>
  );
}
