let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let image = document.getElementById("image");
  const file=image.files[0];

  console.log(file);
  localStorage.setItem("image",JSON.stringify(file));
  
  
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  // localStorage.setItem("image", image);
 
});
