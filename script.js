function checkPassword() {
  const input = document.getElementById("password").value;
  const pass = "3007"; // thay đổi mật khẩu tại đây
  if (input === pass) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("birthday-content").style.display = "block";
  } else {
    document.getElementById("message").innerText = "Sai mật khẩu rồi 😢";
  }
}
