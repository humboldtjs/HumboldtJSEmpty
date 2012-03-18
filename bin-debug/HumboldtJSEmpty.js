// Defines the __humboldtjs object which provides most of the functionality for
// classical inheritance in JS and also fixes some internal objects to provide
// the complete functionality of EcmaScript
if (window.__humboldtjs == undefined) {
	__humboldtjs = {};
	__humboldtjs.version = "0.8.0";
	__humboldtjs._inheriting = false;
	__humboldtjs.appId = -1;
	__humboldtjs._instances = [];
	if (window.humboldtReadyHandlers == undefined) window.humboldtReadyHandlers = [];
		
	(function(){
		inc = [];
		done = [];
		instance = 0;
	
		if([].indexOf==undefined)Array.prototype.indexOf=function(v){for(var i=0;i<this.length;i++)if(this[i]==v)return i;return-1}
		
		__humboldtjs.autoInit = function(c) {
			var localInstance = instance++;
			document.write("<div id=\"__" + c + "_" + localInstance + "__\"></div>");
			window.humboldtReadyHandlers.push(function(){__humboldtjs.appId = "__" + c + "_" + localInstance + "__";eval("new " + c + "();");__humboldtjs.appId = -1;});
		}
		
		__humboldtjs.app = function(c) {
			inc.push(c);
		}
		
		__humboldtjs.regUid = function(u, c) {
			if (c && u) {
				__humboldtjs["__" + u] = c.prototype;
				__humboldtjs["_$" + u] = c;
			}
		}
		
		__humboldtjs.ready = function(c) {
			if (done.indexOf(c) == -1 && c != null) done.push(c);
			if (done.length == inc.length) {
				__humboldtjs.setupInheritance();
				if (window.humboldtReadyHandlers != undefined) {
					var theHandlers = window.humboldtReadyHandlers;
					window.humboldtReadyHandlers = [];
					for (var i = 0; i < theHandlers.length; i++) {
						theHandlers[i]();
					}
				}
			}
		}
		
		__humboldtjs.include = function(c, e) {
			if (c == null) return;
			if (e == null) e = false;
			if (inc.indexOf(c) == -1) {
				inc.push(c);
				var b = "";
				if (window.humboldtBaseUrl != undefined) b = window.humboldtBaseUrl;
				if (e == true) {
					var theScript = document.createElement("script");
					theScript.src = b+c.split(".").join("/")+".js";
					var theHead = document.getElementsByTagName("head")[0];
					theHead.appendChild(theScript);
				}
			} else {
				inc.splice(inc.indexOf(c), 1);
				inc.push(c);
			}
		}
		
		__humboldtjs.pkg = function(p) {
			if (p == "") return;
			p = p.split(".");
			var o = window;
			for (var i = 0; i < p.length; i++) {
				if (o[p[i]] == undefined) o[p[i]] = {};
				o = o[p[i]];
			}
			eval(p[0] + "=window[\"" + p[0] +"\"];");
		}
	
		__humboldtjs.setupInheritance = function() {
			for (var i = inc.length - 1; i >= 0; i--) {
				var c = eval(inc[i]);
				if (c && c.prototype && !c.prototype.__inheritanceComplete) {
					var cp = c.prototype;
					if (cp.__chain) cp.__chain.apply();
					var m = cp.__implements;
					if(m)
					for(var k = 0; k < m.length; k++) {
						var l = eval(m[k])["extends"];
						if (l.length > 0) {
							for (var n = 0; n < l.length; n++) {
								if (m.indexOf(l[n]) == -1) m.push(l[n]);
							}
						}
					}
	
					if (c.prototype.__class) {
						c.prototype.__inheritanceComplete = true;
					} else {
						var t = inc[i];
						inc.splice(i, 1);
						inc.unshift(t);
						i++;
					}
				}
			}
		}
		
		__humboldtjs.inherit = function(n, c, s) {
			if (!c.prototype.__class) return false;
	
			__humboldtjs._inheriting = true;
			n.prototype = new c();
			__humboldtjs._inheriting = false;
			
			if (s) __humboldtjs.regUid(s, n);

			return true;
		}
	
		__humboldtjs.event = function(e) {
			return e ? e : window.event;
		}
		
		__humboldtjs.sup = function(t, c) {
			return function() { return c.apply(t, arguments); }
		}
		
		trace = function() {
			if (console && console.log) {
				if (console.log.apply) {
					console.log.apply(console,arguments);
				} else {
					console.log(arguments[0]);
				}
			}
		}
		
		eventFunction = function(s, f) {
			var n = function() { return arguments.callee.f.apply(arguments.callee.s,arguments); };
			n.f = f;
			n.s = s;
			return n;
		}
	
		loadModule = function(c, f) {
			if (window.humboldtReadyHandlers == undefined) window.humboldtReadyHandlers = [];
			window.humboldtReadyHandlers.push(f);
	
			__humboldtjs.include(c, true);
			__humboldtjs.ready(null);
		}
		
		hasModule = function(c) {
			return (inc.indexOf(c) != -1);
		}
		
		dynamicModule = function(c) {
			return eval("new " + c + "();");
		}
		
		__humboldtjs.castAs = function (o, c) {
			return __humboldtjs.isOfType(o, c) ? o : null;
		}
		
		__humboldtjs.isImplementation = function (o, c) {
			o = o.__implements;
			if (o) {
				for (var i = 0; i < o.length; i ++) {
					if (o[i] == c) return true;
				}
			}
			return false;
		}
		
		__humboldtjs.isOfType = function(o,c) {
			if (o == null) return false;
			if (c == null) return true;
			if (c == Object) return (typeof o == "object");
			if (c == String) return (typeof o == "string");
			if (typeof c == "object" && c["interface"]) return __humboldtjs.isImplementation(o, c["interface"]);
			if (typeof c == "string") return o.nodeName==c.toUpperCase();
			return o instanceof c;
		}
	})();

}

__humboldtjs.autoInit("window.HumboldtJSEmpty");__humboldtjs.app("window.HumboldtJSEmpty");
__humboldtjs.pkg("");
with (__humboldtjs)
{
	include("com.humboldtjs.system.Application", true);
	if (window.HumboldtJSEmpty == undefined) {
window.HumboldtJSEmpty = function()
	{
		if (__humboldtjs._inheriting) return;
		if(this.__constructor)this.__constructor();
	}
	window.HumboldtJSEmpty.prototype.__chain = function ()
	{
		if (!__humboldtjs.inherit(window.HumboldtJSEmpty, com.humboldtjs.system.Application)) return;
		
		window.HumboldtJSEmpty.prototype.__class = window.HumboldtJSEmpty.prototype;
		window.HumboldtJSEmpty.prototype.__constructor = function()
		{
			with (this) {
			__humboldtjs.sup(this, com.humboldtjs.system.Application.prototype.__constructor)();
			}
		}
		window.HumboldtJSEmpty.prototype.initialize = function()
		{
			with (this) {
			__humboldtjs.sup(this, com.humboldtjs.system.Application.prototype.initialize)();
			// the DOM is ready and the application is attached to it
   // now we're free to do whatever we like
       trace("The application is running");
			}
		}
	}
	};
};


__humboldtjs.ready(window.HumboldtJSEmpty);
