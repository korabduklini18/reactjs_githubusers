import React from "react";
import User, { UserType } from "../User/User";
import PropTypes from "prop-types";

import "./ListUsers.css";

export default function ListUsers(props) {
  const { users, title } = props;

  const isEmpty = !users || users.length === 0;

  return (
    <div className="ListUsers">
      {title ? <h5>{title}</h5> : null}
      <div className="ListUsers__wrapper">
        {isEmpty ? (
          <div className="alert alert-info">No data!</div>
        ) : (
          users.map((user) => (
            <User key={user.id} user={user} onDelete={props.onDelete}/>
          ))
        )}
      </div>
    </div>
  );
}

ListUsers.propTypes = {
  title: PropTypes.string,
  users: PropTypes.arrayOf(UserType),
  onDelete: PropTypes.func,
};
