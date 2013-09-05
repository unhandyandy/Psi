// -*-js-*-

/*jslint browser:true, devel:true, es5:true */

/*global */


function hunt( imgnum ) {
  var folder = DriveApp.getFolderById( "0B1STHHfN2c9DRmE1M0MzOXJqeHc" );
  var  id,
      imgResp, imgData, imgsrc, imgblob;

  do{
      id = randomString(5),

	imgsrc = "http://i.imgur.com/"+id+".jpg";
  	imgResp = UrlFetchApp.fetch(imgsrc);
    imgblob = imgResp.getBlob();
    imgData = imgResp.getContent().slice(0, 19);
    //Logger.log(imgData);
 } while ( imgData.join() == [-119, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0].join() ||
     imgData.join() == [-1,-40,-1,-32,0,16,74,70,73,70,0,1,1,0,0,1,0,1,0].join() ||
     imgblob.getContentType() != "image/jpeg" ) ;

  //srcform = "=image(\"" + imgsrc + "\")";
  //ss.getRange("a1").setFormula(srcform);

  var filename = numToFileName(imgnum);
  imgblob.setName(filename);
  folder.createFile(imgblob);
  Logger.log( filename + ": " + imgData );

  //return [ imgblob, imgnum ];
  //folder.createFile(filename, imgblob.getBytes(), "image/png");
    }

function randomString(len) {
	"use strict";
	var text, i, imgurchar,
	    possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	imgurchar = possible.charAt(Math.floor(Math.random() * possible.length));

	text = len > 1 ? imgurchar + randomString( len - 1) : imgurchar;
	    return text;
    }
