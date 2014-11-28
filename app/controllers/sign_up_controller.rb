class SignUpController < ApplicationController
	skip_before_filter :authenticate_restaurant!

  def new
		@restaurant = Restaurant.new
  end

  def create
  	@restaurant = Restaurant.new(restaurant_params)

  	if @restaurant.save
  		sign_in @restaurant
  		redirect_to root_path
  	end
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(:name, :email, :password, :password_confirmation)
  end

end
