package com.guru.stepDefinations;

import com.guru.utility.SeleniumWebdriver;

import cucumber.api.java.Before;

public class BeforeActions 
{
	
	@Before
	public void setup()
	{
		SeleniumWebdriver.setUP();
	}

}
