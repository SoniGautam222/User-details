let getuser = localStorage.getItem("name");
username.textContent = getuser;

let getemail = localStorage.getItem("email");
useremail.textContent = getemail;

const reader = new FileReader();
  reader.readAsDataURL(getimage);
  reader.onload = () => {
    userimage.src = reader.result;
  };

const getimage = JSON.parse(localStorage.getItem("image"));
console.log(getimage);

