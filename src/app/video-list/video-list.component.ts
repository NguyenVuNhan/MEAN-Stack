import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videos: Array<Video>;
  @Output() SelectVideo = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }
}
