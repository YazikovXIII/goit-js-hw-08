import Player from '@vimeo/player';
import _ from 'lodash';

const player = new Player('vimeo-player');

const playedTime = localStorage.getItem('videoplayer-current-time');
if (playedTime) {
  player.setCurrentTime(playedTime);
}

player.on('timeupdate', _.throttle(timeCheck, 1000));

function timeCheck(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}
