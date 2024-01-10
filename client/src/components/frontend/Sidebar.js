import Search from './widget/Search';
import Category from './widget/Category';
import Tag from './widget/Tag';
import RecentPost from './widget/RecentPost';

const Sidebar = () => {
	return (
		<>
			<Search />
			<Category />
			<Tag />
			<RecentPost />
		</>
	)
}

export default Sidebar;
