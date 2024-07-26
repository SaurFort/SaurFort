<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    include('../database.php');
    
    $lang = isset($_GET['lang']) ? $_GET['lang'] : 'en';
    
    $query = "
        SELECT p.id, pt.name, pt.description, p.technologies
        FROM projects p
        JOIN project_translations pt ON p.id = pt.project_id
        WHERE pt.language = ?
    ";
    $stmt = $conn->prepare($query);
    $stmt->bind_param('s', $lang);
    $stmt->execute();
    $result = $stmt->get_result();
    $projects = $result->fetch_all(MYSQLI_ASSOC);
    
    echo json_encode($projects);
?>