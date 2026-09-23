/**
 * Lightweight audio & BGM manager
 */
const BGM_URL = 'https://raw.githubusercontent.com/W4vy0/eclips/main/maksymmalko-kids-kids-music-598954.mp3';

class SoundEffects {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;
  private bgmAudio: HTMLAudioElement | null = null;
  public isBgmPlaying: boolean = false;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public initBgm() {
    if (!this.bgmAudio && typeof window !== 'undefined') {
      this.bgmAudio = new Audio(BGM_URL);
      this.bgmAudio.loop = true;
      this.bgmAudio.volume = 0.35;
      this.bgmAudio.preload = 'auto';

      this.bgmAudio.onplay = () => {
        this.isBgmPlaying = true;
      };
      this.bgmAudio.onpause = () => {
        this.isBgmPlaying = false;
      };
      this.bgmAudio.onerror = () => {
        this.isBgmPlaying = false;
      };
    }
  }

  public playBgm() {
    this.initBgm();
    if (this.bgmAudio) {
      this.bgmAudio.play().then(() => {
        this.isBgmPlaying = true;
      }).catch(() => {
        // Autoplay policy prevented playback until user interaction
        this.isBgmPlaying = false;
      });
    }
  }

  public pauseBgm() {
    if (this.bgmAudio) {
      this.bgmAudio.pause();
      this.isBgmPlaying = false;
    }
  }

  public toggleBgm(): boolean {
    this.initBgm();
    if (this.isBgmPlaying) {
      this.pauseBgm();
      return false;
    } else {
      this.playBgm();
      return true;
    }
  }

  /**
   * Sound of turning a crisp passport document page
   */
  public playPageTurn() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Soft whoosh sound
      osc.type = 'triangle';
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.14);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.14);
    } catch {
      // Audio not supported or allowed
    }
  }

  /**
   * Sound of a heavy rubber ink stamp
   */
  public playStamp() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.1);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } catch {
      // ignore
    }
  }

  /**
   * Sound of a cute soft pop
   */
  public playCutePop() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(1040, now + 0.09);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } catch {
      // ignore
    }
  }
}

export const sound = new SoundEffects();
