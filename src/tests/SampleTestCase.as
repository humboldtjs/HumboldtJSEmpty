package tests
{
	import com.humboldtjs.hjsunit.Test;
	import com.humboldtjs.hjsunit.TestCase;
	
	import dom.window;
	
	public class SampleTestCase extends TestCase
	{
		public function SampleTestCase()
		{
			super();
			
			setName("Sample tests");
			addTestMethod(new Test("Test integer math", testIntegerMath, true));
			addTestMethod(new Test("Test floating point math", testFloatMath));
		}
		
		override protected function setup():void
		{
			// setup anything needed to run the test
			// if this should happen asynchronous call setSetupAsync(true)
			// in the constructor, and call _assert.done() when the setup
			// is complete
			
			_assert.message("Setting up tests");
		}
		
		public function testIntegerMath():void
		{
			var i:int = 5;
			_assert.equals(5, i);
			i += 4;
			_assert.equals(9, i);
			
			window.setTimeout(testIntegerMathComplete, 1000);
		}
		
		public function testIntegerMathComplete():void
		{
			_assert.done();
		}
		
		public function testFloatMath():void
		{
			var i:Number = 5;
			_assert.equals(5, i);
			i += 4.5;
			_assert.equals(9.5, i);
		}
	}
}