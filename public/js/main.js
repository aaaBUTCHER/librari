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

function fshijSatellit(id){
  fetch("http://localhost:3000/satellite/"+id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
         window.location.reload();
      })
      .catch(error => {
        console.error('Error:', error);
      });
}

function fshijSculpture(id){
  fetch("http://localhost:3000/sculpture/"+id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
         window.location.reload();
      })
      .catch(error => {
        console.error('Error:', error);
      });
}