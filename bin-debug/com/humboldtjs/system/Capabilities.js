__humboldtjs.pkg("com.humboldtjs.system");
with (__humboldtjs)
{
	if (com.humboldtjs.system.Capabilities == undefined) {
com.humboldtjs.system.Capabilities = function()
	{
		if (__humboldtjs._inheriting) return;
		if(this.__constructor)this.__constructor();
	}
	com.humboldtjs.system.Capabilities.prototype.__chain = function ()
	{
		com.humboldtjs.system.Capabilities.prototype.__class = com.humboldtjs.system.Capabilities.prototype;
		com.humboldtjs.system.Capabilities.prototype.getHasCanvasSupport = function()
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			return (document.createElement("canvas")["getContext"] != null);
			}
		};
		com.humboldtjs.system.Capabilities.prototype.getHasFullScreen = function()
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			if (document.body["requestFullScreen"])     return document["fullScreenEnabled"];
			else if (document.body["webkitRequestFullScreen"])     return true;
			return false;
			}
		};
		com.humboldtjs.system.Capabilities.prototype.getHasTouchscreen = function()
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			return (navigator.userAgent.indexOf("iPhone") != -1 ||      navigator.userAgent.indexOf("iPod") != -1 ||      navigator.userAgent.indexOf("iPad") != -1 ||     navigator.userAgent.indexOf("Android") != -1);
			}
		};
		com.humboldtjs.system.Capabilities.prototype.getHasAudio = function()
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			return document.createElement("audio")["src"] !== undefined;
			}
		};
		com.humboldtjs.system.Capabilities.prototype.getHasVideo = function()
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			return document.createElement("video")["src"] !== undefined;
			}
		};
		com.humboldtjs.system.Capabilities.prototype.getHasMp4 = function()
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			return __class.videoMimeSupported("video/mp4");
			}
		};
		com.humboldtjs.system.Capabilities.prototype.getHasWebm = function()
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			return __class.videoMimeSupported("video/webm");
			}
		};
		com.humboldtjs.system.Capabilities.prototype.getLanguage = function()
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			return (navigator["language"] === undefined) ? "en" : navigator["language"];
			}
		};
		com.humboldtjs.system.Capabilities.prototype.getOs = function()
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			if (navigator.userAgent.indexOf("iPhone") != -1) return "iOS";
			if (navigator.userAgent.indexOf("iPod") != -1) return "iOS";
			if (navigator.userAgent.indexOf("iPad") != -1) return "iOS";
			if (navigator.userAgent.indexOf("Android") != -1) return "Android";
			if (navigator.appVersion.indexOf("Win") != -1) return "Windows";
			if (navigator.appVersion.indexOf("Mac") != -1) return "Macintosh";
			if (navigator.appVersion.indexOf("X11") != -1) return "UNIX";
			if (navigator.appVersion.indexOf("Linux") != -1) return "Linux";
			return "Unknown OS";
			}
		};
		com.humboldtjs.system.Capabilities.prototype.getManufacturer = function()
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			return "ASJS " + __class.getOs();
			}
		};
		com.humboldtjs.system.Capabilities.prototype.getScreenResolutionX = function()
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			return screen.width;
			}
		};
		com.humboldtjs.system.Capabilities.prototype.getScreenResolutionY = function()
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			return screen.height;
			}
		};
		com.humboldtjs.system.Capabilities.prototype.getScreenAvailableX = function()
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			return screen.availWidth;
			}
		};
		com.humboldtjs.system.Capabilities.prototype.getScreenAvailableY = function()
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			return screen.availHeight;
			}
		};
		com.humboldtjs.system.Capabilities.prototype.getPixelAspectRatio = function()
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			return (__class.getScreenResolutionX() == 1280 && __class.getScreenResolutionY() == 1024) ? 0.9375 : 1;
			}
		};
		com.humboldtjs.system.Capabilities.prototype.getVersion = function()
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			return "1,0,0,0";
			}
		};
		com.humboldtjs.system.Capabilities.prototype.videoMimeSupported = function(aMime)
		{
			with (com.humboldtjs.system.Capabilities.prototype) {
			var theCanPlay = false;
			var theVideo = document.createElement("video");
			if (theVideo["canPlayType"] && theVideo["canPlayType"](aMime).replace(/no/, ''))     theCanPlay = true;
			return theCanPlay;
			}
		};
	}
	};
};


__humboldtjs.ready(com.humboldtjs.system.Capabilities);
