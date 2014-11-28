class PartiesController < ApplicationController
	respond_to :html, :json, :xml

  def index
  	@parties = current_restaurant.parties
  	respond_with(@parties)
  end

  def create
		@party = Party.create(name: params[:name], party_count: params[:size], phone: params[:phone], restaurant_id: current_restaurant.id)
  	respond_with(@party)
  end

  def destroy
  	@party = Party.find(params[:id])
  	@party.destroy
  	render :json => 'Success'
  end

  def destroy_all
  	Party.destroy_all(:restaurant_id => current_restaurant.id)
  	render :json => 'Success'
  end

end
