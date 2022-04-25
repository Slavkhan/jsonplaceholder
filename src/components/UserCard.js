import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function UserCard({id, name, username, email, address, phone, website, company}) {
  return (
    <Card className="users-card">
      <Card.Body className="users-card-body">
        <div className="user-card-body-section">
          <h2 className="users-card-id">
            <label>#</label>
            {id} {username}
          </h2>
          <label className="-users-card-label">Name</label>
          <Link className="user-card-link" to={JSON.stringify(id)}>
            <h1 className="users-card-title">{name}</h1>
          </Link>
          <label className="-users-card-label">Email address</label>
          <h2 className="users-card-title">{email}</h2>
        </div>
        <div className="user-card-body-section">
          <ul className="users-card-list">
            <li>{address.street}</li>
            <li>{address.suite}</li>
            <li>{address.city}</li>
            <li>{address.zipcode}</li>
          </ul>
          <label>{phone}</label>
        </div>
      </Card.Body>
    </Card>
  );
}
