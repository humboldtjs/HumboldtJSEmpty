package tests
{
	import com.humboldtjs.hjsunit.TestSuite;
	

	public class SampleTestSuite extends TestSuite
	{
		public function SampleTestSuite()
		{
			super();
			
			setName("A sample test-suite");
			addTest(new SampleTestCase());
		}
	}
}