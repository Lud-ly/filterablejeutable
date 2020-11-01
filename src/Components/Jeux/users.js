import React from 'react'

    const Users = ({ users }) => {
      return (
        <div>
          <center><h1>USERS LIST</h1></center>
         {users.map((user) => (
            <div className="card">
              <div className="card-header">
                <img src={user.picture.large}alt="yoyo"/>
                <h1 className="profil-user">{user.name.title} {user.name.first} {user.name.last}</h1>
              </div>
              <div className="card-body">
                <h3 class="text-muted">Age Cérébral : {user.dob.age} ans</h3>
                <div className="divider"></div>
                <p class="card-text">tel : {user.phone}</p>
                <div className="divider"></div>
                <p class="card-text">phone : {user.cell}</p>
                <div className="divider"></div>
                <p class="card-text">email : {user.email}</p>
                <div className="divider"></div>
                <p class="card-text">genre Humain : {user.gender}</p>
                <div className="divider"></div>
                <p class="card-text">User : {user.login.username}</p>
                <div className="divider"></div>
                <p class="card-text">N° : {user.location.street.number}</p>
                <div className="divider"></div>
                <p class="card-text">Rue : {user.location.street.name}</p>
                <div className="divider"></div>
                <p class="card-text">MDP : {user.login.password}</p>
                <div className="divider"></div>
                <p class="card-text">Pays : {user.location.country}</p>
                <div className="divider"></div>
                <p class="card-text">Etat : {user.location.state}</p>
                <div className="divider"></div>
                <p class="card-text">Ville : {user.location.city}</p>
                <div className="divider"></div>
                <img src={user.picture.thumbnail}alt="yiyi"/>
                <p class="card-text">Membre du LudoClub depuis : {user.registered.age} ans</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Users