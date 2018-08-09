var url='http://localhost:8087/connecter/';

app.controller("forumcontrollers",function($scope,$http,$rootScope,$location,$window,$timeout){
	$scope.forums={'forumid':0,'forumname':'','forumcontent':'','loginname':'','likes':'','dislikes':'','status':''};
	$scope.forumcomments={'commentid':0,'forumid':0,'discussiontext':'','loginname':'','commentdate':''};
	
	$scope.forumlist;
	$scope.forumcommentlist;
	
     
	
	$scope.addforums=function()
	{
		console.log('forumsa');
		console.log($scope.forums);
		$location.path("/showforum");

		$http.post(url+'addForum',$scope.forums)
		.then(function(response){
			console.log('forum added');
			$rootScope.currentforum=$scope.forums;
			$location.path("/showforum");
			});
		}
	$scope.listforums=function(){
		console.log('showforum');
		
		$http.get(url+'listForums')
		.then(function(response){
			console.log('listforum');
			$scope.forumlist=response.data;
			console.log($scope.forumlist);
			$location.path("/showforum");

		});
	};
	
	$scope.listforums_m=function(){
		console.log('showforum');
		
		$http.get(url+'listForums')
		.then(function(response){
			console.log('listforum');
			$scope.forumlist=response.data;
			console.log($scope.forumlist);
			$location.path("/manageforum");

		});
	};
	
	$scope.listforumarrange=function(){
		$location.path("/showforum");
		$http.get(url+'getforumList_Arra')
		     .then(function(response){
		    	 
		    	 $scope.forumarrangelist=response.data;
		    	 $location.path("/showforum");
		     });
		
	}
	
	$scope.likeforums=function(forumid){
		$http.get(url+'forumLike/'+forumid)
		.then(
		function(response){
			$location.path("/showforum");
			console.log('likes');
		}		
		
		);
	};
	
	$scope.dislikeforums=function(forumid){
		$http.get(url+'forumDisLike/'+forumid)
		.then(function(response){
			$location.path("/showforum");
			console.log('dislikes');
			
		});
		
	};
	
	$scope.approveforums=function(forumid){
		$http.get(url+'approveForum/'+forumid)
		.then(function(response){
			$location.path("/manageforum");
			console.log('approve');
		});
		
	};
	
	
	$scope.rejectforums=function(forumid){
		$location.path("/manageforum");
		$http.get(url+'rejectForum/'+forumid)
		.then(function(response){
			$location.path("/manageforum");
			console.log('reject');
		});
	};
	
	
	$scope.deleteforums=function(forumid){
		$location.path("/showforum");

		$http.get(url+'deleteForum/'+forumid)
		.then(function(response){
			$location.path("/showforum");
			console.log('delete')
		});
	};
	
	$scope.deleteforums_m=function(forumid){
		
		$location.path("/manageforum");

		$http.get(url+'deleteForum/'+forumid)
		.then(function(response){
			$location.path("/manageforum");
			console.log('delete')
		});
	};
	
	
	$scope.updateforumpage=function(forumid){
		
		$rootScope.u_forum_id=forumid;
	 
		$location.path("/updateforum");
	 	
		
		
		
   };
	
   $scope.addforumpage=function(forumid){
		
		
		$location.path("/addforum");
		
		
		
  };
   
	$scope.updateforums=function(forumid){
		
		$location.path("/showforum");

		$http.put(url+'updateForum/'+forumid,$scope.forums)
		.then(function(response){
			$location.path("/showforum");
			console.log('update');
		});
	};
	
	$scope.getforums=function(forumid){
		$http.get(url+'getforum/'+forumid)
		.then(function(response){
			$scope.forums=response.data;
			console.log('get');
		});
	};
	
	$scope.getforumcomments=function(commentid){
		$http.get(url+'getcomment/'+commentid)
		.then(function(response){
			$scope.forumcomments=response.data;
			console.log('get');
		});
	};
	
	$scope.addforumcommentpage=function(forumid){
		$location.path('/addforumcomment');
        $rootScope.forum_id=forumid;
		$location.path('/addforumcomment');
 }
	
	$scope.addforumcomments=function(forumid){
		$location.path("/showforum");
		console.log('addforumcomments');
		console.log($scope.forumcomments);
		
		$http.post(url+'addForumComment/'+forumid,$scope.forumcomments)
		.then(function(response){
			$location.path("/showforum");
			
            console.log('added');
		});
	};
	
	$scope.listforumcommentids=function(forumid){
		$http.get(url+'getForumComments/'+forumid)
		.then(function(response){
			$scope.forumcommentlist=response.data;
			$location.path("/showforum");
			console.log('listforumcomments');
		});
	};
	
	
	$scope.listforumcomments=function(){
		$http.get(url+'getForumComments')
		.then(function(response){
			$scope.forumcommentlist=response.data;
			$location.path("/showforum");
			console.log('listforumcomments');
		});
	};
	
$scope.updateforumcommentpage=function(commentid){
	$location.path("/updateforumcomment");
		$rootScope.u_f_comment=commentid;
	 
		$location.path("/updateforumcomment");
	 	
		
				
		
   };
	$scope.updateforumcomments=function(commentid){
		$location.path("/showforum");
		$http.put(url+'updateForumComment/'+commentid,$scope.forumcomments)
		.then(function(response){
			$location.path("/showforum");
			console.log('updateforumcomment-------');
		});
	};
	
	$scope.deleteforumcomments=function(commentid){
		$http.get(url+'deleteForumComment/'+commentid)
		.then(function(response){
			$location.path("/showforum");
			console.log('deletforums-----------');
		});
		
	};
	
	$scope.myVar = false;
	$scope.myid=0;
	var temp=0;
	$scope.toggle = function(forumid) {
        
		$scope.myVar = !$scope.myVar;
        
        $scope.myid=forumid;
    
       };
	
	
	
	
  	
	
});

