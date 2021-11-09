const reqFetch = async (categoria) => {
  const request = await fetch(
    `http://localhost/ideasbox/controllers/proyecto.php?service=getSumCollectedByCategory`,
    {
      method: "POST",
      body: JSON.stringify({ category: categoria }),
    }
  );
  return await request.json();
};

const getAllCollectedByCategory = async () => {
  const arte = await reqFetch("Arte");
  const libros_comics = await reqFetch("Libros-Comics");
  const cine = await reqFetch("Cine");
  const comida = await reqFetch("Comida");
  const juegos = await reqFetch("Juegos");
  const musica = await reqFetch("Musica");

  var options = {
    series: [
      {
        name: "Recaudado",
        data: [
          `${arte.Total || 0}$`,
          `${libros_comics.Total || 0}$`,
          `${cine.Total || 0}$`,
          `${comida.Total || 0}$`,
          `${juegos.Total || 0}$`,
          `${musica.Total || 0}$`,
        ],
      },
    ],
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "$";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: [
        "Arte",
        "Libros y Comics",
        "Cine",
        "Comida",
        "Juegos",
        "Musica",
      ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "$";
        },
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
};

getAllCollectedByCategory();
