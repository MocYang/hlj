/**
 * @Description: 下载文件
 * @ComponentName: download
 * @Author: wangzhigang11
 * @Date: 2022-08-09 10:40
 */
import { guid } from '@northeast-utils/core'
import moment from 'moment'
export default {
  methods: {
    getType(file) {
      const index = file.lastIndexOf('.');
      return file.substring(index + 1, file.length);
    },
    getBase64Type(type) {
      switch (type) {
        case 'txt':
          return 'data:text/plain;base64,';
        case 'doc':
          return 'data:application/msword;base64,';
        case 'docx':
          return 'data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,';
        case 'xls':
          return 'data:application/vnd.ms-excel;base64,';
        case 'xlsx':
          return 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,';
        case 'pdf':
          return 'data:application/pdf;base64,';
        case 'pptx':
          return 'data:application/vnd.openxmlformats-officedocument.presentationml.presentation;base64,';
        case 'ppt':
          return 'data:application/vnd.ms-powerpoint;base64,';
        case 'png':
          return 'data:image/png;base64,';
        case 'jpg':
          return 'data:image/jpeg;base64,';
        case 'gif':
          return 'data:image/gif;base64,';
        case 'svg':
          return 'data:image/svg+xml;base64,';
        case 'ico':
          return 'data:image/x-icon;base64,';
        case 'bmp':
          return 'data:image/bmp;base64,';
      }
    },
    //将base64转换为blob
    dataURLtoBlob(dataUrl) {
      const arr = dataUrl.split(',')
      const mime = arr[0].match(/:(.*?);/)[1]
      const bStr = atob(arr[1])
      let n = bStr.length
      const u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bStr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },
//下载方法
    downloadFile(url, name = guid()) {
      const a = document.createElement('a');
      a.setAttribute('href', url);
      a.setAttribute('download', name);
      a.setAttribute('target', '_blank');
      let clickEvent = document.createEvent('MouseEvents');
      clickEvent.initEvent('click', true, true);
      a.dispatchEvent(clickEvent);
    },

    downloadFileByBase64(base64, name = guid()) {
      const myBlob = this.dataURLtoBlob(base64);
      this.downloadFile(URL.createObjectURL(myBlob), `${moment().format('YYYY-MM-DD_HH-mm-ss')}_${name}`);
    }
  }
}
