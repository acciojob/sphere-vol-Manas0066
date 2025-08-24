function volume_sphere() {
    //Write your code here
	 event.preventDefault();
	
	let radius = Number(document.querySelector("#radius").value);

	if(radius < 0 || !radius){
		document.querySelector("#volume").value = "NaN";
	}else{
		let volume = 4/3 * Math.PI * radius *radius*radius;
	    document.querySelector("#volume").value = volume.toFixed(4);
	}
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
