import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Volume2, Maximize, RotateCcw, CheckCircle2 } from 'lucide-react';
import './VideoPlayer.css';

const VideoPlayer = ({ lesson, onVideoComplete }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [hasWatchedMinimum, setHasWatchedMinimum] = useState(false);
  const [showCompletionButton, setShowCompletionButton] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      
      // Consider video complete if watched at least 80% or reached the end
      const watchedPercentage = (video.currentTime / video.duration) * 100;
      if (watchedPercentage >= 80 && !hasWatchedMinimum) {
        setHasWatchedMinimum(true);
        setShowCompletionButton(true);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      if (!hasWatchedMinimum) {
        setHasWatchedMinimum(true);
        setShowCompletionButton(true);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, [lesson, hasWatchedMinimum]);

  useEffect(() => {
    // Reset states when lesson changes
    setHasWatchedMinimum(false);
    setCurrentTime(0);
    setIsPlaying(false);
    setShowCompletionButton(false);
  }, [lesson.id]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = (parseFloat(e.target.value) / 100) * duration;
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value) / 100;
    video.volume = newVolume;
    setVolume(newVolume);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  const handleMarkComplete = () => {
    setShowCompletionButton(false);
    onVideoComplete();
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="video-player">
      <div className="video-player__container">
        <video
          ref={videoRef}
          src={lesson.videoUrl}
          className="video-player__video"
          onClick={togglePlayPause}
        />
        
        {/* Play/Pause Overlay */}
        <div 
          className="video-player__overlay"
          onClick={togglePlayPause}
        >
          <div className="video-player__play-button">
            {isPlaying ? (
              <Pause className="icon" />
            ) : (
              <Play className="icon play-icon" />
            )}
          </div>
        </div>

        {/* Completion Button Overlay */}
        {showCompletionButton && (
          <div className="video-player__completion-overlay">
            <div className="completion-modal">
              <div className="completion-modal__icon">
                <CheckCircle2 className="icon" />
              </div>
              <h3 className="completion-modal__title">
                Excellent progress! 🎉
              </h3>
              <p className="completion-modal__description">
                You've watched enough of this lesson to understand the key concepts. Ready to test your knowledge?
              </p>
              <button
                onClick={handleMarkComplete}
                className="completion-modal__button"
              >
                Complete Lesson & Take Quiz
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Video Controls */}
      <div className="video-player__controls">
        <div className="video-player__header">
          <h3 className="video-player__title">{lesson.title}</h3>
          {lesson.isCompleted && (
            <div className="video-player__completed">
              <CheckCircle2 className="icon" />
              <span>Completed</span>
            </div>
          )}
        </div>
        
        {/* Enhanced Progress Bar */}
        <div className="video-player__progress-section">
          <div className="video-player__progress">
            <input
              type="range"
              min="0"
              max="100"
              value={progressPercentage}
              onChange={handleSeek}
              className="progress-slider"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${progressPercentage}%, #e5e7eb ${progressPercentage}%, #e5e7eb 100%)`
              }}
            />
          </div>
          <div className="video-player__time">
            <span className="time-current">{formatTime(currentTime)}</span>
            <span className="time-total">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Enhanced Controls */}
        <div className="video-player__control-bar">
          <div className="video-player__left-controls">
            <button
              onClick={togglePlayPause}
              className="control-button control-button--primary"
            >
              {isPlaying ? (
                <Pause className="icon" />
              ) : (
                <Play className="icon play-icon" />
              )}
            </button>

            <div className="volume-control">
              <Volume2 className="volume-icon" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume * 100}
                onChange={handleVolumeChange}
                className="volume-slider"
                style={{
                  background: `linear-gradient(to right, #6b7280 0%, #6b7280 ${volume * 100}%, #d1d5db ${volume * 100}%, #d1d5db 100%)`
                }}
              />
            </div>
          </div>

          <div className="video-player__right-controls">
            <button
              onClick={() => videoRef.current && (videoRef.current.currentTime = 0)}
              className="control-button"
              title="Restart"
            >
              <RotateCcw className="icon" />
            </button>
            
            <button
              onClick={toggleFullscreen}
              className="control-button"
              title="Fullscreen"
            >
              <Maximize className="icon" />
            </button>
          </div>
        </div>

        {/* Manual Complete Button */}
        {hasWatchedMinimum && !showCompletionButton && (
          <div className="video-player__complete-section">
            <button
              onClick={handleMarkComplete}
              className="complete-button"
            >
              <CheckCircle2 className="icon" />
              <span>Mark Complete & Continue to Assessment</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;