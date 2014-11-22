class PartiesController < ApplicationController
	respond_to :html, :json, :xml

  def index
  	@parties = current_restaurant.parties
  	respond_with(@parties)
  end

  def create
  end

end
