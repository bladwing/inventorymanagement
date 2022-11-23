export const userName = JSON.parse(localStorage.getItem("Login"));

export const LogOut = () => {
  localStorage.clear() || window.location.reload();
};
