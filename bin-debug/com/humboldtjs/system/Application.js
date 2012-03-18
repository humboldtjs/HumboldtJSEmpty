__humboldtjs.pkg("com.humboldtjs.system");
with (__humboldtjs)
{
	include("com.humboldtjs.system.HtmlUtils", true);
	include("com.humboldtjs.system.Capabilities", true);
	include("com.humboldtjs.display.DisplayObject", true);
	include("com.humboldtjs.display.Stage", true);
	if (com.humboldtjs.system.Application == undefined) {
com.humboldtjs.system.Application = function()
	{
		if (__humboldtjs._inheriting) return;
		if(this.__constructor)this.__constructor();
	}
	com.humboldtjs.system.Application.prototype.__chain = function ()
	{
		if (!__humboldtjs.inherit(com.humboldtjs.system.Application, com.humboldtjs.display.DisplayObject)) return;
		
		com.humboldtjs.system.Application.prototype.__class = com.humboldtjs.system.Application.prototype;
		com.humboldtjs.system.Application.prototype.mApplicationRoot = null;
		com.humboldtjs.system.Application.prototype.mFullScreen = null;
		com.humboldtjs.system.Application.prototype.mStage = null;
		com.humboldtjs.system.Application.prototype.getFullScreen = function()
		{
			with (this) {
			return mFullScreen;
			}
		}
		com.humboldtjs.system.Application.prototype.setFullScreen = function(value)
		{
			with (this) {
			if (mFullScreen != value)
			{
				mFullScreen = value;
				if (mFullScreen)
				{
					if (com.humboldtjs.system.Capabilities.prototype.getHasFullScreen())
					{
						if (document.body["requestFullScreen"])        document["fullScreenEnabled"]();
						else if (document.body["webkitRequestFullScreen"])        document.body["webkitRequestFullScreen"]();
					}
					com.humboldtjs.system.HtmlUtils.prototype.addHtmlEventListener(document, "fullscreenchange", eventFunction(this, onFullScreenChange));
					com.humboldtjs.system.HtmlUtils.prototype.addHtmlEventListener(document, "webkitfullscreenchange", eventFunction(this, onFullScreenChange));
				}
				else
				{
					if (com.humboldtjs.system.Capabilities.prototype.getHasFullScreen())
					{
						if (document["cancelFullScreen"])        document["cancelFullScreen"]();
						else if (document["webkitCancelFullScreen"])        document["webkitCancelFullScreen"]();
					}
					onFullScreenChange(null);
				}
			}
			}
		}
		com.humboldtjs.system.Application.prototype.getStage = function()
		{
			with (this) {
			return mStage;
			}
		}
		com.humboldtjs.system.Application.prototype.__constructor = function()
		{
			with (this) {
			mFullScreen = (mFullScreen !== null) ? mFullScreen : false;
			__humboldtjs.sup(this, com.humboldtjs.display.DisplayObject.prototype.__constructor)();
			if (window["__asjs"].appId != -1)
			{
				mApplicationRoot = document.getElementById(window["__asjs"].appId);
			}
			else
			{
				mApplicationRoot = document.body;
			}
			mStage = com.humboldtjs.display.Stage.prototype.getInstance();
			mElement.style.overflow = "hidden";
			mElement.style.width = "100%";
			mElement.style.height = "100%";
			if (document.body)
			{
				_initialize(null);
			}
			else
			{
				com.humboldtjs.system.HtmlUtils.prototype.addHtmlEventListener(window, "load", eventFunction(this, _initialize));
			}
			}
		}
		com.humboldtjs.system.Application.prototype._initialize = function(aEvent)
		{
			with (this) {
			aEvent = __humboldtjs.event(aEvent);
			if (com.humboldtjs.system.HtmlUtils.prototype.hasHtmlEventListener(document.body, "load"))     com.humboldtjs.system.HtmlUtils.prototype.removeHtmlEventListener(window, "load", eventFunction(this, _initialize));
			com.humboldtjs.system.HtmlUtils.prototype.addHtmlEventListener(window, "resize", eventFunction(this, onResize));
			onResize(null);
			initialize();
			}
		}
		com.humboldtjs.system.Application.prototype.onResize = function(aEvent)
		{
			with (this) {
			aEvent = __humboldtjs.event(aEvent);
			var isIpad = navigator.userAgent.indexOf("iPad") != -1;
			var isFullScreen = navigator["standalone"];
			// Start out by adding the height of the location bar to the width, so that
   // we can scroll past it
   if (com.humboldtjs.system.Capabilities.prototype.getOs() == "iOS")
			{
				var theHeight = document.documentElement.clientHeight;
				// Only add extra padding to the height on iphone / ipod, since the ipad
    // browser doesn't scroll off the location bar.
    if (!isIpad && !isFullScreen) theHeight += 60;
				setHeight(theHeight);
				window.scrollTo(0, 1);
			}
			else if (com.humboldtjs.system.Capabilities.prototype.getOs() == "Android")
			{
				// The stock Android browser has a location bar height of 56 pixels, but
    // this very likely could be broken in other Android browsers.
    setHeight(window.innerHeight + 56);
				window.scrollTo(0, 1);
			}
			}
		}
		com.humboldtjs.system.Application.prototype.initialize = function()
		{
			with (this) {
			mApplicationRoot.appendChild(mElement);
			}
		}
		com.humboldtjs.system.Application.prototype.forceRefresh = function()
		{
			with (this) {
			mApplicationRoot.removeChild(mElement);
			mApplicationRoot.appendChild(mElement);
			}
		}
		com.humboldtjs.system.Application.prototype.onFullScreenChange = function(aEvent)
		{
			with (this) {
			aEvent = __humboldtjs.event(aEvent);
			if (document["webkitIsFullScreen"] || document["fullscreen"])     return;
			com.humboldtjs.system.HtmlUtils.prototype.removeHtmlEventListener(document, "fullscreenchange", eventFunction(this, onFullScreenChange));
			com.humboldtjs.system.HtmlUtils.prototype.removeHtmlEventListener(document, "webkitfullscreenchange", eventFunction(this, onFullScreenChange));
			mFullScreen = false;
			// trigger a resize event because the browser will not always trigger this 
   // event correctly when returning from fullscreen
   if (document["createEvent"])
			{
				var theEvent = document["createEvent"]('HTMLEvents');
				theEvent["initEvent"]("resize", true, false);
				window.dispatchEvent(theEvent);
			}
			else if (window["createEventObject"])
			{
				window["fireEvent"]("onresize");
			}
			}
		}
	}
	};
};


__humboldtjs.ready(com.humboldtjs.system.Application);
