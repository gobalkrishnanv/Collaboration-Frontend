var app=angular.module("app",['ngRoute','ngCookies']);

app.config(function($routeProvider)
		{
			alert('I am in Route Config');
			$routeProvider.when("/",{templateUrl:"/index.html"});
			$routeProvider.when("/about",{templateUrl:"a_page/About.html"});
			$routeProvider.when("/login",{templateUrl:"a_user/Login.html"});
			$routeProvider.when("/register",{templateUrl:"a_user/Register.html"});
			$routeProvider.when("/home",{templateUrl:"a_page/UserHome.html"});
			
			$routeProvider.when("/addBlog",{templateUrl:"a_blog/AddBlog.html"});
			$routeProvider.when("/showBlog",{templateUrl:"a_blog/ShowBlog.html"});
			$routeProvider.when("/updateBlog",{templateUrl:"a_blog/UpdateBlog.html"});
            $routeProvider.when("/addBlogComment",{templateUrl:"a_blog/AddBlogComment.html"});
            $routeProvider.when("/updateBlogComment",{templateUrl:"a_blog/UpdateBlogComment.html"});

            
			$routeProvider.when("/manageBlog",{templateUrl:"a_blog/ManageBlog.html"});
			
			$routeProvider.when("/addforum",{templateUrl:"a_forum/addForum.html"});
			$routeProvider.when("/addforumcomment",{templateUrl:"a_forum/addForumComment.html"});
			$routeProvider.when("/updateforum",{templateUrl:"a_forum/updateForum.html"});
			$routeProvider.when("/updateforumcomment",{templateUrl:"a_forum/updateForumComment.html"});
			
			$routeProvider.when("/showforum",{templateUrl:"a_forum/showForum.html"});
			$routeProvider.when("/manageforum",{templateUrl:"a_forum/manageForum.html"});
			
			$routeProvider.when("/addjob",{templateUrl:"a_job/addJob.html"});
			$routeProvider.when("/updatejob",{templateUrl:"a_job/updateJob.html"});
			$routeProvider.when("/showjob",{templateUrl:"a_job/showJob.html"});
			$routeProvider.when("/managejob",{templateUrl:"a_job/manageJob.html"});
			
			$routeProvider.when("/friendList",{templateUrl:"a_friend/FriendList.html"});
			$routeProvider.when("/pendingFriendRequestList",{templateUrl:"a_friend/RequestFriendList.html"});
			$routeProvider.when("/suggestedFrientList",{templateUrl:"a_friend/SuggestedFriendList.html"});
            
			$routeProvider.when("/picture",{templateUrl:"a_user/Picture.html"});
			$routeProvider.when("/chat",{templateUrl:"a_chat/Chat.html"});
			
			
			$routeProvider.when("/logout",{templateUrl:"a_page/" +"UserHome.html"});
			
		});

app.run(function($rootScope,$cookieStore){
	console.log('I am in run function');
	console.log($rootScope.currentUser);
	
	if($rootScope.currentUser==undefined){
		$rootScope.currentUser=$cookieStore.get('userDetails');
	}
	
});