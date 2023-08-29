import {Component,OnInit,OnDestroy,AfterViewInit,ElementRef,Input,ViewEncapsulation,ViewChild,Inject,PLATFORM_ID,} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { Subject, takeUntil } from 'rxjs';

declare const videojs: any;
@Component({
  selector     : 'Setting',
  templateUrl  : './Setting.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SettingComponent implements OnDestroy {
  @ViewChild('video', { static: true })
  video!: ElementRef<HTMLVideoElement>;



  constructor(@Inject(PLATFORM_ID) private _platform: Object,private _router: Router,) {
    
  }

  onStart(){
    if(isPlatformBrowser(this._platform) && 'mediaDevices' in navigator) {
      navigator.mediaDevices.getUserMedia({video: true}).then((ms: MediaStream) => {
        const _video = this.video.nativeElement;
        _video.srcObject = ms;
        _video.play(); 
      });
    }
  }
  ngOnDestroy() {
    (this.video.nativeElement.srcObject as MediaStream).getVideoTracks()[0].stop();
  }
  LogOut(): void
    {
        this._router.navigate(['/sign-out']);
    }
    url:any;
    onSelectFile(event) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
  
        reader.readAsDataURL(event.target.files[0]); // read file as data url
  
        reader.onload = (event) => { // called once readAsDataURL is completed
          this.url = event.target.result;
        }
      }
    }
  }
  
    
