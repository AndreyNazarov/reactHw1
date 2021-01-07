import PropTypes, { string } from "prop-types";
import s from "./Friends.module.css";
var classNames = require("classnames");

function FriendList({ friends }) {
  return (
    <ul className={s.elements}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        const onlineCheck = isOnline === true ? s.green : s.red;
        return (
          <li className={s.item} key={id}>
            <span className={classNames(s.status, onlineCheck)}></span>
            <img className={avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.any.isRequired,
};

export default FriendList;
