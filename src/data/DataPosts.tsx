import { Post } from "@prisma/client";

export const initialPosts: Post[] = [
    {
        id: '1',
		username: 'user1',
		userAvatarUrl: 'https://github.com/github.png?size=460',
		description: "Back to school we go... #Walking to the futureA distinctive collection of Nike bags from the sports collection from #Jarir_Library ..",
		imageUrl:
			'https://images.unsplash.com/photo-1659855286132-046855432688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
		date: new Date(),
		likes: [],
    },
	{
        id: '2',
		username: 'omar alwahiby',
		userAvatarUrl: 'https://github.com/github.png?size=460',
		description: "Back to school we go... #Walking to the futureA distinctive collection of Nike bags from the sports collection from #Jarir_Library ..",
		imageUrl:
			'https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
		date: new Date(),
		likes: [],
    },
	{
        id: '3',
		username: 'yazeed',
		userAvatarUrl: 'https://github.com/github.png?size=460',
		description: "Back to school we go... #Walking to the futureA distinctive collection of Nike bags from the sports collection from #Jarir_Library ..",
		imageUrl:
			'https://images.unsplash.com/photo-1659795004677-f0f02d3b28ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
		date: new Date(),
		likes: [],
    },
	{
        id: '4',
		username: 'fawaz ladarqi',
		userAvatarUrl: 'https://github.com/github.png?size=460',
		description: "Back to school we go... #Walking to the futureA distinctive collection of Nike bags from the sports collection from #Jarir_Library ..",
		imageUrl:
			'https://images.unsplash.com/photo-1659838376701-b8183d958f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80',
		date: new Date(),
		likes: [],
    },
]