var url='http://localhost:8087/connecter/';

app.controller("blogcontrollers",function($scope,$http,$rootScope,$location,$window,$timeout){
	$scope.blogs={'blogid':0,'blogname':'','blogcontent':'','loginname':'','likes':'','dislikes':'','status':''};
	$scope.blogcomments={'commentid':0,'blogid':0,'commenttext':'','loginname':'','commentdate':''};
	
	$scope.bloglist;
	$scope.blogcommentlist;
	$scope.blogarrangelist;
	$scope.blogarrange={'blog_':'','blogcommentlist_':''};
	
     
	
	$scope.addblogs=function()
	{
		console.log('Blogsa');
		console.log($scope.blogs);
		$location.path("/showBlog");

		$http.post(url+'addBlog',$scope.blogs)
		.then(function(response){
			console.log('blog added');
			$rootScope.currentBlog=$scope.blogs;
			$location.path("/showBlog");
			});
		}
	$scope.listblogs=function(){
		console.log('showblog');
		
		$http.get(url+'listBlogs')
		.then(function(response){
			console.log('listblog');
			$scope.bloglist=response.data;
			console.log($scope.bloglist);
			$location.path("/showBlog");

		});
	};
	
	$scope.listblogs_m=function(){
		console.log('showblog');
		
		$http.get(url+'listBlogs')
		.then(function(response){
			console.log('listblog');
			$scope.bloglist=response.data;
			console.log($scope.bloglist);
			$location.path("/manageBlog");

		});
	};
	
	$scope.listblogarrange=function(){
		$location.path("/showBlog");
		$http.get(url+'getBlogList_Arra')
		     .then(function(response){
		    	 
		    	 $scope.blogarrangelist=response.data;
		    	 $location.path("/showBlog");
		     });
		
	}
	
	$scope.likeblogs=function(blogid){
		$http.get(url+'blogLike/'+blogid)
		.then(
		function(response){
			$location.path("/showBlog");
			console.log('likes');
		}		
		
		);
	};
	
	$scope.dislikeblogs=function(blogid){
		$http.get(url+'blogDisLike/'+blogid)
		.then(function(response){
			$location.path("/showBlog");
			console.log('dislikes');
			
		});
		
	};
	
	$scope.approveblogs=function(blogid){
		$http.get(url+'approveBlog/'+blogid)
		.then(function(response){
			$location.path("/manageBlog");
			console.log('approve');
		});
		
	};
	
	
	$scope.rejectblogs=function(blogid){
		$location.path("/manageBlog");
		$http.get(url+'rejectBlog/'+blogid)
		.then(function(response){
			$location.path("/manageBlog");
			console.log('reject');
		});
	};
	
	
	$scope.deleteblogs_m=function(blogid){
		$location.path("/manageBlog");

		$http.get(url+'deleteBlog/'+blogid)
		.then(function(response){
			$location.path("/manageBlog");
			console.log('delete')
		});
	};
	
	$scope.deleteblogs=function(blogid){
		$location.path("/showBlog");

		$http.get(url+'deleteBlog/'+blogid)
		.then(function(response){
			$location.path("/showBlog");
			console.log('delete')
		});
	};
	
	
	
	
	
	$scope.updateblogpage=function(blogid){
		
		$rootScope.u_blog_id=blogid;
	 
		$location.path("/updateBlog");
	 	
		
		
		
   };
	
   $scope.addblogpage=function(blogid){
		
		
		$location.path("/addBlog");
		
		
		
  };
   
	$scope.updateblogs=function(blogid){
		
		$location.path("/showBlog");

		$http.put(url+'updateBlog/'+blogid,$scope.blogs)
		.then(function(response){
			$location.path("/showBlog");
			console.log('update');
		});
	};
	
	$scope.getblogs=function(blogid){
		$http.get(url+'getBlog/'+blogid)
		.then(function(response){
			$scope.blogs=response.data;
			console.log('get');
		});
	};
	
	$scope.getblogcomments=function(commentid){
		$http.get(url+'getcomment/'+commentid)
		.then(function(response){
			$scope.blogcomments=response.data;
			console.log('get');
		});
	};
	
	$scope.addblogcommentpage=function(blogid){
		$location.path('/addBlogComment');
        $rootScope.blog_id=blogid;
		$location.path('/addBlogComment');
 }
	
	$scope.addblogcomments=function(blogid){
		$location.path("/showBlog");
		console.log('addblogcomments');
		console.log($scope.blogcomments);
		
		$http.post(url+'addBlogComment/'+blogid,$scope.blogcomments)
		.then(function(response){
			$location.path("/showBlog");
			
            console.log('added');
		});
	};
	
	$scope.listblogcommentids=function(blogid){
		$http.get(url+'getBlogComments/'+blogid)
		.then(function(response){
			$scope.blogcommentlist=response.data;
			$location.path("/showBlog");
			console.log('listblogcomments');
		});
	};
	
	
	$scope.listblogcomments=function(){
		$http.get(url+'getBlogComments')
		.then(function(response){
			$scope.blogcommentlist=response.data;
			$location.path("/showBlog");
			console.log('listblogcomments');
		});
	};
	
$scope.updateblogcommentpage=function(commentid){
		
		$rootScope.u_b_comment=commentid;
	 
		$location.path("/updateBlogComment");
	 	
		
				
		
   };
	$scope.updateblogcomments=function(commentid){
		$location.path("/showBlog");
		$http.put(url+'updateBlogComment/'+commentid,$scope.blogcomments)
		.then(function(response){
			$location.path("/showBlog");
			console.log('updateblogcomment-------');
		});
	};
	
	$scope.deleteblogcomments=function(commentid){
		$http.get(url+'deleteBlogComment/'+commentid)
		.then(function(response){
			$location.path("/showBlog");
			console.log('deletblogs-----------');
		});
		
	};
	
	$scope.myVar = false;
	$scope.myid=0;
	var temp=0;
	$scope.toggle = function(blogid) {
        
		$scope.myVar = !$scope.myVar;
        
        $scope.myid=blogid;
    
       };
	
	
	
	
  	
	
});

