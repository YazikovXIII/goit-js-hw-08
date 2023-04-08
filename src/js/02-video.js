import Player from '@vimeo/player';

const player = new Player('vimeo-player');

const playedTime = localStorage.getItem('videoplayer-current-time');
if (playedTime) {
  player.setCurrentTime(playedTime);
}

player.on('timeupdate', timeCheck);

function timeCheck(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}
