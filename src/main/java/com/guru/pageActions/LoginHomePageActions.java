package com.guru.pageActions;

import org.openqa.selenium.support.PageFactory;

import com.guru.pageLocators.LoginHomePageLocators;
import com.guru.utility.SeleniumWebdriver;

public class LoginHomePageActions 
{
     LoginHomePageLocators loginHomePageLocators=null;
     
     
     public LoginHomePageActions()
     {
    	 this.loginHomePageLocators=new LoginHomePageLocators();
    	 PageFactory.initElements(SeleniumWebdriver.getDriver(), loginHomePageLocators);
     }
     
     
       public void clickLogOutLink()
       {
    	   loginHomePageLocators.logoutlink.click();
       }
     
     
}
