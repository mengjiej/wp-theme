<?php
    $ID = $_GET['id'];
    $image_url = get_post_thumbnail($ID);
    echo $image_url[0];
    //header("location:$full_image_url") 
?>