import React from 'react'

    const Contacts = ({ contacts }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {contacts.map((contact) => (
            <div className="card">
              <div className="card-body"key={contact.name}>
                <h1 className="card-title">{contact.name}</h1>
                <h3 className="card-title">{contact.username}</h3>
                <h3 className="card-title">{contact.phone}</h3>
                <h5 className="card-subtitle mb-2 text-muted">{contact.email}</h5>
                <p className="card-text">{contact.company.catchPhrase}</p>
                <h3 className="card-text">{contact.company.name}</h3>
                <p className="card-text">{contact.company.bs}</p>
                <p className="card-text">{contact.address.street}</p>
                <p className="card-text">{contact.address.suite}</p>
                <p className="card-text">{contact.website}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Contacts