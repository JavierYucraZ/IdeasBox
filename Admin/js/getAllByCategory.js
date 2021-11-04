const count_arte = document.getElementById("count_arte"),
  count_libros_comics = document.getElementById("count_libros_comics"),
  count_cine = document.getElementById("count_cine"),
  count_comida = document.getElementById("count_comida"),
  count_juegos = document.getElementById("count_juegos"),
  count_musica = document.getElementById("count_musica");

const baseRequest = async (category) => {
  const body = {
    category: category,
  };
  const request = await fetch(
    `http://localhost/IdeasBox/controllers/proyecto.php?service=getAllByCategory`,
    { method: "POST", body: JSON.stringify(body) }
  );
  return await request.json();
};

const requestAllCount = async () => {
  let allCount = await baseRequest("Arte");
  count_arte.innerText = allCount.length+" Proyectos";

  allCount = await baseRequest("Libros-Comics");
  count_libros_comics.innerText = allCount.length+" Proyectos";

  allCount = await baseRequest("Cine");
  count_cine.innerText = allCount.length+" Proyectos";

  allCount = await baseRequest("Comida");
  count_comida.innerText = allCount.length+" Proyectos";

  allCount = await baseRequest("Juegos");
  count_juegos.innerText = allCount.length+" Proyectos";

  allCount = await baseRequest("Musica");
  count_musica.innerText = allCount.length+" Proyectos";
};

requestAllCount();
