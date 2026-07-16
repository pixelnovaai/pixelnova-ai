const API_KEY = "5b7b8c5dca59aff57c7d518ee174ecdd103e7...";
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
document.getElementById("editBtn").addEventListener("click", async () => {

    const file = document.getElementById("fileInput").files[0];

    if (!file) {
        alert("Please upload an image first.");
        return;
    }

    alert("AI is processing your image...");
});
