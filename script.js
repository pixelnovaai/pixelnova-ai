const fileInput = document.getElementById("fileInput");
const previewImage = document.getElementById("previewImage");

fileInput.addEventListener("change", function () {
    if (this.files && this.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
        };

        reader.readAsDataURL(this.files[0]);
    }
});
document.getElementById("editBtn").addEventListener("click", function () {
    alert("🤖 AI Editing feature coming soon!");
});

document.getElementById("downloadBtn").addEventListener("click", function () {

    if(previewImage.src){

        const link=document.createElement("a");
        link.href=previewImage.src;
        link.download="PixelNovaAI-Edited.png";
        link.click();

    }else{

        alert("Please upload an image first.");

    }

});
