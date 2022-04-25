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
          </h2>

          <Link className="post-card-link" state={username} to={JSON.stringify(id)}>
            <h2 className="posts-card-title">{title}</h2>
          </Link>
          <p className="posts-card-title">{body}</p>
        </div>
        <div className="post-card-body-section">
          <label>{username}</label>
        </div>
      </Card.Body>
    </Card>
  );
}
