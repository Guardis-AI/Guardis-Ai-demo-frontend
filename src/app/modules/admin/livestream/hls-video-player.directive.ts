import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import Hls from 'hls.js';


@Directive({
  selector: '[appHlsVideoPlayer]'
})
export class HlsVideoPlayerDirective implements OnInit {
  @Input()
  public stream: string;
  isLoading = true;
  private video: HTMLVideoElement;
  private hls: Hls;
  public error;
  constructor(private el: ElementRef<HTMLVideoElement>) {
    this.video = el.nativeElement;
  }

  ngOnInit() {
    console.log('Stream: ', this.stream);
    this.establishHlsStream();
  }

  public establishHlsStream() {
    if (this.hls) {
      this.hls.destroy();
    }
    if (Hls.isSupported()) {
      this.hls = new Hls();
      this.hls.attachMedia(this.video);
      this.isLoading = true;
      this.hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        console.log('video and hls.js are now bound together !');
        this.hls.loadSource(this.stream);
        this.hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
          console.log(
            'manifest loaded, found ' + data.levels.length + ' quality level'
          );
        });
      });

      this.hls.on(Hls.Events.ERROR, (event, data) => {
        console.log(data);
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              // try to recover network error
              console.log('fatal network error encountered, try to recover');
              this.hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.log('fatal media error encountered, try to recover');
              this.hls.recoverMediaError();
              break;
            default:
              // cannot recover
              this.hls.destroy();
              break;
          }
          return false;
        }
      });
    }
    return true;
  }
}
