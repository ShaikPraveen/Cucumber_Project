package com.guru.stepDefinations;


import org.openqa.selenium.By;
import org.testng.Assert;

import com.guru.pageActions.GuruHomePageActions;
import com.guru.pageActions.LoginHomePageActions;
import com.guru.utility.SeleniumWebdriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GuruHomepageSteps 
{
	  GuruHomePageActions guruHomePageActions =new GuruHomePageActions();
	  LoginHomePageActions loginHomePageActions=new LoginHomePageActions();
			

	@Given("^I am on the home page of \"([^\"]*)\" guru website$")
	public void i_am_on_the_home_page_of_guru_website(String url) throws Throwable {
	 SeleniumWebdriver.openPage(url);
	}

	@When("^Enter username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void enter_username_and_password(String uname, String pwd) throws Throwable {
		guruHomePageActions.enterUserName(uname);
		guruHomePageActions.enterUserPassword(pwd);
	}

	@And("^Click \"([^\"]*)\" Button$")
	public void click_Button(String arg1) throws Throwable
	{
		guruHomePageActions.clickLoginBTN();    
	}

	@Then("^I should see Login home page along with welecome text$")
	public void i_should_see_Login_home_page_along_with_welecome_text() throws Throwable
	{
		String text= SeleniumWebdriver.getDriver().findElement(By.xpath("//marquee[@class='heading3']")).getText();
		
	      if (text.contains("Welcome To Manager's"))
	      {
			  Assert.assertTrue(true);
		} else 
		{
          Assert.assertTrue(false);
		}   
	}

	@Then("^Title should be \"([^\"]*)\"$")
	public void title_should_be(String arg1) throws Throwable 
	{
		   String acttile=SeleniumWebdriver.getDriver().getTitle(); 
		   Assert.assertEquals(acttile, "Guru99 Bank Manager HomePage");
	}
	
	@Then("^Click \"([^\"]*)\" link in Login Page$")
	public void click_link_in_Login_Page(String arg1) throws Throwable
	{
		loginHomePageActions.clickLogOutLink();
		
		SeleniumWebdriver.getDriver().switchTo().alert().accept();
		SeleniumWebdriver.getDriver().switchTo().defaultContent();
	}
	
}
