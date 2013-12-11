class ScreenshotController < ApplicationController
  def index
    if params.has_key?(:url)
      @shot = `vendor/phantomjs/bin/phantomjs vendor/assets/javascripts/screenshot.js #{params[:url]}`
    end

  end
end
