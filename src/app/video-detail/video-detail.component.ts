import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {
  @Input() video: Video;
  @Output() updateVideoEvent = new EventEmitter();
  @Output() deleteVideoEvent = new EventEmitter();

  editTitle: boolean = false;

  constructor(private _videoService: VideoService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }

  updateVideo() {
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo() {
    this.deleteVideoEvent.emit(this.video);
  }
}
