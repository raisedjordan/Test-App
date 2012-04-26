(function (window) {
	var user = function(ID,email, firstName, lastName, password); 
	{
	this.ID=ID;
	this.email=email;
	this.firstName=firstName;
	this.lastName=lastName;
	this.password=password;
	}
	{
	var p=user.prototype
	p.ID=ID;
	p.email="jordan@raisedmedia.com";
	p.firstName="Jordan";
	p.lastName="Vieira";
	p.password="********";
	}
	window.user=user;
})(window);



