class PartiesController < ApplicationController
	respond_to :html, :json, :xml
	
  def index
  	@guy = current_restaurant
  	# respond_with(@guy)
  end
end
