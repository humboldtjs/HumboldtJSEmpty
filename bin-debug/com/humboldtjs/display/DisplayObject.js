__humboldtjs.pkg("com.humboldtjs.display");
with (__humboldtjs)
{
	include("com.humboldtjs.events.EventDispatcher", true);
	include("com.humboldtjs.system.Application", true);
	if (com.humboldtjs.display.DisplayObject == undefined) {
com.humboldtjs.display.DisplayObject = function()
	{
		if (__humboldtjs._inheriting) return;
		if(this.__constructor)this.__constructor();
	}
	com.humboldtjs.display.DisplayObject.prototype.__chain = function ()
	{
		if (!__humboldtjs.inherit(com.humboldtjs.display.DisplayObject, com.humboldtjs.events.EventDispatcher)) return;
		
		com.humboldtjs.display.DisplayObject.prototype.__class = com.humboldtjs.display.DisplayObject.prototype;
		com.humboldtjs.display.DisplayObject.prototype.mElement = null;
		com.humboldtjs.display.DisplayObject.prototype.mElementType = null;
		com.humboldtjs.display.DisplayObject.prototype.mChildren = null;
		com.humboldtjs.display.DisplayObject.prototype.mX = null;
		com.humboldtjs.display.DisplayObject.prototype.mY = null;
		com.humboldtjs.display.DisplayObject.prototype.mZIndex = null;
		com.humboldtjs.display.DisplayObject.prototype.mRight = null;
		com.humboldtjs.display.DisplayObject.prototype.mBottom = null;
		com.humboldtjs.display.DisplayObject.prototype.mWidth = null;
		com.humboldtjs.display.DisplayObject.prototype.mHeight = null;
		com.humboldtjs.display.DisplayObject.prototype.mPercentWidth = null;
		com.humboldtjs.display.DisplayObject.prototype.mPercentHeight = null;
		com.humboldtjs.display.DisplayObject.prototype.mAlpha = null;
		com.humboldtjs.display.DisplayObject.prototype.mVisible = null;
		com.humboldtjs.display.DisplayObject.prototype.mParent = null;
		com.humboldtjs.display.DisplayObject.prototype.setParent = function(aParent)
		{
			with (this) {
			mParent = aParent;
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getParent = function()
		{
			with (this) {
			return mParent;
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getStage = function()
		{
			with (this) {
			return getApplication().getStage();
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getApplication = function()
		{
			with (this) {
			var theApplication = this;
			while (!(__humboldtjs.isOfType(theApplication, com.humboldtjs.system.Application)) && (theApplication != null))
			{
				theApplication = theApplication.getParent();
			}
			if (theApplication == null)     return null;
			return __humboldtjs.castAs(theApplication, com.humboldtjs.system.Application);
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getZIndex = function()
		{
			with (this) {
			return mZIndex;
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.setZIndex = function(value)
		{
			with (this) {
			if (mZIndex == value) return;
			mZIndex = value;
			mElement.style.zIndex = "" + Math.round(value);
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getVisible = function()
		{
			with (this) {
			return mVisible;
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.setVisible = function(value)
		{
			with (this) {
			if (mVisible == value) return;
			mVisible = value;
			mElement.style.display = mVisible ? "block" : "none";
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getAlpha = function()
		{
			with (this) {
			return mAlpha;
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.setAlpha = function(value)
		{
			with (this) {
			if (mAlpha == value) return;
			mAlpha = value;
			mElement.style.opacity = mAlpha.toFixed(1);
			mElement.style.filter = "alpha(opacity=" + Math.round(mAlpha * 100) + ")";
			if (mAlpha == 0)
			{
				mElement.style.display = "none";
			}
			else
			{
				mElement.style.display = "block";
			}
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getX = function()
		{
			with (this) {
			return mX;
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.setX = function(value)
		{
			with (this) {
			if (mX == value) return;
			mX = value;
			if (isNaN(mX))     mElement.style.left = null;
			else     mElement.style.left = Math.round(mX) + "px";
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getRight = function()
		{
			with (this) {
			return mRight;
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.setRight = function(value)
		{
			with (this) {
			if (mRight == value) return;
			mRight = value;
			if (isNaN(mRight))     mElement.style.right = null;
			else     mElement.style.right = Math.round(mRight) + "px";
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getY = function()
		{
			with (this) {
			return mY;
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.setY = function(value)
		{
			with (this) {
			if (mY == value) return;
			mY = value;
			if (isNaN(mY))     mElement.style.top = null;
			else     mElement.style.top = Math.round(mY) + "px";
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getBottom = function()
		{
			with (this) {
			return mBottom;
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.setBottom = function(value)
		{
			with (this) {
			if (mBottom == value) return;
			mBottom = value;
			if (isNaN(mBottom))     mElement.style.bottom = null;
			else     mElement.style.bottom = Math.round(mBottom) + "px";
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getScaleX = function()
		{
			with (this) {
			return 1;
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.setScaleX = function(value)
		{
			with (this) {
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getScaleY = function()
		{
			with (this) {
			return 1;
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.setScaleY = function(value)
		{
			with (this) {
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getUnscaledWidth = function()
		{
			with (this) {
			return mElement.clientWidth;
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getUnscaledHeight = function()
		{
			with (this) {
			return mElement.clientHeight;
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getWidth = function()
		{
			with (this) {
			return Math.max(0, mWidth);
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.setWidth = function(value)
		{
			with (this) {
			if (mWidth == value) return;
			mWidth = value;
			mPercentHeight = NaN;
			if (isNaN(mWidth))     mElement.style.width = null;
			else     mElement.style.width = Math.round(mWidth) + "px";
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getHeight = function()
		{
			with (this) {
			return Math.max(0, mHeight);
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.setHeight = function(value)
		{
			with (this) {
			if (mHeight == value) return;
			mHeight = value;
			mPercentHeight = NaN;
			if (isNaN(mHeight))     mElement.style.height = null;
			else     mElement.style.height = Math.round(mHeight) + "px";
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getPercentWidth = function()
		{
			with (this) {
			return Math.max(0, mPercentWidth);
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.setPercentWidth = function(value)
		{
			with (this) {
			if (mPercentWidth == value) return;
			mPercentWidth = value;
			mWidth = NaN;
			if (isNaN(mPercentWidth))     mElement.style.width = null;
			else     mElement.style.width = Math.round(mPercentWidth) + "%";
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getPercentHeight = function()
		{
			with (this) {
			return Math.max(0, mPercentHeight);
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.setPercentHeight = function(value)
		{
			with (this) {
			if (mPercentHeight == value) return;
			mPercentHeight = value;
			mHeight = NaN;
			if (isNaN(mPercentHeight))     mElement.style.height = null;
			else     mElement.style.height = Math.round(mPercentHeight) + "%";
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getHtmlElement = function()
		{
			with (this) {
			return mElement;
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getNumChildren = function()
		{
			with (this) {
			return mChildren.length;
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.__constructor = function()
		{
			with (this) {
			mElementType = (mElementType !== null) ? mElementType : "";
			mX = (mX !== null) ? mX : -999999;
			mY = (mY !== null) ? mY : -999999;
			mZIndex = (mZIndex !== null) ? mZIndex : 0;
			mRight = (mRight !== null) ? mRight : -999999;
			mBottom = (mBottom !== null) ? mBottom : -999999;
			mWidth = (mWidth !== null) ? mWidth : -1;
			mHeight = (mHeight !== null) ? mHeight : -1;
			mPercentWidth = (mPercentWidth !== null) ? mPercentWidth : -1;
			mPercentHeight = (mPercentHeight !== null) ? mPercentHeight : -1;
			mAlpha = (mAlpha !== null) ? mAlpha : 1;
			mVisible = (mVisible !== null) ? mVisible : true;
			__humboldtjs.sup(this, com.humboldtjs.events.EventDispatcher.prototype.__constructor)();
			if (mElementType == "" && mElement == null)
			{
				mElementType = "div";
			}
			mElement = document.createElement(mElementType);
			mElement.style.position = "absolute";
			mElement.style.zIndex = "0";
			setX(0);
			setY(0);
			mChildren = new Array();
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.addChild = function(aChild)
		{
			with (this) {
			var theIndex = mChildren.indexOf(aChild);
			if (theIndex != -1)
			{
				if (theIndex != mChildren.length - 1)
				{
					mChildren.splice(theIndex, 1);
				}
				else
				{
					return;
				}
			}
			mChildren.push(aChild);
			mElement.appendChild(aChild.getHtmlElement());
			aChild.setParent(this);
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.addChildAt = function(aChild,aIndex)
		{
			with (this) {
			var theIndex = mChildren.indexOf(aChild);
			if (theIndex != -1)
			{
				if (theIndex != mChildren.length - 1)
				{
					mChildren.splice(theIndex, 1);
				}
				else
				{
					return;
				}
			}
			if (aIndex >= mChildren.length)
			{
				addChild(aChild);
				return;
			}
			mChildren.splice(aIndex, 0, aChild);
			mElement.insertBefore(aChild.getHtmlElement(), mElement.childNodes[aIndex]);
			aChild.setParent(this);
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.removeChild = function(aChild)
		{
			with (this) {
			if (mChildren.indexOf(aChild) == -1) return;
			removeChildAt(mChildren.indexOf(aChild));
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.removeChildAt = function(aIndex)
		{
			with (this) {
			var theChild = mChildren[aIndex];
			mChildren.splice(aIndex, 1);
			mElement.removeChild(theChild.getHtmlElement());
			theChild.setParent(null);
			}
		}
		com.humboldtjs.display.DisplayObject.prototype.getChildAt = function(aIndex)
		{
			with (this) {
			return mChildren[aIndex];
			}
		}
	}
	};
};


__humboldtjs.ready(com.humboldtjs.display.DisplayObject);
