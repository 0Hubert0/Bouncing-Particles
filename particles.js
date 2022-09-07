var x_velocity = new Array(100);
var y_velocity = new Array(100);
var x = new Array(100);
var y = new Array(100);
var noc=0;

addEventListener("click", add, true);
setInterval(check, 10);

function add()
{
	var Particle = document.createElement("div");
	document.getElementById("content").appendChild(Particle);
	x[noc] = Math.floor(Math.random()*1217)+30;
	var x_axis=x[noc]+"px";
	y[noc] = Math.floor(Math.random()*490)+32;
	var y_axis=y[noc]+"px";
	Particle.setAttribute("class","particle");
	var xx="p"+noc;
	Particle.setAttribute("id", xx);
	Particle.style.setProperty("left", x_axis);
	Particle.style.setProperty("top", y_axis);
	
	y_velocity[noc] = Math.floor(Math.random()*10);
	x_velocity[noc] = Math.floor(Math.random()*10);
	noc++;
}

function check()
{
	for(var i=0; i<noc; i++)
	{
		y[i]+=y_velocity[i];
		var left = x[i]+"px";	
		x[i]+=x_velocity[i];
		var top = y[i]+"px";
		var o = "p"+i;
		var b=document.getElementById(o);
		b.style.setProperty("top", top);
		b.style.setProperty("left", left);
		
		if(y[i]<30){y_velocity[i]*=-1;}
		if(y[i]>520){y_velocity[i]*=-1;}
		if(x[i]<29){x_velocity[i]*=-1;}
		if(x[i]>1245){x_velocity[i]*=-1;}
	}
}