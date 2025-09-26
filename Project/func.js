window.onload = function () {
  document.getElementById("registerModal").style.display = "flex";
  document.body.style.overflow = "hidden";
};
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("registerForm").onsubmit = function (e) {
    e.preventDefault();
    var pw = document.getElementById("regPassword").value;
    var cpw = document.getElementById("regConfirmPassword").value;
    if (pw !== cpw) {
      alert("Passwords do not match!");
      return;
    }
    document.getElementById("registerModal").style.display = "none";
    document.body.style.overflow = "";
  };

  document.getElementById("closeRegisterModal").onclick = function () {
    document.getElementById("registerModal").style.display = "none";
    document.body.style.overflow = "";
  };

  document.getElementById("openRegisterModal").onclick = function () {
    document.getElementById("registerModal").style.display = "flex";
    document.body.style.overflow = "hidden";
  };
});
