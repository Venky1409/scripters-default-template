import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryOrder, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ImagesService } from './images.services';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  private mdlSampleIsOpen: boolean = false;
  galleryThumbnails: any;

  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.galleryOptions = [{
      width: '100%',
      // Starts only thumbnail view of gallery
      image: false,
      height: "600px",
      // Ends only thumbnail view of gallery
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20,
      imageAnimation: NgxGalleryAnimation.Slide,
      previewKeyboardNavigation: true,
      imageInfinityMove: true,
      fullWidth: true,
      imageSwipe: true,
      thumbnailsArrows: false,
      thumbnailsOrder: NgxGalleryOrder.Page,
      thumbnailsRows: 7,
      thumbnailsColumns: 7
    },
    // max-width 800
    {
      breakpoint: 800,
      width: '100%',
      height: '600px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20
    },
    {
      breakpoint: 500,
      width: '100%',
      height: '600px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20,
      imageAnimation: NgxGalleryAnimation.Slide,
      previewKeyboardNavigation: true,
      imageInfinityMove: true,
      fullWidth: true,
      imageSwipe: true,
      thumbnailsArrows: false,
      thumbnailsOrder: NgxGalleryOrder.Page,
      thumbnailsRows: 7,
      thumbnailsColumns: 7
    },
    // max-width 400
    {
      breakpoint: 400,
      image: false,
      preview: true,
      width: '100%',
      height: '300px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20,
      imageAnimation: NgxGalleryAnimation.Slide,
      previewKeyboardNavigation: true,
      imageInfinityMove: true,
      fullWidth: true,
      imageSwipe: true,
      thumbnailsArrows: false,
      thumbnailsOrder: NgxGalleryOrder.Page,
      thumbnailsRows: 3,
      thumbnailsColumns: 3
    }];

    this.imagesService.getGalleryThumbnails()
      .subscribe(res => {
        console.log(res);
        this.galleryThumbnails = res.gallery;
      }, error => {
        console.log(error);
      });
  }

  openModal() {
    this.mdlSampleIsOpen = true;
  }

  closeModal() {
    this.mdlSampleIsOpen = false;
  }

  openGalleryModal(album) {
    var albumId = album.albumid;
    console.log(albumId);
    // this.galleryImages = [
    //   {
    //     small: 'http://138.68.171.189/logo/sankranthi.jpeg',
    //     medium: 'http://138.68.171.189/logo/sankranthi.jpeg',
    //     big: 'http://138.68.171.189/logo/sankranthi.jpeg'
    //   },
    //   {
    //     small: 'http://138.68.171.189/logo/diwali.jpeg',
    //     medium: 'http://138.68.171.189/logo/diwali.jpeg',
    //     big: 'http://138.68.171.189/logo/diwali.jpeg'
    //   }
    // ];

    this.imagesService.getImagesByAlbumId({ albumid: albumId })
      .subscribe(res => {
        console.log(res);
        var imagesData = res.galleryimages;

        imagesData.map((item) => {
          item.small = item.galleryimages_imagename;
          item.medium = item.galleryimages_imagename;
          item.big = item.galleryimages_imagename;

          return item;
        });
        this.galleryImages = imagesData;
        console.log(imagesData);
      }, error => {
        console.log(error);
      });

    this.openModal();
  }

}



    // this.galleryThumbnails = [{
    //   "albumid": 2,
    //   "name": "Sankranthi Celebrations",
    //   "addedon": "2020-01-15",
    //   "thumbnailimage": "http://138.68.171.189/logo/sankranthi.jpeg"
    // }, {
    //   "albumid": 1,
    //   "name": "Diwali festival celebrations",
    //   "addedon": "2019-10-24",
    //   "thumbnailimage": "http://138.68.171.189/logo/diwali.jpeg"
    // }, {
    //   "albumid": 4,
    //   "name": "Sankranthi Celebrations",
    //   "addedon": "2019-01-15",
    //   "thumbnailimage": "http://138.68.171.189/logo/sankranthi1.jpeg"
    // }, {
    //   "albumid": 3,
    //   "name": "Diwali festival celebrations",
    //   "addedon": "2018-10-24",
    //   "thumbnailimage": "http://138.68.171.189/logo/diwali1.jpeg"
    // }];