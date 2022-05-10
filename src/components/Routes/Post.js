import {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {fetchPost} from '../../services/API';
import {useUserData} from './User';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Post() {
  const {id} = useParams();
  const {user} = useUserData(id);
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

  return (
    <>
      <Card className="posts-card">
        <Card.Body className="posts-card-body">
          <div className="post-card-body-section">
            <h2>
              Post <label>#</label>
              {id} by: &nbsp;<Link to={'/user/' + id}>{uName}</Link>
            </h2>
            <h2 className="posts-card-id">
              <Link to={JSON.stringify(id)}>{post.title}</Link>
            </h2>

            <p>{post.body}</p>
          </div>
          <div className="post-card-body-section">
            <p>{}</p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
