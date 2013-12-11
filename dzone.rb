require "selenium-webdriver"

class Dzone
    
    URL = "http://www.dzone.com/links/index.html"

    def initialize(driver)
        @driver = driver
        @driver.navigate.to URL
	end
	
    def latest()      
      elements = @driver.find_elements(:xpath => "//a[@rel='bookmark']")      
      for a in elements do		
        link_txt, link =  a.attribute('text'), a.attribute('href')
        if link[/^http/]		  
          yield link_txt, link
		end
	  end
	end
	
end

if RUBY_PLATFORM == "java"
  driver = Selenium::WebDriver.for :remote, :url => "http://localhost:1234"
else
  driver = Selenium::WebDriver.for :phantomjs
end

news = Dzone.new(driver)

news.latest { |link, href| puts "#{link} | #{href}" }

driver.quit
