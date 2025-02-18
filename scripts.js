document.getElementById("menuBtn").addEventListener("click", function() {
    document.getElementById("mobileMenu").classList.toggle("show");
});
document.getElementById('mobileSearchBtn').addEventListener('click', function() {
    const mobileSearchBar = document.getElementById('mobileSearchBar');
    mobileSearchBar.classList.toggle('hidden');
  });