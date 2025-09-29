<?php
header('Content-Type: application/json');
$videoDir = 'media/videos';
$videos = glob($videoDir . '/*.mp4');
$videoFilenames = array_map('basename', $videos);
echo json_encode($videoFilenames);
?>