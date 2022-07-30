const $bros = $(".brosbtn");
const $results = $(".results");
const $gyms = $(".gymsbtn");
const $reset = $(".reset");
const $registration = $(".container");
const $formData = $("#regForm");
const $signup = $(".signupbtn");

// test
// function setAction(form) {
//     form.action = "registrationPage.html";
//     alert(form.action);
//     return false;
//   }
//"INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ($1, $2, $3, $4, $5) RETURNING*;",
// end of test
$signup.click(() => {
    const info = {
    firstname: $("#fname").val(),
    lastname: $("#lname").val(),
    address: $("#address").val(),
    email: $("#email").val(),
    gym_id: 1,
  };
  const stringy = JSON.stringify(info);

  $.post("/bros", (stringy), () => {
    console.log(stringy);
  });
});

//all bros
$bros.click(() => {
  $.get("/bros", (res) => {
    $results.html("<h3>Query results:</h3>");
    const $etup = $(
      `<tr>
        <th><b>Full Name</b></th>
        <th><b>Address</b></th>
        <th><b>Email</b></th>
        <th><b>Gym</b></th></tr>`
    ).appendTo($results);
    for (let i = 0; i < res.length; i++) {
      let current = res[i];
      const { id, firstname, lastname, address, email, gym_id } = current;
      const $bro = $(
        `<tr>
        <td>${firstname} ${lastname}</td>
        <td>${address}</td>
        <td>${email}</td>
        <td>${gym_id}</td></tr>` //change this to a query and get the gym name instead of displaying gym ID
      ).appendTo($results);
    }
  });
});
//all gyms
$gyms.click(() => {
  $results.html("<h3>Query Results:</h3>");
  $.get("/gyms", (res) => {
    const $gymresults = $(
      `<tr>
        <td><b>Name</b></td>
        <td><b>Address</b></td>`
    ).appendTo($results);
    for (let i = 0; i < res.length; i++) {
      let current = res[i];
      const { name, address } = current;
      const $gym = $(
        `<tr>
        <td><b>${name}</b></td>
        <td><b>${address}</b></td>`
      ).appendTo($results);
    }
  });
});
//reset query
$reset.click(() => {
  $results.html("");
});
