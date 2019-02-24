package com.guru.pageActions;

import org.openqa.selenium.support.PageFactory;

import com.guru.pageLocators.GuruHomePageLocators;
import com.guru.utility.SeleniumWebdriver;

public class GuruHomePageActions
{
	GuruHomePageLocators guruHomePageLocators=null;
	
	
	    public GuruHomePageActions()
	    {
	    	this.guruHomePageLocators=new GuruHomePageLocators();
	    	PageFactory.initElements(SeleniumWebdriver.getDriver(),guruHomePageLocators );
	    }
	    
	    
	    public void enterUserName(String uname)
	    {
	    	guruHomePageLocators.enetrusername.sendKeys(uname);	
	    }
	    
	    public  void enterUserPassword(String pwd)
	    {
	    	guruHomePageLocators.enetrpassword.sendKeys(pwd);	
	    }
	    
	    public  void clickLoginBTN()
	    {
	    	guruHomePageLocators.clickloginBtn.click();
	    }
	    }
