__humboldtjs.pkg("com.humboldtjs.events");
with (__humboldtjs)
{
	include("com.humboldtjs.events.IEventDispatcher", true);
	include("com.humboldtjs.events.ASJSEvent", true);
	if (com.humboldtjs.events.EventDispatcher == undefined) {
com.humboldtjs.events.EventDispatcher = function()
	{
		if (__humboldtjs._inheriting) return;
		if(this.__constructor)this.__constructor();
	}
	com.humboldtjs.events.EventDispatcher.prototype.__chain = function ()
	{
		if (com.humboldtjs.events.EventDispatcher.prototype.__implements === undefined) com.humboldtjs.events.EventDispatcher.prototype.__implements = [];
com.humboldtjs.events.EventDispatcher.prototype.__implements = com.humboldtjs.events.EventDispatcher.prototype.__implements.concat(["com.humboldtjs.events.IEventDispatcher"]);
		com.humboldtjs.events.EventDispatcher.prototype.__class = com.humboldtjs.events.EventDispatcher.prototype;
		com.humboldtjs.events.EventDispatcher.prototype.mListeners = null;
		com.humboldtjs.events.EventDispatcher.prototype.__constructor = function()
		{
			with (this) {
			mListeners = [];
			}
		}
		com.humboldtjs.events.EventDispatcher.prototype.addEventListener = function(aType,aFunction)
		{
			with (this) {
			var theListener = null;
			for (var i = mListeners.length - 1; i >= 0; i--)
			{
				theListener = mListeners[i];
				if (theListener.t == aType &&       theListener.s == aFunction.s &&      theListener.f == aFunction.f) return;
			}
			theListener =
			{
				t: aType, e: aFunction, s: aFunction.s, f: aFunction.f
			};
			mListeners.push(theListener);
			}
		}
		com.humboldtjs.events.EventDispatcher.prototype.hasEventListener = function(aType)
		{
			with (this) {
			var theListener = null;
			for (var i = mListeners.length - 1; i >= 0; i--)
			{
				theListener = mListeners[i];
				if (theListener.t == aType) return true;
			}
			return false;
			}
		}
		com.humboldtjs.events.EventDispatcher.prototype.removeEventListener = function(aType,aFunction)
		{
			with (this) {
			var theListener = null;
			for (var i = mListeners.length - 1; i >= 0; i--)
			{
				theListener = mListeners[i];
				if (theListener.t == aType &&       theListener.s == aFunction.s &&      theListener.f == aFunction.f)
				{
					mListeners.splice(i, 1);
				}
			}
			}
		}
		com.humboldtjs.events.EventDispatcher.prototype.dispatchEvent = function(aEvent)
		{
			with (this) {
			var theListener = null;
			var theType = aEvent.getType();
			// Set the currentTarget to the instance dispatching the event
   aEvent["mCurrentTarget"] = this;
			for (var i = mListeners.length - 1; i >= 0; i--)
			{
				theListener = mListeners[i];
				if (theListener.t == theType)
				{
					theListener.e(aEvent);
					// Check whether stop immediate propagation has been called
     // in the last listener function
     if (aEvent["mStopImmediatePropagation"] == true) return;
				}
			}
			}
		}
	}
	};
};


__humboldtjs.ready(com.humboldtjs.events.EventDispatcher);
