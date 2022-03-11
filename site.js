function OpenImageModal(imagePath, imagealt) {
    document.getElementById('modalimg').src = imagePath;
    document.getElementById('myModal').style.display = 'block';
    document.querySelector(".navbar").classList.remove("sticky-top");
    document.querySelector(".navbar").classList.add("d-none");
    document.getElementById("caption").innerHTML = imagealt;
}

function closeImageModal() {
    document.getElementById('myModal').style.display = 'none';
    document.querySelector(".navbar").classList.add("sticky-top");
    document.querySelector(".navbar").classList.remove("d-none");
}