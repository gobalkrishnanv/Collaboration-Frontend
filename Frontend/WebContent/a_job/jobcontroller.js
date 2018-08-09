var count=0;
function toggle(){
var x = document.getElementsByClassName("apply");	
if (count == 0) {
    x.style.backgroundColor = "#00FFFF";
    count = 1;        
}
else {
    x.style.backgroundColor = "#FFFFFF";
    count = 0;
}
}

var url='http://localhost:8087/connecter/';
app.controller("jobcontrollers",function($scope,$http,$rootScope,$location){
	
	$scope.jobs={'jobid':0,'loginname':'','designation':'','role':'','response':'','company':'','location':'','ctc':0,'skill':'','lastdate':''};

     $scope.joblists;
     
     
     $scope.list=function(){
    	$location.path('/showjob');
    	$http.get(url+'jobs')
    	     .then(function(response){
    	    	 $scope.joblists=response.data;
    	    	 $location.path('/showjob');  	 
    	     });
     }
     
     
     
     $scope.list_m=function(){
     	$location.path('/managejob');
     	$http.get(url+'jobs')
     	     .then(function(response){
     	    	 $scope.joblists=response.data;
     	    	 $location.path('/managejob');  	 
     	     });
      }
     
     
     $scope.addjob=function(){
    	 $location.path('/showjob');
    	 $http.post(url+'addjob',$scope.jobs)
    	       .then(function(response){
    	    	   $location.path('/showjob');  
    	       });
     }
     
     
     $scope.addjobpage=function(){
    	 $location.path('/addjob');
    	 
     }
     $scope.updatejobpage=function(jobid){
    	 $location.path('/updatejob');
    	 $rootScope.u_j_id=jobid;
    	 $location.path('/updatejob');
    	 
     }
     $scope.updatejob=function(jobid){
    	 $location.path('/showjob');
    	 $http.put(url+'updatejob/'+jobid,$scope.jobs)
    	      .then(function(response){
    	    	  $location.path('/showjob');
    	      });
     }
     
     $scope.deletejob=function(jobid){
    	 $location.path('/showjob');
    	 $http.get(url+'deletejob/'+jobid)
    	      .then(function(response){
    	    	  $location.path('/showjob');
    	      });
     }
     
     $scope.deletejob_m=function(jobid){
    	 $location.path('/managejob');
    	 $http.get(url+'deletejob/'+jobid)
    	      .then(function(response){
    	    	  $location.path('/managejob');
    	      });
     }
     
     
     
    

          
     $scope.applyjob=function(jobid){
    	 $location.path('/showjob');
    	 $http.get(url+'applyjob/'+jobid)
    	      .then(function(response){
    	    	  $location.path('/showjob');
    	      });
     }
     
     $scope.rejectjob=function(jobid){
    	 $location.path('/showjob');
    	 $http.get(url+'rejectjob/'+jobid)
    	      .then(function(response){
    	    	  $location.path('/showjob');
    	      });
     }
     $scope.rejectjob_m=function(jobid){
    	 $location.path('/managejob');
    	 $http.get(url+'rejectjob/'+jobid)
    	      .then(function(response){
    	    	  $location.path('/managejob');
    	      });
     }

     
});