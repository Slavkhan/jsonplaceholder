import React from 'react';
import {Card} from 'react-bootstrap';
export default function UserCard({id, name, username, email, address, phone, website, company}) {
  return (
    <Card className="users-card">
      <Card.Body className="users-card-body">
        <h2>
          <label>#</label>
          {id} {username}
        </h2>
        <label>{name}</label>

        <label>{email}</label>
        <h2>{company.name}</h2>
      </Card.Body>
    </Card>
  );
}
