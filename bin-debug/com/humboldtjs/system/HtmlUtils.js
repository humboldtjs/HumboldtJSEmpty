__humboldtjs.pkg("com.humboldtjs.system");
with (__humboldtjs)
{
	include("com.humboldtjs.system.Capabilities", true);
	if (com.humboldtjs.system.HtmlUtils == undefined) {
com.humboldtjs.system.HtmlUtils = function()
	{
		if (__humboldtjs._inheriting) return;
		if(this.__constructor)this.__constructor();
	}
	com.humboldtjs.system.HtmlUtils.prototype.__chain = function ()
	{
		com.humboldtjs.system.HtmlUtils.prototype.__class = com.humboldtjs.system.HtmlUtils.prototype;
		com.humboldtjs.system.HtmlUtils.prototype.mListeners = null;
		com.humboldtjs.system.HtmlUtils.prototype.bindPress = function(aElement,aFunction)
		{
			with (com.humboldtjs.system.HtmlUtils.prototype) {
			if (com.humboldtjs.system.Capabilities.prototype.getHasTouchscreen())
			{
				__class.addHtmlEventListener(aElement, "touchstart", aFunction);
			}
			else
			{
				__class.addHtmlEventListener(aElement, "mousedown", aFunction);
			}
			}
		};
		com.humboldtjs.system.HtmlUtils.prototype.bindMove = function(aElement,aFunction)
		{
			with (com.humboldtjs.system.HtmlUtils.prototype) {
			if (com.humboldtjs.system.Capabilities.prototype.getHasTouchscreen())
			{
				__class.addHtmlEventListener(aElement, "touchmove", aFunction);
			}
			else if (aElement.addEventListener)
			{
				__class.addHtmlEventListener(window, "mousemove", aFunction);
			}
			else
			{
				__class.addHtmlEventListener(aElement, "mousemove", aFunction);
			}
			}
		};
		com.humboldtjs.system.HtmlUtils.prototype.bindUnPress = function(aElement,aFunction)
		{
			with (com.humboldtjs.system.HtmlUtils.prototype) {
			if (com.humboldtjs.system.Capabilities.prototype.getHasTouchscreen())
			{
				__class.addHtmlEventListener(aElement, "touchend", aFunction);
				__class.addHtmlEventListener(aElement, "touchcancel", aFunction);
			}
			else if (aElement.addEventListener)
			{
				__class.addHtmlEventListener(window, "mouseup", aFunction);
			}
			else
			{
				__class.addHtmlEventListener(aElement, "mouseup", aFunction);
			}
			}
		};
		com.humboldtjs.system.HtmlUtils.prototype.unbindPress = function(aElement,aFunction)
		{
			with (com.humboldtjs.system.HtmlUtils.prototype) {
			if (com.humboldtjs.system.Capabilities.prototype.getHasTouchscreen())
			{
				__class.removeHtmlEventListener(aElement, "touchstart", aFunction);
			}
			else
			{
				__class.removeHtmlEventListener(aElement, "mousedown", aFunction);
			}
			}
		};
		com.humboldtjs.system.HtmlUtils.prototype.unbindMove = function(aElement,aFunction)
		{
			with (com.humboldtjs.system.HtmlUtils.prototype) {
			if (com.humboldtjs.system.Capabilities.prototype.getHasTouchscreen())
			{
				__class.removeHtmlEventListener(aElement, "touchmove", aFunction);
			}
			else if (aElement.addEventListener)
			{
				__class.removeHtmlEventListener(window, "mousemove", aFunction);
			}
			else
			{
				__class.removeHtmlEventListener(aElement, "mousemove", aFunction);
			}
			}
		};
		com.humboldtjs.system.HtmlUtils.prototype.unbindUnPress = function(aElement,aFunction)
		{
			with (com.humboldtjs.system.HtmlUtils.prototype) {
			if (com.humboldtjs.system.Capabilities.prototype.getHasTouchscreen())
			{
				__class.removeHtmlEventListener(aElement, "touchend", aFunction);
				__class.removeHtmlEventListener(aElement, "touchcancel", aFunction);
			}
			else if (aElement.addEventListener)
			{
				__class.removeHtmlEventListener(window, "mouseup", aFunction);
			}
			else
			{
				__class.removeHtmlEventListener(aElement, "mouseup", aFunction);
			}
			}
		};
		com.humboldtjs.system.HtmlUtils.prototype.addHtmlEventListener = function(aElement,aType,aFunction)
		{
			with (com.humboldtjs.system.HtmlUtils.prototype) {
			if (__class.mListeners == null) __class.mListeners = [];
			var theListener = null;
			for (var i = __class.mListeners.length - 1; i >= 0; i--)
			{
				theListener = mListeners[i];
				if (theListener.t == aType &&       theListener.s == aFunction.s &&      theListener.f == aFunction.f &&      theListener.l == aElement) return;
			}
			theListener =
			{
				t: aType, e: aFunction, s: aFunction.s, f: aFunction.f, l: aElement
			};
			__class.mListeners.push(theListener);
			if (theListener.l.addEventListener)
			{
				theListener.l.addEventListener(theListener.t, theListener.e, false);
			}
			else if (theListener.l.attachEvent)
			{
				theListener.l.attachEvent("on" + theListener.t, theListener.e);
			}
			}
		};
		com.humboldtjs.system.HtmlUtils.prototype.hasHtmlEventListener = function(aElement,aType)
		{
			with (com.humboldtjs.system.HtmlUtils.prototype) {
			if (__class.mListeners == null) __class.mListeners = [];
			var theListener = null;
			for (var i = __class.mListeners.length - 1; i >= 0; i--)
			{
				theListener = mListeners[i];
				if (theListener.t == aType &&      theListener.l == aElement) return true;
			}
			return false;
			}
		};
		com.humboldtjs.system.HtmlUtils.prototype.removeHtmlEventListener = function(aElement,aType,aFunction)
		{
			with (com.humboldtjs.system.HtmlUtils.prototype) {
			if (__class.mListeners == null) __class.mListeners = [];
			var theListener = null;
			for (var i = __class.mListeners.length - 1; i >= 0; i--)
			{
				theListener = mListeners[i];
				if (theListener.t == aType &&       theListener.s == aFunction.s &&      theListener.f == aFunction.f &&      theListener.l == aElement)
				{
					__class.mListeners.splice(i, 1);
					i = 0;
				}
			}
			if (theListener == null) return;
			if (theListener.l.removeEventListener)
			{
				theListener.l.removeEventListener(theListener.t, theListener.e, false);
			}
			else if (theListener.l.detachEvent)
			{
				theListener.l.detachEvent("on" + theListener.t, theListener.e);
			}
			}
		};
		com.humboldtjs.system.HtmlUtils.prototype.getHtmlElementById = function(aId,aParentObject)
		{
			with (com.humboldtjs.system.HtmlUtils.prototype) {
			var theParentObject = aParentObject || document.body;
			for (var i = 0; i < theParentObject.childNodes.length; i++)
			{
				var theElement = theParentObject.childNodes[i];
				if (theElement.id == aId)      return theElement;
				var theRecursiveCheckedElement = com.humboldtjs.system.HtmlUtils.prototype.getHtmlElementById(aId, theElement);
				if (theRecursiveCheckedElement != null)      return theRecursiveCheckedElement;
			}
			return null;
			}
		};
	}
	};
};


__humboldtjs.ready(com.humboldtjs.system.HtmlUtils);
