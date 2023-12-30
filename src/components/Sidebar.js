import Search from '../components/widget/Search';
import Category from '../components/widget/Category';
import Tag from '../components/widget/Tag';
import RecentPost from '../components/widget/RecentPost';

function Sidebar() {
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
