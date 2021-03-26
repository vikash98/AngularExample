import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'home',
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'Welcome to Marketing Communication';
  message: string;

  constructor(private _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
	this.imgSrc="awesome.jpg";
	this.videoSrc="suttle.mp4";
	this.buttonName="button1";
  }

  fileChange(event) {
	var iframe=document.createElement('iframe');
	var video=document.createElement('video');
	video.height='100';
	video.width='150';
    iframe.src="";
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
	var reader = new FileReader();
	var fileName=event.target.files[0].name;
	var fileType[]=fileName.split('.');
	//alert('fileType:'+fileType[1]);
	
	iframe.width='100';
	iframe.height='150';
	
	
	var getImagePath = URL.createObjectURL(event.target.files[0]);  
	if(fileType[1]=='jpg'|| fileType[1]=='gif'){
	
	document.getElementById('img').style.backgroundImage = "url(" + getImagePath + ")";   
	document.getElementById('bodyBkg').style.backgroundImage = "url(" + getImagePath + ")";   
	this.notImage=true;
	this.bkgImgSrc=getImagePath;
	}else if(fileType[1]=='mp4'){
	this.notImage=true;
	//document.getElementById('clock').style.backgroundImage ='';
	
	iframe.src=getImagePath;
	video.src=getImagePath;
	
	this.videoSrc=getImagePath;
	//alert(this.videoSrc)
	//document.getElementById('clock').removeChild(video);
	 document.getElementById('vid').src=getImagePath;
	
	
	//alert(xyz.length);
	}
    reader.readAsDataURL(input.files[0]);
      }  
}
  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
