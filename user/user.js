(function (window) 
{
	var user = function(ID, emailAddress, firstName, lastName, password); 
	{
	  this.initialize(ID);
	  this.initialize(emailAddress);
	  this.initialize(firstName);
	  this.initialize(lastName);
	  this.initialize(password);
	}
	var p=user.prototype
	  
	  p.ID="JordanVieira";
	  p.email="jordan@raisedmedia.com";
	  p.firstName="Jordan";
	  p.lastName="Vieira";
	  p.password="********";
	
	p.initialize = function(ID, emailAddress, firstName, lastName, password);
	{
		this.ID = ID;
		this.emailAddress = emailaddress;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
	}
	window.user=user;
})(window);



