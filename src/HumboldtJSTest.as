package
{
	import com.humboldtjs.events.HJSEvent;
	import com.humboldtjs.hjsunit.UITestRunner;
	import com.humboldtjs.system.Application;
	
	import tests.SampleTestSuite;
	
	[Application]
	public class HumboldtJSTest extends Application
	{
		public function HumboldtJSTest()
		{
			super();
		}
		
		override protected function initialize():void
		{
			super.initialize();
			
			var theTestRunner:UITestRunner = new UITestRunner();
			
			addChild(theTestRunner.getUI());
			theTestRunner.addEventListener(HJSEvent.COMPLETE, onComplete);
			theTestRunner.run(new SampleTestSuite());
		}
		
		protected function onComplete(aEvent:HJSEvent):void
		{
			aEvent.getCurrentTarget().removeEventListener(HJSEvent.COMPLETE, onComplete);
			// done
		}
	}
}