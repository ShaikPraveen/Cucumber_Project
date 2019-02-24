package com.guru.stepDefinations;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.guru.utility.SeleniumWebdriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;

public class AfterActions 
{
	@After
    public static void tearDown(Scenario scenario) {
    	
    	WebDriver driver=SeleniumWebdriver.getDriver();
    	System.out.println(scenario.isFailed());
    	 if (scenario.isFailed()) {
             byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
             scenario.embed(screenshotBytes, "image/png");
          
         }
    	 SeleniumWebdriver.tearDown();
    }

}
