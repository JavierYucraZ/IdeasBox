<?php 

include("./../config/session.php");

$title = "Proyectos pendientes";
include("./shared/head.php");

include('./php/requestDataModel.php');

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
                <h3>Proyectos pendientes</h3>
            </div>
            <div class="page-content">
                <section class="row">
                    <div class="col-12">
                        <div class="card p-3">
                            <div class="row justify-content-between text-center">
                                <div class="col-12">
                                    <?php foreach($accepted as $index => $proyect) :?>
                                    <div class="card border p-2 shadow-sm">
                                        <div class="row align-items-center justify-content-center">
                                            <div class="col-5 col-lg-3">
                                                <img src="<?= $proyect['poster'] ?>" class="card-img" alt="<?= $proyect['poster'] ?>" />
                                            </div>
                                            <div class="col-lg-8">
                                                <h3><?= $proyect["titulo"] ?></h3>
                                                <p class="mt-2">
                                                  <?= $proyect['descripcion']?>
                                                </p>
                                                <div class="d-flex justify-content-around">
                                                    <p class="mt-3 text-success">
                                                        Monto Solicitado : <?= $proyect['meta'] ?>
                                                    </p>
                                                    <p class="mt-3 text-success">
                                                        Monto Recaudado : <?= $proyect['recaudado'] ?>
                                                    </p>
                                                    
                                                </div>
                                                <div class="d-flex justify-content-around">
                                                <p class="mt-3 text-primary">
                                                        Patrocinadores : <?= $proyect['patrocinadores'] ?>
                                                    </p>
                                                    <p class="mt-3 text-primary">
                                                        Categoria : <?= $proyect['categoria'] ?>
                                                    </p>
                                                </div>

                                                <hr />
                                                <div class="text-end">
                                                    <a class="btn btn-danger" href="./php/removeProyect.php?id=<?= $proyect['id'] ?>">Eliminar definitivamente</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <?php endforeach ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <?php include("./shared/footer.html") ?>
            <?php include("./shared/notify.php") ?>
</body>

</html>