const app = document.getElementById('app');

const Home = () => {
  return `<h1>Welcome to the Home Page</h1>`;
};

const ListPage = () => {
  return `<h1>This is the List Page</h1>`;
};

const AddPage = () => {
  return `<h1>This is the Add Page</h1>`;
};

function renderRoute() {
  const route = window.location.hash;

  switch (route) {
    case '#/list':
      app.innerHTML = ListPage();
      break;
    case '#/add':
      app.innerHTML = AddPage();
      break;
    case '#/':
    default:
      app.innerHTML = Home();
      break;
  }
}

// Initial render
renderRoute();

// Listen to hash changes
window.addEventListener('hashchange', renderRoute);
