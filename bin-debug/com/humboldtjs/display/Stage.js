__humboldtjs.pkg("com.humboldtjs.display");
with (__humboldtjs)
{
	include("com.humboldtjs.display.DisplayObject", true);
	include("com.humboldtjs.events.ASJSEvent", true);
	if (com.humboldtjs.display.Stage == undefined) {
com.humboldtjs.display.Stage = function()
	{
		if (__humboldtjs._inheriting) return;
		if(this.__constructor)this.__constructor();
	}
	com.humboldtjs.display.Stage.prototype.__chain = function ()
	{
		if (!__humboldtjs.inherit(com.humboldtjs.display.Stage, com.humboldtjs.display.DisplayObject)) return;
		
		com.humboldtjs.display.Stage.prototype.__class = com.humboldtjs.display.Stage.prototype;
		com.humboldtjs.display.Stage.prototype.mStage = null;
		com.humboldtjs.display.Stage.prototype.mFrameRate = null;
		com.humboldtjs.display.Stage.prototype.mFrameDelay = null;
		com.humboldtjs.display.Stage.prototype.mHasFrameListener = null;
		com.humboldtjs.display.Stage.prototype.getInstance = function()
		{
			with (com.humboldtjs.display.Stage.prototype) {
			if (__class.mStage)     return __class.mStage;
			__class.mStage = new com.humboldtjs.display.Stage();
			return __class.mStage;
			}
		};
		com.humboldtjs.display.Stage.prototype.getStage = function()
		{
			with (this) {
			return this;
			}
		}
		com.humboldtjs.display.Stage.prototype.getFrameRate = function()
		{
			with (this) {
			return mFrameRate;
			}
		}
		com.humboldtjs.display.Stage.prototype.setFrameRate = function(value)
		{
			with (this) {
			mFrameRate = value;
			mFrameDelay = 1000 / mFrameRate;
			}
		}
		com.humboldtjs.display.Stage.prototype.__constructor = function()
		{
			with (this) {
			mFrameRate = (mFrameRate !== null) ? mFrameRate : 25;
			mFrameDelay = (mFrameDelay !== null) ? mFrameDelay : 40;
			mHasFrameListener = (mHasFrameListener !== null) ? mHasFrameListener : false;
			__humboldtjs.sup(this, com.humboldtjs.display.DisplayObject.prototype.__constructor)();
			mElement = document.body;
			doFrameLoop();
			}
		}
		com.humboldtjs.display.Stage.prototype.addEventListener = function(aType,aFunction)
		{
			with (this) {
			if (aType == com.humboldtjs.events.ASJSEvent.prototype.ENTER_FRAME)     mHasFrameListener = true;
			__humboldtjs.sup(this, com.humboldtjs.display.DisplayObject.prototype.addEventListener)(aType, aFunction);
			}
		}
		com.humboldtjs.display.Stage.prototype.removeEventListener = function(aType,aFunction)
		{
			with (this) {
			__humboldtjs.sup(this, com.humboldtjs.display.DisplayObject.prototype.removeEventListener)(aType, aFunction);
			if (aType == com.humboldtjs.events.ASJSEvent.prototype.ENTER_FRAME && !hasEventListener(com.humboldtjs.events.ASJSEvent.prototype.ENTER_FRAME))     mHasFrameListener = false;
			}
		}
		com.humboldtjs.display.Stage.prototype.doFrameLoop = function()
		{
			with (this) {
			if (mHasFrameListener)     dispatchEvent(new com.humboldtjs.events.ASJSEvent(com.humboldtjs.events.ASJSEvent.prototype.ENTER_FRAME));
			window.setTimeout(eventFunction(this, doFrameLoop), mFrameDelay);
			}
		}
	}
	};
};


__humboldtjs.ready(com.humboldtjs.display.Stage);
