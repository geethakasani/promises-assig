// create a function and following the progressions inside the function.

// Progression 1: Create a promise call which fetches data
// Progression 2: Display the fetched data in the form of list
// Progression 3: When the promise call is rejected then throw an error


document.addEventListener('DOMContentLoaded', function () {
  const btnGet = document.getElementById('btnGet');
  const message = document.getElementById('message');

  btnGet.addEventListener('click', function () {
    fetchUsers()
      .then((result) => {
        let userListHTML = '<h2></h2>';
        result.forEach((user) => {
          userListHTML += `
                            <div class="box">
                                <div class="player">
                                    <div class="strength">Name : ${user.name}</div>
                                    <div>Email   : ${user.email}</div>
                                    <div>Phone   : ${user.phone}</div>
                                    <div>Website : ${user.website}</div>
                                    <div>Company : ${user.company.name}</div>
                                    <div>City    : ${user.address.city}</div>
                                    <div>Zipcode : ${user.address.zipcode}</div>
                                </div>
                            </div>`;
          // Display user details in console
          console.log('User:', user);
        });
        message.innerHTML = userListHTML;
      })
      .catch((error) => {
        message.textContent = 'Error: Failed to fetch user data.';
        console.error('Error:', error);
      });
  });

  const fetchUsers = () => {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch user data.');
          }
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  };
});
