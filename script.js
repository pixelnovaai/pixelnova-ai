const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", function(){

if(this.files.length>0){

alert("Selected: " + this.files[0].name);

}

});
