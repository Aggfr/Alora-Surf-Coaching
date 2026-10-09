import { useRef, useState } from 'react';
import { cx } from '../../../lib/cx';
import { Icon } from '../../atoms/icon/Icon';

export interface VideoPlayerProps {
  src: string;
  /** Accessible name of the player, usually the clip title. */
  title: string;
  poster?: string;
  className?: string;
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds)) return '0:00';
  const whole = Math.floor(seconds);
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`;
}

/** Organism · Clip player with play, timeline, sound and full screen. Docs: ./VideoPlayer.docs.md */
export function VideoPlayer({ src, title, poster, className }: VideoPlayerProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      Promise.resolve(video.play()).catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <figure ref={frameRef} aria-label={title} className={cx('ds-video-player', isPlaying && 'ds-video-player--playing', className)}>
      <video
        ref={videoRef}
        className="ds-video-player__video"
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
      />
      {!isPlaying && (
        // Pointer shortcut; keyboard and screen reader users get the same action in the control bar.
        <button type="button" className="ds-video-player__play" tabIndex={-1} aria-hidden="true" onClick={togglePlay}>
          <Icon name="play" size="md" />
        </button>
      )}
      <div className="ds-video-player__controls">
        <input
          type="range"
          className="ds-video-player__timeline"
          aria-label="Seek"
          aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          onChange={(event) => {
            const time = Number(event.target.value);
            if (videoRef.current) videoRef.current.currentTime = time;
            setCurrentTime(time);
          }}
        />
        <div className="ds-video-player__bar">
          <span className="ds-video-player__time">{formatTime(currentTime)}</span>
          <div className="ds-video-player__buttons">
            <button type="button" className="ds-video-player__button" aria-label={isPlaying ? 'Pause' : 'Play'} onClick={togglePlay}>
              <Icon name={isPlaying ? 'pause' : 'play'} size="sm" />
            </button>
            <button type="button" className="ds-video-player__button" aria-label="Mute" aria-pressed={isMuted} onClick={toggleMute}>
              <Icon name="volume" size="sm" />
            </button>
            <button type="button" className="ds-video-player__button" aria-label="Full screen" onClick={() => frameRef.current?.requestFullscreen?.()}>
              <Icon name="maximize" size="sm" />
            </button>
          </div>
          <span className="ds-video-player__time">{formatTime(duration)}</span>
        </div>
      </div>
    </figure>
  );
}
