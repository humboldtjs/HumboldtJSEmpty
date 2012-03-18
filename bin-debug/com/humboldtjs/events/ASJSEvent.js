__humboldtjs.pkg("com.humboldtjs.events");
with (__humboldtjs)
{
	include("com.humboldtjs.events.EventDispatcher", true);
	if (com.humboldtjs.events.ASJSEvent == undefined) {
com.humboldtjs.events.ASJSEvent = function(aType)
	{
		if (__humboldtjs._inheriting) return;
		if(this.__constructor)this.__constructor(aType);
	}
	com.humboldtjs.events.ASJSEvent.prototype.__chain = function ()
	{
		com.humboldtjs.events.ASJSEvent.prototype.__class = com.humboldtjs.events.ASJSEvent.prototype;
		com.humboldtjs.events.ASJSEvent.prototype.COMPLETE = "complete";
		com.humboldtjs.events.ASJSEvent.prototype.ENTER_FRAME = "enterFrame";
		com.humboldtjs.events.ASJSEvent.prototype.mType = null;
		com.humboldtjs.events.ASJSEvent.prototype.mCurrentTarget = null;
		com.humboldtjs.events.ASJSEvent.prototype.mIsDefaultPrevented = null;
		com.humboldtjs.events.ASJSEvent.prototype.mStopImmediatePropagation = null;
		com.humboldtjs.events.ASJSEvent.prototype.getType = function()
		{
			with (this) {
			return mType;
			}
		}
		com.humboldtjs.events.ASJSEvent.prototype.setType = function(value)
		{
			with (this) {
			mType = value;
			}
		}
		com.humboldtjs.events.ASJSEvent.prototype.getCancelable = function()
		{
			with (this) {
			return true;
			}
		}
		com.humboldtjs.events.ASJSEvent.prototype.getCurrentTarget = function()
		{
			with (this) {
			return mCurrentTarget;
			}
		}
		com.humboldtjs.events.ASJSEvent.prototype.__constructor = function(aType)
		{
			with (this) {
			mIsDefaultPrevented = false;
			mStopImmediatePropagation = false;
			setType(aType);
			}
		}
		com.humboldtjs.events.ASJSEvent.prototype.preventDefault = function()
		{
			with (this) {
			mIsDefaultPrevented = true;
			}
		}
		com.humboldtjs.events.ASJSEvent.prototype.isDefaultPrevented = function()
		{
			with (this) {
			return mIsDefaultPrevented;
			}
		}
		com.humboldtjs.events.ASJSEvent.prototype.stopImmediatePropagation = function()
		{
			with (this) {
			mStopImmediatePropagation = true;
			}
		}
	}
	};
};


__humboldtjs.ready(com.humboldtjs.events.ASJSEvent);
