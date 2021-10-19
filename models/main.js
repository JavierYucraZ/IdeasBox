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

const login = async ({ email, password }) => {
  const foundUser = accountsData.find(
    (user) => user.email === email && user.password === password
  );

  if (!foundUser) {
    throw "Credenciales invalidas";
  }

  return foundUser;
};

const retrieveUserData = async ({ idUser }) => {
  const foundDataUser = users.find((user) => user.id === idUser);

  if (!foundDataUser) {
    throw "No existe el usuario";
  }

  return foundDataUser;
};

const Main = async () => {
  try {
    const credentials = await login({
      email: "jhCast@hotmail.live",
      password: "vdf321",
    });
    const userData = await retrieveUserData({ idUser: credentials.idUsuario });

    console.log(userData);
  } catch (e) {
    console.log(e);
  }
};

Main();
