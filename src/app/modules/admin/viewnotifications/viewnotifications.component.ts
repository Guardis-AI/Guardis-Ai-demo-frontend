import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
declare const videojs: any;
import { Subject } from "rxjs";
import { DomSanitizer } from "@angular/platform-browser";
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from "@angular/router";
import { StreamService } from "app/services/stream.service";

@Component({
  selector: "app-viewnotifications",
  templateUrl: "./viewnotifications.component.html",
  styleUrls: ["./viewnotifications.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewnotificationsComponent implements OnInit, AfterViewInit {
  // reference to the element itself, we use this to access events and methods
  private _elementRef: ElementRef;
  detailid = "";
  cfurl: any = localStorage.getItem("cfUrl");
  public sidebarShow: boolean = true;
  vdata: any = { videolink: "" };
  searchText: any;
  private fileUrl = "https://guardisai.knstek.com/";
  // notificationlist: any;
  notificationlist = [
    {
      notification_log_id: "1",
      filepath:
        "src/assets/demo-videos/cashier22_20230608_16_23_47_713_theft.mp4",
      filename: "cashier22_20230608_16_23_47_713_theft.mp4",
    },
    // {
    //   notification_log_id: "2",
    //   filepath: "path/to/video2",
    //   filename: "video2.mp4",
    // },
    // Add more video clips here...
  ];
  currentRoute = "";
  NotiLogId = "";
  Notivideo = "";
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  public video: HTMLVideoElement;
  private player = videojs.getPlayers();
  selNoti: any;
  // constructor initializes our declared vars
  constructor(
    private _streamService: StreamService,
    private sanitizer: DomSanitizer,
    private _router: Router,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private el: ElementRef<HTMLVideoElement>
  ) {
    // this.currentRoute = "";
    // this.activatedRoute.data.subscribe(({ notilist }) => {
    //   console.log("From constructor");
    //   // this.notificationlist =
    //   //   notilist.gai_get_user_notification_log[0].notification_log;
    //   console.log("notificationlist");
    //   console.log(this.notificationlist);
    // });
    // const id = this.route.snapshot.paramMap.get("id");
    // console.log("id" + id);
    // this._router.events.subscribe((event: Event) => {
    //   if (event instanceof NavigationStart) {
    //     // Show progress spinner or progress bar
    //     console.log("Route change detected");
    //     this.currentRoute = event.url;
    //     const valId = event.url.split("/");
    //     this.NotiLogId = valId[valId.length - 1];
    //   }
    //   if (event instanceof NavigationEnd) {
    //     console.log("nav end");
    //     this.currentRoute = event.url;
    //     const valId = event.url.split("/");
    //     this.NotiLogId = valId[valId.length - 1];
    //     //this.ngOnInit();
    //     this.ngAfterViewInit();
    //   }
    //   if (event instanceof NavigationError) {
    //     // Hide progress spinner or progress bar
    //     // Present error to user
    //     console.log(event.error);
    //   }
    //   this.player = false;
    //   this.video = el.nativeElement;
    // });
  }

  ngOnInit() {}

  // use ngAfterViewInit to make sure we initialize the videojs element
  // after the component template itself has been rendered

  ngAfterViewInit() {
    // if (this.NotiLogId != "") this.playClip(this.NotiLogId);
    // this.playHardcodedVideo();
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  playClip(id) {
    this.player = videojs(document.getElementById("sxmvideo"));
    const self = this;
    if (id != "") {
      this.selNoti = this.notificationlist.find(
        (i) => i.notification_log_id == id
      );
      if (this.selNoti) {
        this.Notivideo =
          this.cfurl +
          "get_video?path=" +
          this.selNoti.filepath +
          "&filename=" +
          this.selNoti.filename;
        //  this.Notivideo = this.fileUrl+this.selNoti.filepath;
        this.Notivideo =
          "src/assets/demo-videos/cashier22_20230608_16_23_47_713_theft.mp4";
        console.log("Notivideo");
        console.log(this.Notivideo);

        this.vdata = { videolink: this.Notivideo };
        this.player.src({
          src: this.Notivideo,
        });
      }
    }
  }

  playHardcodedVideo(src) {
    const videoElement = this.el.nativeElement.querySelector("video");
    videoElement.src = src;
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
