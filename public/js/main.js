const { response } = require("express");

async function updateEmrin(field, id) {
  let value = document.getElementById("emriRi");

  let data = { field:field, value:value.value, id:id };
  try {
    let hello = await fetch("http://localhost:3000/user-profile", {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await hello.json();
    console.log(result);

    window.location.reload();
  } catch (err) {
    console.log(err);
  }
}
async function updateMbiemrin(field, id) {
  let value = document.getElementById("mbiemriRi");

  let data = { field:field, value:value.value, id:id };
  try {
    let hello = await fetch("http://localhost:3000/user-profile", {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await hello.json();
    console.log(result);

    window.location.reload();
  } catch (err) {
    console.log(err);
  }
}
async function updateEmailin(field, id) {
  let value = document.getElementById("emailiRi");

  let data = { field:field, value:value.value, id:id };
  try {
    let hello = await fetch("http://localhost:3000/user-profile", {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await hello.json();
    console.log(result);

    window.location.reload();
  } catch (err) {
    console.log(err);
  }
}
async function updateBio(field, id) {
  let value = document.getElementById("bioRe");

  let data = { field:field, value:value.value, id:id };
  try {
    let hello = await fetch("http://localhost:3000/user-profile", {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await hello.json();
    console.log(result);

    window.location.reload();
  } catch (err) {
    console.log(err);
  }
}



function fshij(id) {
  fetch("http://localhost:3000/book-profile/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        window.location.reload();
      } else {
        // Handle error case
        console.error("Delete request failed");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function playerf(id) {
  fetch("http://localhost:3000/player/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        window.location.reload();
      } else {
        // Handle error case
        console.error("Delete request failed");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function fshij2(id) {
  fetch("http://localhost:3000/blerjet/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      // if (response.ok) {
      window.location.reload();
      // } else {
      //   // Handle error case
      //   console.error('Delete request failed');
      // }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function edito(id) {
  fetch("http://localhost:3000/book-profile/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        window.location.reload();
      } else {
        // Handle error case
        console.error("Delete request failed");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function fshijSatellit(id) {
  fetch("http://localhost:3000/satellite/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function fshijSculpture(id) {
  fetch("http://localhost:3000/sculpture/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
