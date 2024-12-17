// videoConfig.js

// Domain Lock (restrict to specific domains)
const allowedDomains = [
  'https://criccoder264.pages.dev/test',
  'https://criccoder264.pages.dev'
];

// Get the current URL
const currentUrl = window.location.href;

// Check if the current URL starts with any allowed domains
if (!allowedDomains.some(url => currentUrl.startsWith(url))) {
  alert('This content is not available on your domain.');
  window.location.href = "https://telegram.me/criccoder"; // Redirect to Telegram or show a message
}

// Manually define video configurations (with M3U8 URLs)
const videoConfigs = {
  "1": { "url": "https://vkvsd55.okcdn.ru/cmaf/7443308808935/sig/esxrZxGt2cE/srcIp/3.110.165.205/urls/45.136.22.88/expires/1734569291503/clientType/13/srcAg/CHROME/fromCache/1/mid/9109154376679/id/7443308808935/get/dash_9109154376679.FR5QsSfmxmU.mpd" },
  "2": { "url": "https://vkvsd14.okcdn.ru/cmaf/7465941011175/sig/D1esK-EFWhc/srcIp/13.202.136.237/urls/185.226.53.94/expires/1734812039320/clientType/13/srcAg/CHROME/fromCache/1/mid/9161388141543/id/7465941011175/get/dash_9161388141543.yi5Gc1pbmz0.mpd" },
  "3": { "url": "https://vkvsd14.okcdn.ru/cmaf/7333724293676/sig/Q4AWMsBSn5Y/expires/1734491746908/srcIp/172.69.95.124/urls/45.136.20.36/clientType/13/srcAg/CHROME/mid/7917468068652/get/hls_7917468068652.J40GMVFt0Z4.m3u8" },
  "4": { "url": "https://jiotvbpklive.cdn.jio.com/bpk-tv/IDCDemo_IPL23_Sports18_MOB/Fallback/IDCDemo_IPL23_Sports18.m3u8" },
  "5": { "url": "https://prod-sports-eng-cf.jiocinema.com/hls/live/2100307/hd_akamai_merged_avc_eng_cricket_m9_171224/master.m3u8" },
  "6": { "url": "https://prod-sports-eng-cf.jiocinema.com/hls/live/2100307/hd_akamai_merged_avc_eng_cricket_m9_171224/master.m3u8" }
};

// Get the 'id' parameter from the URL (default to '1' if not found)
const urlParams = new URLSearchParams(window.location.search);
const streamId = urlParams.get('id') || '1';  // Default to '1' if 'id' is not found in URL

// Get the video configuration for the given 'id'
const videoConfig = videoConfigs[streamId];

if (videoConfig && videoConfig.url) {
  // Store the video URL globally so it can be accessed by playerSetup.js
  window.videoUrl = videoConfig.url;
} else {
  console.error("Video configuration not found or invalid.");
}

// Confirmation message for joining Telegram channel
var a = confirm("Join For More Links!!");
if (a == true) {
  window.location.href = "https://telegram.me/Criccoder";  // Updated Telegram channel link
}

