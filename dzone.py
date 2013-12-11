from selenium import webdriver

class DzonePageObject:
    """
    Get dzone latest news
    """

    URL = "http://www.dzone.com/links/index.html"

    def __init__(self, driver):
        self.driver = driver
        driver.get(DzonePageObject.URL)

    def latest(self):
      """
      Get the latest links
      """
      path = "//a[@rel='bookmark']"
      elements = driver.find_elements_by_xpath(path)
      for a in elements:
        link_txt, link =  a.text.encode('utf-8'), a.get_attribute('href')
        if link.startswith("http"):
          yield (link_txt, link)

driver = webdriver.PhantomJS()


news = DzonePageObject(driver)

links = news.latest()

for link in links:
  print "{0} | {1}".format(link[0], link[1])

driver.quit
