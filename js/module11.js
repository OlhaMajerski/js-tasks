function foo(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
}
foo(1);

//another way

/* function foo1(id) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/posts';
  const params = `?userId=${id}`;
  const url = BASE_URL + END_POINT + params;

  fetch(url);
}

foo1(10); */

function fetchUser(id) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/users';
  const params = new URLSearchParams({
    id: id,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  /* fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    }); */

  return fetch(url).then(response => response.json());
}
fetchUser(1);
