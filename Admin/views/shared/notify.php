<script>
    <?php if(isset($_SESSION['notify'])): ?> 
    swal("Realizado", "<?= $_SESSION['notify'] ?>", "<?= $_SESSION['icon']?>");
    <?php endif?>
    <?php 
        $_SESSION['notify'] = null;
        $_SESSION['icon'] = null;
    ?>
</script>