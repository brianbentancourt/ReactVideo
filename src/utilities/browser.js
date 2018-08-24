// const chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
// const firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
// const opera = navigator.userAgent.toLowerCase().indexOf('opera');
// const ie = navigator.userAgent.indexOf("MSIE") > -1 ;
// const edge = navigator.userAgent.indexOf("Edge") > -1;


const { detect } = require('detect-browser');
const browser = detect();

export function IsFullScreen(){
	switch (browser && browser.name) {
	  case 'chrome':
			return document.webkitIsFullScreen;
	  case 'firefox':
	    return document.mozFullScreen;
	  case 'edge':
	    return document.webkitIsFullScreen;
	  default:
	    console.log('not supported');
	}
}

export function RequestFullScreen(element){
	switch (browser && browser.name) {
	  case 'chrome':
			element.player.webkitRequestFullscreen();
			break;
	  case 'firefox':
	    element.player.mozRequestFullScreen();
			break;
	  case 'edge':
	    element.player.webkitRequestFullscreen();
			break;
	  default:
	    element.player.webkitRequestFullscreen();
	}
}

export function ExitFullScreen(){
	switch (browser && browser.name) {
	  case 'chrome':
			document.webkitExitFullscreen();
			break;
	  case 'firefox':
	    document.mozCancelFullScreen();
			break;
	  case 'edge':
	    document.webkitExitFullscreen();
			break;
	  default:
	    document.msExitFullscreen();
	}
}


// export function IsFullScreen(){
// 	if(chrome || edge || opera){
// 		return document.webkitIsFullScreen;
// 	}else if(firefox){
// 		return document.mozFullScreen;
// 	}else if(ie){
// 		//TODO
// 	}
// }

// export function RequestFullScreen(element){
// 	if(chrome || edge || opera){
// 		element.player.webkitRequestFullscreen();
// 	}else if(firefox){
// 		element.player.mozRequestFullScreen();
// 	}else if(ie){
// 		element.player.msRequestFullscreen() ;
// 	}
// }

// export function ExitFullScreen(){
// 	if(chrome || edge || opera){
// 		document.webkitExitFullscreen();
// 	}else if(firefox){
// 		document.mozCancelFullScreen();
// 	}else if(ie){
// 		document.msExitFullscreen();
// 	}
// }
