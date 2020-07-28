import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.scss'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {
  videos: Array<Video>;
  selectedVideo: Video;
  hideNewVideo: boolean = false;

  constructor(private _videoService: VideoService) {}

  ngOnInit(): void {
    this._videoService.getVideos().subscribe((resVideoData: Array<Video>) => {
      this.videos = resVideoData;
      console.log(resVideoData);
    });
  }

  onSelectVideo(vid: any) {
    this.selectedVideo = vid;
    this.hideNewVideo = true;
    console.log(vid);
  }

  newVideo() {
    this.hideNewVideo = false;
  }

  onSubmitAddVideo(video: Video) {
    this._videoService.addVideos(video).subscribe(resNewVideo => {
      this.videos.push(resNewVideo);
      this.hideNewVideo = true;
      this.selectedVideo = resNewVideo;
    });
  }

  onUpdateVideoEvent(video: any) {
    this._videoService.updateVideos(video).subscribe(resUpdateVideo => {
      video = resUpdateVideo;
    });
    this.selectedVideo = null;
  }

  onDeleteVideoEvent(video: any) {
    this._videoService.deleteVideos(video).subscribe(resDeleteVideo => {
      let index = this.videos.indexOf(video);
      this.videos.splice(index, 1);
    });
    this.selectedVideo = null;
  }
}
