import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
} from "@angular/core";
import { StreamService } from "app/services/stream.service";
import { DatePipe } from "@angular/common";
import Hls from "hls.js";
import { FormControl } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
declare const videojs: any;
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-livestream",
  templateUrl: "./livestream.component.html",
  styleUrls: ["./livestream.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: DatePipe,
    },
  ],
})
export class LivestreamComponent implements OnInit, AfterViewInit {
  date = new FormControl("2023-07-27");
  cfurl: any = localStorage.getItem("cfUrl");
  private _elementRef: ElementRef;
  searchText: any;
  playbacklist: any;
  stream = "";
  vdata: any;
  cameraType: "01";
  selectedDate = new Date();
  dateplay: any;
  public video: HTMLVideoElement;
  public hls: Hls;
  @Input() max: any;
  toggle = true;
  maxDate: any = new Date();

  devicelist = [];
  // declare player var
  private player = videojs.getPlayers();
  constructor(
    private sanitizer: DomSanitizer,
    private _StreamService: StreamService,
    public datepipe: DatePipe,
    elementRef: ElementRef,
    private http: HttpClient,
    private el: ElementRef<HTMLVideoElement>
  ) {
    this.player = false;
    this.video = el.nativeElement;
    // this.maxDate.setDate(this.maxDate.getDate()-1);
  }

  ngOnInit() {
    const data = {
      p_user_id: localStorage.getItem("userId"),
      p_device_token: "",
      p_device_type: "",
      p_port: "",
      login_user_id: localStorage.getItem("userId"),
    };
    this._StreamService.getDeviceList(data).subscribe((dv: any) => {
      this.devicelist = dv.gai_get_device_list;
      const firstCam = this.devicelist[0].camera_type;
      this.dateplay = this.datepipe.transform(this.selectedDate, "yyyyMMdd");
      this.getPlayback(this.dateplay, firstCam);
    });
  }

  getPlayback(date, camtype) {
    this.cameraType = camtype;
    this.toggle = !this.toggle;
    console.log(date);
    this.stream = this.cfurl + "media/" + camtype + "/" + date + "/output.m3u8";
    //this.stream = 'https://guardisai-test-unit-2.bullshouse.in/media/Cashier22/20230803/output.m3u8';
    console.log(this.stream);
    this.vdata = { videolink: this.stream };
    this.player.src({
      src: this.stream,
    });
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  checkHls(stream) {
    if (Hls.isSupported()) {
      var video = document.getElementById("sxmvideo");
      this.hls = new Hls();
      this.hls.attachMedia(this.video);
      this.hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        console.log("video and hls.js are now bound together !");
        this.hls.loadSource(stream);
        this.hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
          console.log(
            "manifest loaded, found " + data.levels.length + " quality level"
          );
        });
      });
      this.hls.on(Hls.Events.ERROR, (event, data) => {
        console.log(data);
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              // try to recover network error
              console.log("fatal network error encountered, try to recover");
              this.hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.log("fatal media error encountered, try to recover");
              this.hls.recoverMediaError();
              break;
            default:
              // cannot recover
              this.hls.destroy();
              break;
          }
        }
      });
    }
  }
  ngAfterViewInit() {
    this.player = videojs(document.getElementById("sxmvideo"));
    this.devicelist.map(function (value, index) {
      videojs(document.getElementById("playbkvideo_" + value.device_id));
      document.getElementById("playbkvideo_" + value.device_id).style.height =
        "130px";
    });
    this.player.muted(true);
  }

  playVideo(type) {
    const camType = type;
    this.cameraType = camType;
    this.getPlayback(this.dateplay, camType);
  }

  playHardcodedVideo(src) {
    const videoElement = this.el.nativeElement.querySelector("video");
    videoElement.src = src;
  }
}
