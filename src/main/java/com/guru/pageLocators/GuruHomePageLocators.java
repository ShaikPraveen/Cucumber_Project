package com.guru.pageLocators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public  class GuruHomePageLocators
{
	@FindBy(how=How.XPATH,using="//input[@name='uid']")
	public WebElement enetrusername;
	
	@FindBy(how=How.XPATH,using="//input[@name='password']")
	public WebElement enetrpassword;
	
	@FindBy(how=How.XPATH,using="//input[@value='LOGIN']")
	public WebElement clickloginBtn;
}
