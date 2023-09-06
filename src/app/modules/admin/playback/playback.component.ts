import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  Input,
} from "@angular/core";
import { StreamService } from "app/services/stream.service";
import { DatePipe } from "@angular/common";
import Hls from "hls.js";
import { DomSanitizer } from "@angular/platform-browser";
import { FormControl } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from "@angular/material/core";

import * as _moment from "moment";

export const MY_FORMATS = {
  parse: {
    dateInput: "LL",
  },
  display: {
    dateInput: "dddd LL",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY",
  },
};

declare const videojs: any;
@Component({
  selector: "app-playback",
  templateUrl: "./playback.component.html",
  styleUrls: ["./playback.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {
      provide: DatePipe,
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class PlaybackComponent implements OnInit, AfterViewInit {
  date = new FormControl("2023-08-17");
  cfurl: any = localStorage.getItem("cfUrl");
  isloading: boolean = false;
  searchText: any;
  playbacklist: any;
  stream = "";
  vdata: any;
  cameraType: any;
  selectedDate = new Date("2023-08-17");
  panelOpenState = false;
  dateplay: any;
  public video: HTMLVideoElement;
  public hls: Hls;
  maxDate: any = new Date();
  toggle = true;
  devicelist = [];
  overlayStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    fontSize: "24px",
    fontWeight: 600,
    color: "#FFF",
    pointerEvents: "none",
    letterSpacing: "2px",
  };

  // declare player var
  private player = videojs.getPlayers();
  constructor(
    private sanitizer: DomSanitizer,
    public datepipe: DatePipe,
    private _snackBar: MatSnackBar,
    private _StreamService: StreamService,
    private el: ElementRef<HTMLVideoElement>
  ) {
    this.player = false;
    this.video = el.nativeElement;
    this.maxDate.setDate(this.selectedDate.getDate() - 1);
  }

  ngOnInit() {
    // const data = {
    //   p_user_id: localStorage.getItem("userId"),
    //   p_device_token: "",
    //   p_device_type: "",
    //   p_port: "",
    //   login_user_id: localStorage.getItem("userId"),
    // };
    // this._StreamService.getDeviceList(data).subscribe((dv: any) => {
    //   this.devicelist = dv.gai_get_device_list;
    //   if (this.devicelist == null) {
    //     this.vdata = { videolink: "" };
    //     this.displayMsg("No devices found!");
    //   } else {
    //     const firstCam = this.devicelist[0].camera_type;
    //     this.dateplay = this.datepipe.transform(this.selectedDate, "yyyyMMdd");
    //     this.isloading = true;
    //     console.log(Object.keys(dv.gai_get_device_list[0]).length);
    //     this.getPlayback(this.dateplay, firstCam);
    //   }
    // });
  }

  getPlayback(date, camtype) {
    this.cameraType = camtype;
    this.toggle = !this.toggle;
    this.stream = this.cfurl + "media/" + camtype + "/" + date + "/output.m3u8";
    // this.stream ="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";
    this.vdata = { videolink: this.stream };
    console.log(this.stream);
    this.player.src({});
    this.player.src({
      src: this.stream,
    });
    this.player.controls(true);
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  displayMsg(msg) {
    this._snackBar.open(msg, "OK", {
      duration: 1200,
      verticalPosition: "top",
      horizontalPosition: "center",
    });
  }

  ngAfterViewInit() {
    // // this.isloading = true;
    // this.player = videojs(document.getElementById("smvideo"));
    // this.devicelist.map(function (value, index) {
    //   videojs(document.getElementById("playbkvideo_" + value.device_id));
    //   document.getElementById("playbkvideo_" + value.device_id).style.height =
    //     "130px";
    // });
    // // const self = this;
    // this.player.muted(true);
    // this.player.on("timeupdate", () => {
    //   this.player.controls(true);
    // });
    // // this.player = true;
  }

  valueChanged(event) {
    this.selectedDate = event.format("YYYYMMDD");
    this.getPlayback(this.selectedDate, this.cameraType);
  }

  playVideo(type) {
    // const datecam =  this.datepipe.transform(this.selectedDate, 'yyyyMMdd');
    const camType = type;
    this.cameraType = camType;
    this.getPlayback(this.dateplay, camType);
  }

  playHardcodedVideo(src) {
    const videoElement = this.el.nativeElement.querySelector("video");
    videoElement.src = src;
  }
}
