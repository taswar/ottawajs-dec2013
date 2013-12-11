#!/usr/bin/env python
from selenium import webdriver

class HackerNewsPageObject:
    """
    Get Hacker News with points greater than
    """

    URL = "https://news.ycombinator.com/"

    def __init__(self, driver):
        self.driver = driver
        driver.get(HackerNewsPageObject.URL)

    def points_ge(self, points = 20):
        """
        Points Greater than or equal to
        """
        path = '//span[starts-with(@id, "score")]'
        elements = driver.find_elements_by_xpath(path)
        for span in elements:
            point = span.text.split( )[0]
            if int(point) >= points:
                tr = span.find_element_by_xpath('./ancestor::tr[1]')
                tr_data_cell = tr.find_element_by_xpath('./preceding-sibling::*[1]')
                a = tr_data_cell.find_element_by_xpath('./td[3]/a')
                link_txt, link =  a.text.encode('utf-8'), a.get_attribute('href')
                if link.startswith("http"):
                    yield (link_txt, link)

driver = webdriver.PhantomJS()

news = HackerNewsPageObject(driver)

links = news.points_ge()

for link in links:
  print "{0} | {1}".format(link[0], link[1])

driver.quit
