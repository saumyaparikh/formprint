const printform = document.querySelector("#printform");
const ullist = document.querySelector("#prints");
printform.addEventListener("submit", function (e) {
  e.preventDefault();

  //   const usernameInput = document.querySelector("validationCustom01");
  const firstname = printform.elements.fname.value;
  const lastname = printform.elements.lname.value;
  const username = printform.elements.uname.value;
  const city = printform.elements.city.value;
  const state = printform.elements.state.value;
  const zip = printform.elements.zip.value;
  //   console.log(state);
  const list = document.createElement("li");

  list.append(`First Name: ${firstname}, `);
  list.append(`Last Name: ${lastname}, `);
  list.append(`Username: ${username}, `);
  list.append(`City: ${city}, `);
  list.append(`State: ${state}, `);
  list.append(`Zip: ${zip}.`);

  ullist.append(list);
  //   myfun("prints");
});
function myfun(paravalue) {
  let bu = document.body.innerHTML;
  let divc = document.getElementById(paravalue).innerHTML;
  document.body.innerHTML = divc;
  window.print();
  document.body.innerHTML = bu;
}
