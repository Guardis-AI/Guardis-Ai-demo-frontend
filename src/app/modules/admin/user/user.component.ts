import { ChangeDetectorRef, ChangeDetectionStrategy } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { StreamService } from "app/services/stream.service";
import { MatTableDataSource } from "@angular/material/table";
import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
import { AdddeviceComponent } from "./adddevice/adddevice/adddevice.component";
import { DetailsComponent } from "./details/details.component";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
  //changeDetection: ChangeDetectionStrategy.Default,
  animations: [
    trigger("detailExpand", [
      state(
        "collapsed",
        style({ height: "0px", minHeight: "0", visibility: "collapse" })
      ),
      state(
        "expanded",
        style({ height: "*", marginTop: "10px", marginBottom: "20px" })
      ),
      transition(
        "expanded <=> collapsed",
        animate("100ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class UserComponent {
  public userColumns: string[] = [
    "user_id",
    "user_name",
    "edgeunit",
    "user_st_date",
    "tot_devices",
    "action",
  ];
  public deviceColumns: string[] = [
    "device_id",
    "url",
    "port",
    "camera_type",
    "dev_st_date",
    "ip_address",
    "edit",
  ];
  public data: any[] = [];
  userCount = 0;
  public dataSource = new MatTableDataSource();
  dataFromDialog: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  matDrawer: any;
  constructor(
    private _streamService: StreamService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.getuserData();
  }

  getuserData() {
    this.data = [
      {
        user_id: 1,
        user_name: "admin",
        passwd: "Welcome1",
        user_st_date: "2023-08-18",
        user_end_date: null,
        role: "ADMIN",
        edgeunit: "UNIT 2",
        cf_url: "https://guardisai-test-unit-2.bullshouse.in/",
        tot_devices: 6,
        user_devices: [
          {
            device_id: 1,
            url: "rtsp://admin:E10ADC3949BA59ABBE56E057F20F883E@192.168.0.151:554/Streaming/channels/101",
            user_id: 1,
            ip_address: "192.168.0.151",
            port: "554",
            camera_type: "Camera2",
            dev_st_date: "2023-08-21",
            dev_end_date: null,
            send_notification: "Y",
          },
          {
            device_id: 2,
            url: "rtsp://admin:Guardis123@192.168.1.27:554/Streaming/channels/1",
            user_id: 1,
            ip_address: "192.168.1.27",
            port: "554",
            camera_type: "Camera6",
            dev_st_date: "2023-08-22",
            dev_end_date: null,
            send_notification: "Y",
          },
          {
            device_id: 3,
            url: "rtsp://admin:E10ADC3949BA59ABBE56E057F20F883E@192.168.0.102:554/Streaming/channels/101",
            user_id: 1,
            ip_address: "192.168.0.102",
            port: "554",
            camera_type: "Camera3",
            dev_st_date: "2023-08-13",
            dev_end_date: null,
            send_notification: "Y",
          },
          {
            device_id: 4,
            url: "rtsp://admin:Guardis123@192.168.1.28:554/Streaming/channels/1",
            user_id: 1,
            ip_address: "192.168.1.28",
            port: "554",
            camera_type: "Camera7",
            dev_st_date: "2023-08-22",
            dev_end_date: null,
            send_notification: "Y",
          },
          {
            device_id: 5,
            url: "rtsp://admin:E10ADC3949BA59ABBE56E057F20F883E@192.168.0.103:5554/Streaming/channels/101",
            user_id: 1,
            ip_address: "192.168.0.103",
            port: "5554",
            camera_type: "Camera4",
            dev_st_date: "2023-08-13",
            dev_end_date: null,
            send_notification: "Y",
          },
          {
            device_id: 6,
            url: "rtsp://admin:E10ADC3949BA59ABBE56E057F20F883E@192.168.0.104:554/Streaming/channels/101",
            user_id: 1,
            ip_address: "192.168.0.104",
            port: "554",
            camera_type: "Camera5",
            dev_st_date: "2023-08-13",
            dev_end_date: null,
            send_notification: "Y",
          },
        ],
      },
    ];
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.userCount = 1;
    // this._streamService.getuserdetails().subscribe(
    //   (response) => {
    //     this.data = response.gai_get_user_details;
    //     console.log(this.data);
    //     this.dataSource = new MatTableDataSource(this.data);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //     this.userCount =
    //       response.gai_get_user_details != null
    //         ? response.gai_get_user_details.length
    //         : 0;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  showPrompt(): void {
    const dialogRef = this.dialog.open(DetailsComponent, {
      width: "500px",
      height: "530px",
      position: { right: "0px", top: "50px" },
      data: { datresult: "", editMode: "N" },
    });

    // dialogRef.afterClosed().subscribe((data) => {
    //   this.dataFromDialog = data.form;
    //   if (data.clicked === 'submit') {
    //     console.log('Sumbit button clicked');
    //   }
    // });
  }
  AddDevice(): void {
    const dialogRef = this.dialog.open(AdddeviceComponent, {
      width: "585px",
      height: "555px",
      position: { right: "0px", top: "50px" },
      data: { datresult: "", editMode: "N", udata: this.data },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  EditUser(id): void {
    const filterid = id;
    const result = this.data.find((i) => i.user_id == filterid);
    const dialogRef = this.dialog.open(DetailsComponent, {
      width: "585px",
      height: "555px",
      position: { right: "0px", top: "50px" },
      data: { datresult: result, editMode: "Y" },
    });
  }

  EditDevice(id): void {
    const fildeviceid = id;
    // const result = this.data.filter(i => (i.user_devices.device_id == fildeviceid));
    const x = [];
    this.data.forEach((option) => {
      option.user_devices.forEach((opt) => {
        if (opt.device_id == fildeviceid) {
          x.push(opt);
        }
      });
    });
    const dialogRef = this.dialog.open(AdddeviceComponent, {
      width: "585px",
      height: "555px",
      position: { right: "0px", top: "50px" },
      data: { datresult: x[0], editMode: "Y", udata: this.data },
    });
  }
}
