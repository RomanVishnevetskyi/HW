let url = "https://611cbd9aa18e850017decbf3.mockapi.io/test/users";
const getData = () => {
  // let url = "https://611cbd9aa18e850017decbf3.mockapi.io/test/users";
  fetch(url)
    .then((res) => {
      return res.json();
    })
    // .then(data => {
    //   return data.map(item => {
    //     return Object.entries(item);
    //   });
    // })
    .then((data) => {
      return data.map((item) => {
        return item;
      });
    })
    .then((info) => {
      return console.log(info);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const postData = () => {
  fetch(url, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ age: 58, hand: "right" }),
  })
    .then((res) => {
      return res.json();
    })

    .then((info) => {
      return console.log(info);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const putData = (id, job, name, pet) => {
  let urlId = `https://611cbd9aa18e850017decbf3.mockapi.io/test/users/${id}`;
  fetch(urlId, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ job: job, name: name, pet: pet }),
  })
    .then((res) => {
      return res.json();
    })

    .then((info) => {
      return console.log(info);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const deleteData = (id) => {
  let urlId = `https://611cbd9aa18e850017decbf3.mockapi.io/test/users/${id}`;
  fetch(urlId, {
    method: "DELETE",
  })
    .then((res) => {
      return res.json();
    })

    .then((info) => {
      return console.log(info);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// postData();
// putData(51, "Pekar", "Vasia", "aligator");
getData();
// deleteData(3);
