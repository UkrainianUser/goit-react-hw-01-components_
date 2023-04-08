import UserDescription from 'components/UserDescription/UserDescription';
import UserStats from 'components/UserStats/UserStats';
import css from './Profile.module.css';
import user from 'data/user.json';

const Profile = () => {
	return (<div className={css.profile}>
		<UserDescription
			avatar={user.avatar}
			username={user.username}
			tag={user.tag}
			location={user.location} />
		<UserStats 
			followers={user.stats.followers}
			views={user.stats.views}
			likes={user.stats.likes} />
	</div>);
};

export default Profile;