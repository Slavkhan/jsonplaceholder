import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function PostsCard({id, title, body, username}) {
  return (
    <Card className="posts-card">
      <Card.Body className="posts-card-body">
        <div className="post-card-body-section">
          <h2 className="posts-card-id">
            <label>#</label>
            {id}
            &nbsp;
            <Link state={username} to={JSON.stringify(id)}>
              {title}
            </Link>
          </h2>

          <label>{body}</label>
        </div>
        <div className="post-card-body-section">
          <p>{username}</p>
        </div>
      </Card.Body>
    </Card>
  );
}
