import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from "@angular/core";
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { TemplatePortal } from "@angular/cdk/portal";
import { MatButton } from "@angular/material/button";
import { Subject, takeUntil } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { StreamService } from "app/services/stream.service";
import { assign, cloneDeep } from "lodash-es";

@Component({
  selector: "notifications",
  templateUrl: "./notifications.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: "notifications",
})
export class NotificationsComponent implements OnInit, OnDestroy {
  @ViewChild("notificationsOrigin") private _notificationsOrigin: MatButton;
  @ViewChild("notificationsPanel")
  private _notificationsPanel: TemplateRef<any>;
  link = "/viewnotifications";
  notifications: Notification[];
  unreadCount: number = 0;
  private _overlayRef: OverlayRef;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _snackBar: MatSnackBar,
    private _streamService: StreamService,
    private _overlay: Overlay,
    private _router: Router,
    private _viewContainerRef: ViewContainerRef,
    private activatedRoute: ActivatedRoute
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to notification log
    const data = {
      p_user_id: localStorage.getItem("userId"),
      p_device_token: "",
      p_device_type: "",
      p_device_id: "",
      login_user_id: localStorage.getItem("userId"),
      p_notification_log_id: "",
      p_read_flag: "N",
    };
    this._streamService.getNotificationList(data).subscribe((dt: any) => {
      const Notilog = dt.gai_get_user_notification_log;
      this.unreadCount = dt.gai_get_user_notification_log[0].message_count;
      this.notifications = dt.gai_get_user_notification_log[0].notification_log;
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();

    // Dispose the overlay
    if (this._overlayRef) {
      this._overlayRef.dispose();
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Open the notifications panel
   */
  openPanel(): void {
    // Return if the notifications panel or its origin is not defined
    if (!this._notificationsPanel || !this._notificationsOrigin) {
      return;
    }

    // Create the overlay if it doesn't exist
    if (!this._overlayRef) {
      this._createOverlay();
    }

    // Attach the portal to the overlay
    this._overlayRef.attach(
      new TemplatePortal(this._notificationsPanel, this._viewContainerRef)
    );
  }

  /**
   * Close the notifications panel
   */
  closePanel(): void {
    this._overlayRef.detach();
  }

  /**
   * Toggle read status of the given notification
   */
  toggleRead(notification, index): void {
    notification.message_read_flag = !notification.message_read_flag;
    const data = {
      login_user_id: localStorage.getItem("userId"),
      p_device_token: "",
      p_device_type: "",
      p_device_id: "",
      p_notification_id: notification.notification_log_id,
    };
    this._streamService.markReviewed(data).subscribe((dt: any) => {
      if (dt.gai_upd_notification_read_flag.errorCode == 0) {
        // marked as read
        this.onDisplay(dt.gai_upd_notification_read_flag.message);
        notification[index].hidden = false;
        console.log(this.notifications[index]);
      }
    });
  }
  onDisplay(msg) {
    this._snackBar.open(msg, "OK", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center",
    });
  }
  /**
   * Mark all notifications as read
   */
  // markAllAsRead(): void
  // {
  //     // Mark all as read
  //     this._notificationsService.markAllAsRead().subscribe();
  // }

  /**
   * Delete the given notification
   */
  // delete(notification: Notification): void
  // {
  //     // Delete the notification
  //     this._notificationsService.delete(notification.id).subscribe();
  // }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Create the overlay
   */
  private _createOverlay(): void {
    // Create the overlay
    this._overlayRef = this._overlay.create({
      hasBackdrop: true,
      backdropClass: "fuse-backdrop-on-mobile",
      scrollStrategy: this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay
        .position()
        .flexibleConnectedTo(
          this._notificationsOrigin._elementRef.nativeElement
        )
        .withLockedPosition(true)
        .withPush(true)
        .withPositions([
          {
            originX: "start",
            originY: "bottom",
            overlayX: "start",
            overlayY: "top",
          },
          {
            originX: "start",
            originY: "top",
            overlayX: "start",
            overlayY: "bottom",
          },
          {
            originX: "end",
            originY: "bottom",
            overlayX: "end",
            overlayY: "top",
          },
          {
            originX: "end",
            originY: "top",
            overlayX: "end",
            overlayY: "bottom",
          },
        ]),
    });

    // Detach the overlay from the portal on backdrop click
    this._overlayRef.backdropClick().subscribe(() => {
      this._overlayRef.detach();
    });
  }
}
