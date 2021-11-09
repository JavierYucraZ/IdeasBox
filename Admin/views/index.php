<?php 
$title = "IdeasBox - Administracion";
include('./shared/head.php');

?>
  </head>

  <body>
    <div id="app">
      <?php include("./shared/aside.html") ?>
      <div id="main">
        <header class="mb-3">
          <a href="#" class="burger-btn d-block d-xl-none">
            <i class="bi bi-justify fs-3"></i>
          </a>
        </header>

        <div class="page-heading">
          <h3>Estadisticas Generales</h3>
        </div>
        <div class="page-content">
          <section class="row">
            <div class="col-12">
              <div class="row justify-content-center">
                <div class="col-6 col-lg-3 col-md-6">
                  <a href="./Proyectos-Categoria.php?c=Arte">
                    <div class="card shadow" style="cursor:pointer">
                      <div class="card-body px-3 py-4">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="stats-icon purple">
                              <i class="bi bi-brush"></i>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <h6 class="text-muted font-semibold">Arte</h6>
                            <h6 class="font-extrabold mb-0" id="count_arte"></h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-3 col-md-6">
                  <a href="./Proyectos-Categoria.php?c=Libros-Comics">
                    <div class="card shadow" style="cursor:pointer">
                      <div class="card-body px-3 py-4">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="stats-icon blue">
                              <i class="bi bi-book"></i>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <h6 class="text-muted font-semibold">
                              Libros y Comics
                            </h6>
                            <h6 class="font-extrabold mb-0" id="count_libros_comics"></h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-3 col-md-6">
                  <a href="./Proyectos-Categoria.php?c=Cine">
                    <div class="card shadow" style="cursor:pointer">
                      <div class="card-body px-3 py-4">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="stats-icon green">
                              <i class="bi bi-film"></i>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <h6 class="text-muted font-semibold">Cine</h6>
                            <h6 class="font-extrabold mb-0" id="count_cine"></h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-3 col-md-6">
                  <a href="./Proyectos-Categoria.php?c=Comida">
                    <div class="card shadow" style="cursor:pointer">
                      <div class="card-body px-3 py-4">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="stats-icon red">
                              <i class="bi bi-cart4"></i>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <h6 class="text-muted font-semibold">Comida</h6>
                            <h6 class="font-extrabold mb-0" id="count_comida"></h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-3 col-md-6">
                  <a href="./Proyectos-Categoria.php?c=Juegos">
                    <div class="card shadow" style="cursor:pointer">
                      <div class="card-body px-3 py-4">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="stats-icon yellow">
                              <i class="bi bi-controller"></i>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <h6 class="text-muted font-semibold">Juegos</h6>
                            <h6 class="font-extrabold mb-0" id="count_juegos"></h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-3 col-md-6">
                  <a href="./Proyectos-Categoria.php?c=Musica">
                    <div class="card shadow" style="cursor:pointer">
                      <div class="card-body px-3 py-4">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="stats-icon teal">
                              <i class="bi bi-file-earmark-music"></i>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <h6 class="text-muted font-semibold">Musica</h6>
                            <h6 class="font-extrabold mb-0" id="count_musica"></h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <h4>Recaudacion de fondos por categoria</h4>
                    </div>
                    <div class="card-body">
                      <div id="chart"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <?php include("./shared/footer.html") ?>
    
    <script src="assets/vendors/apexcharts/apexcharts.js"></script>
    <script src="./js/charts.js"></script>
    <script src="./js/getAllByCategory.js"></script>
  </body>
</html>
