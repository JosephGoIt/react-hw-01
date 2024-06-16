import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.friendListItem}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img src={avatar} alt="User avatar" width="48" className={css.avatar} />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
