
	var url='http://localhost:8087/connecter/';

app.controller("usercontroller",function($scope,$http,$rootScope,$location,$window,$cookieStore){
	$scope.user={'loginname':'','password':'','username':'','emailid':'','mobile':'','role':'','address':''};
	$scope.removeuser={'loginname':'','password':'','username':'','emailid':'','mobile':'','role':'','address':''};

	$scope.checklogin=function(name,password)
	{
		console.log('check login');
		console.log($scope.user);
		$http.post(url+'checkLogin',$scope.user)
		.then(function(response){
			$scope.user=response.data;
            console.log($scope.user.loginname==name);
            console.log($scope.user.loginname);
            console.log($scope.user.role);
            if($scope.user.loginname==name && $scope.user.password==password && $scope.user.role=='admin' ){
						$rootScope.currentUser=response.data;
			
			
			
			$cookieStore.put('userDetails',response.data);
			console.log('user is correct');
			$location.path("/manageBlog");}
			else if($scope.user.loginname==name && $scope.user.password==password && $scope.user.role=='user' ){
				$rootScope.currentUser=response.data;
				
				
				
				$cookieStore.put('userDetails',response.data);
				console.log('user is correct');
				$location.path("/addBlog");
			}else{
				$location.path("/login");
			}
		});
	}
	
	
	
	
	$scope.registeruser=function()
	{
		
		console.log('register');
		console.log($scope.user);
		$location.path("/login");

		$http.post(url+'registerUser',$scope.user)
		.then(function(response){
			console.log('user register');
			$rootScope.currentUser=$scope.user;
			$location.path("/login");
			});
		}
	
	$scope.registeradmin=function()
	{
		
		console.log('register');
		console.log($scope.user);
		$location.path("/login");

		$http.post(url+'registerAdmin',$scope.user)
		.then(function(response){
			console.log('user register');
			$rootScope.currentUser=$scope.user;
			$location.path("/login");
			});
		}
	
	   $scope.logout=function(){
		
		console.log('logout');
		$rootScope.currentUser={'loginname':'','password':'','username':'','emailid':'','mobile':'','role':'','address':''};
		
		$cookieStore.put('userDetails',$scope.removeuser);
		
		$location.path("/logout");
		
	   } 
	$scope.profiles={'profileid':0,'loginname':'','image':''};
	$scope.profileupload=function(){
		$location.path("/addBlog");
		$http.post(url+'doUpload',$scope.profiles)
		.then(function(response){
			$location.path("/home");	
		});
	}
	
	$scope.profileimage=function(name){
		$location.path("/picture");
		$http.get(url+'getImage/'+name)
		.then(function(response){
			
			$location.path("/picture");	
		});
	}
});