__humboldtjs.pkg("com.humboldtjs.events");
with (__humboldtjs)
{
	include("com.humboldtjs.events.ASJSEvent", true);
	com.humboldtjs.events.IEventDispatcher =
	{
		"interface":"com.humboldtjs.events.IEventDispatcher","extends":[]
	};
};


__humboldtjs.ready(com.humboldtjs.events.IEventDispatcher);
