const users = [
  {
    id: 1,
    nombre: "Abigail",
    apellido: "Flores",
    genero: "F",
    pais: "Bolivia",
  },
  { id: 2, nombre: "Gonzalo", apellido: "Reinaga", genero: "V", pais: "Chile" },
  {
    id: 3,
    nombre: "Fernanda",
    apellido: "Zegarra",
    genero: "F",
    pais: "Argentina",
  },
  {
    id: 4,
    nombre: "Jhonatan",
    apellido: "Castillo",
    genero: "V",
    pais: "Bolivia",
  },
  { id: 5, nombre: "Silvia", apellido: "Lima", genero: "F", pais: "Colombia" },
  { id: 6, nombre: "Miguel", apellido: "Dorado", genero: "V", pais: "Brasil" },
];

const accountsData = [
  { id: 1, email: "abfl@gmail.com", password: "123qwe", idUsuario: 1 },
  { id: 2, email: "gnrg@hotmail.com", password: "435zxc", idUsuario: 2 },
  { id: 3, email: "ferZ@outlook.es", password: "asd123", idUsuario: 3 },
  { id: 4, email: "jhCast@hotmail.live", password: "vdf321", idUsuario: 4 },
  { id: 5, email: "slLima@gmail.com", password: "2154qwe", idUsuario: 5 },
  { id: 6, email: "migDD@gmail.com", password: "5599qwe", idUsuario: 6 },
];

const roles = [
  { id: 1, idUser: 2, role: "empresario" },
  { id: 2, idUser: 3, role: "empresario" },
  { id: 3, idUser: 1, role: "inversor" },
  { id: 4, idUser: 6, role: "empresario" },
  { id: 5, idUser: 4, role: "inversor" },
  { id: 6, idUser: 5, role: "empresario" },
];

/* -------------------------------------------------------------------------- */
/*                                Autenticacion                               */
/* -------------------------------------------------------------------------- */
const login = async ({ email, password }) => {
  const foundAccount = accountsData.find(
    (user) => user.email === email && user.password === password
  );

  if (!foundAccount) {
    throw "Credenciales invalidas";
  }

  return foundAccount;
};

const retrieveUserData = ({ idUser }) => {
  const foundUser = users.find((user) => user.id === idUser);

  if (!foundUser) {
    throw "No existe el usuario";
  }

  return foundUser;
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                              Filtrado de roles                             */
/* -------------------------------------------------------------------------- */
const getAllByRole = async ({ role }) => {
  const filterData = roles
    .filter((userRole) => userRole.role === role)
    .map((id) => {
      return users.find((user) => user.id === id.idUser);
    });
  return filterData;
};

const getAllUserByRole = async ({ arrIdUsers }) => {};
/* -------------------------------------------------------------------------- */

const Auth = async () => {
  try {
    const credentials = await login({
      email: "jhCast@hotmail.live",
      password: "vdf321",
    });
    const userData = retrieveUserData({ idUser: credentials.idUsuario });
    console.log(userData);
  } catch (e) {
    console.log(e);
  }
};

// Auth();

const FilterData = async () => {
  try {
    const filterByRole = await getAllByRole({ role: "empresario" });
    if (filterByRole.length > 0) {
      console.log(filterByRole);
    } else {
      console.log("No existen usuarios con ese rol");
    }
  } catch (error) {
    console.log(error);
  }
};

FilterData();
