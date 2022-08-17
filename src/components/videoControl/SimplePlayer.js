import { ccWrapper } from './clientContainerIndex'

class SimplePlayer {
	ccSession = undefined;
	playHandle = undefined;
	winId = undefined;
	elementId = undefined;
	constructor(s, ph, wid, eid) {
		this.ccSession = s;
		this.playHandle = ph;
		this.winId = wid;
		this.elementId = eid;
	}
	startDirectlyPlayTest(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "startDirectlyPlayTest", params);
	}
	startPlayReal(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "startPlayReal", params);
	}
	stopPlayReal(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "stopPlayReal", params);
	}
	realRecord(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "realRecord", params);
	}
	controlPTZ(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "PTZControl", params);
	}

	PTZDirectionCtl(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "PTZDirectionCtl", params);
	}

	digitalZoom(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "digitalZoom", params);
	}
	ptz3DZoom(params) {
        params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
        return this.ccSession.callModuleMethod("CCvideoplay", "ptz3DZoom", params);
    }
	snapShot(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "snapShot", params);
	}
	deviceTalk(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "deviceTalk", params);
	}
	sound(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "sound", params);
	}
	destroy() {
		return ccWrapper.ccUnBindWindow(this.winId);
	}
	startPlayBack(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "startPlayBack", params);
	}
	stopPlayBack(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "stopPlayBack", params);
	}
	speedPlay(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "speedPlay", params);
	}
	pause(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "pause", params);
	}
	getOSDTime(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "getOSDTime", params);
	}
	frameNext(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "frameNext", params);
	}
	framePre(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "framePre", params);
	}
	timeSelect(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "timeSelect", params);
	}
	downloadSelect(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "downloadSelect", params);
	}
	showTimeAxis(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "showTimeAxis", params);
	}
	seekTime(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "seekTime", params);
	}
	rotate(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "rotate", params);
	}
	autoScale(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "autoScale", params);
	}
	clear(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "clear", params);
	}
	showErrorInfo(params) {
		params.sessionId = this.ccSession.sessionId;
		params.playHandle = this.playHandle;
		return this.ccSession.callModuleMethod("CCvideoplay", "showErrorInfo", params);
	}
}
export default SimplePlayer
