function fshij(id){
    fetch("http://localhost:3000/book-profile/"+id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
           window.location.reload();
          } else {
            // Handle error case
            console.error('Delete request failed');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
}

function fshij2(id){
  fetch("http://localhost:3000/blerjet/"+id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      console.log(response)
      // if (response.ok) {
      window.location.reload()
      // } else {
      //   // Handle error case
      //   console.error('Delete request failed');
      // }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


function edito(id){
  fetch("http://localhost:3000/book-profile/"+id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
           window.location.reload();
          } else {
            // Handle error case
            console.error('Delete request failed');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
}


    //mbrojtje-Shtator

    function fshijNdertesen(id){
      fetch("http://localhost:3000/ndertesa/"+id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(response)
          // if (response.ok) {
          window.location.reload()
          // } else {
          //   // Handle error case
          //   console.error('Delete request failed');
          // }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    function fshijAshencorin(id){
      fetch("http://localhost:3000/ashencori/"+id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(response)
          // if (response.ok) {
          window.location.reload()
          // } else {
          //   // Handle error case
          //   console.error('Delete request failed');
          // }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }


    //mbrojtje qershor

    function fshijBanken(id){
      fetch("http://localhost:3000/banka/"+id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(response)
          // if (response.ok) {
          window.location.reload()
          // } else {
          //   // Handle error case
          //   console.error('Delete request failed');
          // }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    
