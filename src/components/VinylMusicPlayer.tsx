import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Disc, Play, Pause, Volume2, VolumeX, Music, Radio, ArrowDownCircle } from "lucide-react";

export function VinylMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  const [scrollSpeedMultiplier, setScrollSpeedMultiplier] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Audio path in public directory
  const audioSrc = "/Kaleo-—-Way-Down-We-Go-Slowed-Reverb-1-1.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => {
      setIsPlaying(false);
      setIsAutoScroll(false);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Keep audio playback always at normal 1.0 rate
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.playbackRate = 1.0;
    }
  }, []);

  // Auto-scroll loop engine when enabled & music is playing
  useEffect(() => {
    if (!isPlaying || !isAutoScroll) return;

    let animationFrameId: number;
    const baseSpeed = 1.2;
    const scrollSpeed = baseSpeed * scrollSpeedMultiplier;

    const autoScrollStep = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) {
        setIsAutoScroll(false);
        return;
      }
      window.scrollBy({ top: scrollSpeed, behavior: "instant" });
      animationFrameId = requestAnimationFrame(autoScrollStep);
    };

    animationFrameId = requestAnimationFrame(autoScrollStep);

    const handleUserScroll = (e: Event) => {
      if (e.isTrusted) {
        setIsAutoScroll(false);
      }
    };

    window.addEventListener("wheel", handleUserScroll, { passive: true });
    window.addEventListener("touchmove", handleUserScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
    };
  }, [isPlaying, isAutoScroll, scrollSpeedMultiplier]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setIsAutoScroll(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error("Audio playback error:", err);
      });
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleAutoScroll = () => {
    if (!isPlaying) {
      togglePlay();
      setIsAutoScroll(true);
    } else {
      setIsAutoScroll(!isAutoScroll);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      {/* Hidden HTML5 Audio Element */}
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {/* Floating Vinyl Dock */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.5 }}
        className="fixed bottom-6 right-6 z-[150] select-none"
      >
        <div className="relative group">
          {/* Ambient Glow */}
          <div
            className={`absolute -inset-1 rounded-full blur-md transition-opacity duration-700 pointer-events-none ${
              isPlaying ? "bg-amber-500/40 opacity-100" : "bg-white/10 opacity-0 group-hover:opacity-40"
            }`}
          />

          <motion.div
            layout
            className="relative bg-[#09090b]/90 backdrop-blur-xl border border-white/15 rounded-full p-2 pr-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center gap-3 text-white"
          >
            {/* Spinning Vinyl Record Badge */}
            <div
              onClick={() => setIsExpanded(!isExpanded)}
              className="relative w-12 h-12 rounded-full cursor-pointer overflow-hidden border border-white/20 shrink-0 bg-neutral-950 flex items-center justify-center group/vinyl"
            >
              {/* Outer Grooves */}
              <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] border-[3px] border-neutral-900 flex items-center justify-center relative"
              >
                {/* Vinyl Grooves texture */}
                <div className="absolute inset-1 rounded-full border border-white/10" />
                <div className="absolute inset-2 rounded-full border border-white/5" />
                <div className="absolute inset-3 rounded-full border border-white/10" />

                {/* Vinyl Label Core */}
                <div className="w-4 h-4 rounded-full bg-amber-500 border-2 border-black flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-white" />
                </div>
              </motion.div>

              {/* Tonearm overlay */}
              <div
                className={`absolute top-0.5 right-1 w-4 h-4 transition-transform duration-500 origin-top-right pointer-events-none ${
                  isPlaying ? "rotate-[18deg]" : "rotate-0"
                }`}
              >
                <div className="w-0.5 h-3 bg-white/60 mx-auto rounded-full" />
              </div>
            </div>

            {/* Track Info */}
            <div className="flex flex-col cursor-pointer max-w-[130px] md:max-w-[170px]" onClick={togglePlay}>
              <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-amber-400 font-extrabold truncate">
                <Radio className={`w-2.5 h-2.5 ${isPlaying ? "animate-pulse text-amber-400" : "text-white/40"}`} />
                <span>KALEO • SLOWED</span>
              </div>
              <span className="font-display text-xs font-bold text-white tracking-tight truncate">
                Way Down We Go
              </span>
            </div>

            {/* Audio & Auto-Scroll Controls */}
            <div className="flex items-center gap-1.5 border-l border-white/10 pl-3">
              {/* Speed Multiplier Selector (1X, 2X, 3X) */}
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-0.5 rounded-full">
                {[1, 2, 3].map((speed) => (
                  <button
                    key={speed}
                    onClick={() => setScrollSpeedMultiplier(speed)}
                    className={`px-1.5 py-0.5 rounded-full text-[8px] font-mono font-extrabold transition-all cursor-pointer ${
                      scrollSpeedMultiplier === speed
                        ? "bg-amber-400 text-black shadow-md"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {speed}X
                  </button>
                ))}
              </div>

              {/* Auto Scroll Toggle Button */}
              {isPlaying && (
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  onClick={toggleAutoScroll}
                  className={`px-2.5 py-1 rounded-full text-[9px] font-mono uppercase tracking-wider font-extrabold flex items-center gap-1 transition-all cursor-pointer border ${
                    isAutoScroll
                      ? "bg-amber-400 text-black border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.6)] animate-pulse"
                      : "bg-white/10 text-white/70 border-white/10 hover:bg-white/20 hover:text-white"
                  }`}
                  title={isAutoScroll ? "Disable Auto-Scroll" : "Enable Auto-Scroll"}
                >
                  <ArrowDownCircle className={`w-3 h-3 ${isAutoScroll ? "animate-bounce" : ""}`} />
                  <span>AUTO SCROLL {isAutoScroll ? "ON" : "OFF"}</span>
                </motion.button>
              )}

              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-white text-black hover:bg-amber-400 transition-colors flex items-center justify-center shadow-lg cursor-pointer"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-black" /> : <Play className="w-3.5 h-3.5 fill-black ml-0.5" />}
              </button>

              {/* Mute Button */}
              <button
                onClick={toggleMute}
                className="w-7 h-7 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Expanded Controls Drawer */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="absolute bottom-16 right-0 w-72 bg-[#0a0a0d]/95 border border-white/20 rounded-3xl p-5 shadow-2xl backdrop-blur-2xl text-white space-y-4 z-20"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Disc className={`w-4 h-4 ${isPlaying ? "animate-spin text-amber-400" : "text-white/50"}`} />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 font-bold">
                    VINYL DECK VOL. 01
                  </span>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-white/40 hover:text-white text-xs font-mono"
                >
                  ✕
                </button>
              </div>

              {/* Album Art & Track Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Music className="w-6 h-6 text-amber-400" />
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <h4 className="font-display text-sm font-bold truncate">Way Down We Go</h4>
                  <p className="text-[10px] font-mono text-white/50 truncate">KALEO (Slowed + Reverb)</p>
                </div>
              </div>

              {/* Speed Multiplier Pill Selector in Drawer */}
              <div className="flex items-center justify-between p-2.5 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/70">AUTO-SCROLL SPEED</span>
                <div className="flex items-center gap-1 bg-black/40 border border-white/10 p-0.5 rounded-full">
                  {[1, 2, 3].map((speed) => (
                    <button
                      key={speed}
                      onClick={() => setScrollSpeedMultiplier(speed)}
                      className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-extrabold cursor-pointer transition-all ${
                        scrollSpeedMultiplier === speed
                          ? "bg-amber-400 text-black shadow-md"
                          : "text-white/50 hover:text-white"
                      }`}
                    >
                      {speed}X
                    </button>
                  ))}
                </div>
              </div>

              {/* Auto Scroll Big Switch in Drawer */}
              <div className="flex items-center justify-between p-2.5 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/70">CINEMATIC AUTO-SCROLL</span>
                <button
                  onClick={toggleAutoScroll}
                  className={`px-3 py-1 rounded-full font-mono text-[9px] uppercase tracking-widest font-extrabold cursor-pointer border transition-all ${
                    isAutoScroll
                      ? "bg-amber-400 text-black border-amber-400 shadow-md"
                      : "bg-white/10 text-white/50 border-white/10"
                  }`}
                >
                  {isAutoScroll ? "ENABLED" : "DISABLED"}
                </button>
              </div>

              {/* Progress Scrubber */}
              <div className="space-y-1">
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-white/15 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[9px] font-mono text-white/50">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

