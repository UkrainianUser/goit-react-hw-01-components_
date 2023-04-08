import css from './UserStats.module.css';
import PropTypes from 'prop-types';

const UserStats = ({followers, views, likes}) => {
	return (<ul className={css.stats}>
		<li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{likes}</span>
    </li>
	</ul>);
};

UserStats.propTypes = {
	followers: PropTypes.number.isRequired,
	views: PropTypes.number.isRequired,
	likes: PropTypes.number.isRequired,
};

export default UserStats;