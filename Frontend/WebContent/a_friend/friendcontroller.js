var url='http://localhost:8087/connecter/';
app.controller("friendcontrollers",function($scope,$http,$rootScope,$location){
	
	$scope.friends={'friendid':0,'loginname':'','friendloginname':'','status':''};
    $scope.friendlists;
    $scope.requestlists;
    $scope.suggestlists;
    
    
    
    $scope.showfriendlist=function(name){
    	$location.path("/friendList");
    	
    	$http.get(url+'friendlist/'+name)
    	     .then(function(response){
    	    	 $scope.friendlists=response.data;
    	    	 $location.path("/friendList");
    	     });
    }
    
    $scope.showrequestlist=function(name){
       $location.path("/pendingFriendRequestList");
    	
    	$http.get(url+'requestfriendlist/'+name)
    	     .then(function(response){
    	    	 $scope.requestlists=response.data;
    	    	 $location.path("/pendingFriendRequestList");
    	     });
    	
    }
    
    $scope.f_get=function(name){
    	 $http.get(url+'getfriend/'+name)
 	     .then(function(response){
 	    	$rootScope.getfriends=response.data;
 	        $scope.friends=response.data;
 	    	
 	});
    

    }
    
    $scope.showsuggestlist=function(name){
        $location.path("/suggestedFrientList");
     	
                
        
     	$http.get(url+'suggestedfriendlist/'+name)
     	     .then(function(response){
     	    	 $scope.suggestlists=response.data;
     	    	
     	    	 
     	    	 $location.path("/suggestedFrientList");
     	     });
     	
     }

    
    $scope.addfriend=function(){
    	$location.path("/suggestedFrientList");
    	$http.post(url+'friend',$scope.friends)
    	     .then(function(response){
    	    	 $rootScope.currentFriend=response.data;
    	    	 $location.path("/suggestedFrientList");
    	});
    }
    $scope.sendrequest_s=function(from,to){
    	
    	$rootScope.tos=to;
    	$location.path("/suggestedFrientList");
    	$http.post(url+'sendFriendRequest/'+from+'/'+to,$scope.friends)
    	     .then(function(response){
    	    	 $location.path("/suggestedFrientList");
    	});
    }
    $scope.sendrequest_r=function(from,to){
    	$rootScope.fromr=from;
    	$rootScope.tor=to;
    	
    	
    	$location.path("/pendingFriendRequestList");
    	$http.post(url+'sendFriendRequest/'+from+'/'+to,$scope.friends)
    	     .then(function(response){
    	    	 $location.path("/pendingFriendRequestList");
    	});
    }
    
    $scope.aspectrequest=function(friendid){
    	$location.path("/friendList");
    	$http.get(url+'acceptFriendRequest/'+friendid)
    	     .then(function(response){
    	    	 $location.path("/friendList");
    	});
    }
    $scope.rejectrequest=function(friendid){
    	$location.path("/suggestedFrientList");
    	$http.get(url+'rejectFriendRequest/'+friendid)
    	     .then(function(response){
    	    	 $location.path("/suggestedFrientList");
    	});
    }
    $scope.deletefriend=function(friendid){
    	$location.path("/suggestedFrientList");
    	$http.get(url+'deleteFriendRequest/'+friendid)
    	     .then(function(response){
    	    	 $location.path("/suggestedFrientList");
    	});
    }

   $scope.chatpage=function(){
	   
	   $location.path('/chat');
   }

});