package
{
	import com.humboldtjs.system.Application;

	// The Application meta tag causes the compiler to copy in the language
	// abstraction features (inheritance, casting, etc.) so be sure to keep
	// it in.
	[Application]
	public class HumboldtJSEmpty extends Application
	{
		public function HumboldtJSEmpty()
		{
			super();
		}
		
		/**
		 * Every app you build that extends from Application is ready to
		 * start working with the DOM as soon as the initialize method is
		 * called. Override it to add your own behavior.
		 */
		override protected function initialize():void
		{
			super.initialize();
			
			// the DOM is ready and the application is attached to it
			// now we're free to do whatever we like
			
			trace("The application is running");
			
//			var theArray:Array = new Array();
//			theArray.push("Test");
//			trace(theArray[0] as String);
		}
	}
}