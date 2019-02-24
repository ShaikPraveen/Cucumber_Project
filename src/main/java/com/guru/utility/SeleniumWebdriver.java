package com.guru.utility;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumWebdriver
{
	private static  SeleniumWebdriver seleniumWebdriver;
	
	
	private static WebDriver driver;
	private static WebDriverWait wait;
	public final static int TIMEOUT=10;
	public final static int PAGELOAD_TIMEOUT=50;
	
	
	private SeleniumWebdriver()
	{
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\Executables\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(PAGELOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
	}
	
	
	public static void openPage(String url)
	{
	   driver.get(url);
	}
	
	public static WebDriver getDriver()
	{
		return driver;
	}
	
	
	public static void setUP()
	{
		if (seleniumWebdriver == null) 
		{
		    seleniumWebdriver=new SeleniumWebdriver();	
		}
		
	}
	
	
	public static void tearDown()
	{
		if (seleniumWebdriver!=null) 
		{
		    driver.close();
		    driver.quit();
		}
		
		seleniumWebdriver=null;
	}
}
