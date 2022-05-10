import {useState, useEffect, useRef} from 'react';
import {fetchPosts, fetchUsers} from '../../services/API';
import PostsCard from '../PostsCard';
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [users, setUsers] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    const fecth = async () => {
      const {data: users} = await fetchUsers();
      setUsers(users);
      const {data: posts} = await fetchPosts();
      setPosts(posts);
      setFilteredPosts(posts);
    };
    fecth();
    // foucus input on component mount
    inputRef.current.focus();
  }, []);

  const handleSearch = (e) => {
    setSearchValue(e);
    if (!e.length) return setFilteredPosts(posts);
    const currentUser = users.find(({username}) => username.toLowerCase().indexOf(e.toLowerCase()) > -1);
    if (currentUser) {
      return setFilteredPosts([...posts.filter(({userId}) => userId === currentUser.id)]);
    }
    setFilteredPosts([]);
  };

  // useEffect(() => {
  //   if (searchValue) {
  //     const filtered = posts.filter((item) => {
  //       return item.id == searchValue;
  //     });
  //     setFilteredPosts(filtered);
  //   } else {
  //     setFilteredPosts(posts);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchValue, filteredPosts]);
  if (!filteredPosts) return null;
  return (
    <>
      <>
        <div className="posts-container">
          <div className="posts-filter">
            <span>
              <h3 className="posts-filter-title">Posts</h3>
              <label className="posts-filter-label">{filteredPosts.length} Posts</label>
            </span>
            <label className="posts-filter-input">
              <input
                onInput={(e) => handleSearch(e.target.value)}
                value={searchValue}
                type="text"
                placeholder="Filter posts by Name/Username"
                ref={inputRef}
              />
            </label>
          </div>
          <div className="posts-row">
            {filteredPosts.map((post, key) => {
              return <PostsCard key={post.id} username={users.find(({id}) => post.userId === id)?.username ?? 'blabla'} {...post} />;
            })}
          </div>
        </div>
      </>
    </>
  );
}
