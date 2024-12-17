<?php
// Check if the 'id' parameter is passed in the URL
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // You can define different video URLs based on the ID parameter
    $videoConfigs = [
        "1" => [
            "url" => "https://prod-sports-eng-cf.jiocinema.com/hls/live/2100307/hd_akamai_merged_avc_eng_cricket_m9_171224/master.m3u8"
        ],
        "5" => [
            "url" => "https://somevideo.com/video5.m3u8"
        ],
        // Add more stream configurations as needed
    ];

    // Check if the requested ID exists in the configuration
    if (array_key_exists($id, $videoConfigs)) {
        // Send JSON response
        header('Content-Type: application/json');
        echo json_encode([$id => $videoConfigs[$id]]);
    } else {
        // If the ID is not valid, return an error response
        header('Content-Type: application/json');
        echo json_encode(["error" => "Invalid stream ID"]);
    }
} else {
    // If 'id' parameter is not passed, return an error
    header('Content-Type: application/json');
    echo json_encode(["error" => "No ID parameter provided"]);
}
?>
