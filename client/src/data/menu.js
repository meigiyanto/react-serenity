const menu = [
	{
		id: 1,
		name: 'Home',
		path: '/',
	},
	{
		id: 2,
		name: 'About',
		path: '/about',
		children: [
			{
		 		id: 8,
				name: 'About Us',
				path: '/about',
			},
			{
		 		id: 9,
				name: 'Our Team',
		 	 	path: '/team',
			},
			{
		 		id: 10,
				name: 'Other',
				path: '/other',
				children: [
					{
						id: 11,
 						name: 'link 1',
						path: '/link-1',
					},
					{
						id: 12,
 						name: 'link 2',
						path: '/link-2',
					},
					{
						id: 13,
 						name: 'link 3',
						path: '/link-3',
					}
				]
			}
		]
	},
	{
		id: 3,
		name: 'Blog',
		path: '/blog',
	},
	{
		id: 4,
		name: 'Contact',
		path: '/contact',
	},
	{
		id: 13,
		name: 'Country',
		path: '/country',
	},
	{
		id: 5,
		name: 'Services',
		path: '/services',
	},
	{
		id: 6,
		name: 'Pricing',
		path: '/pricing',
	},
	{
		id: 7,
		name: 'Portfolio',
		path: '/portfolio',
	}
];


export default menu;
