class SignUpController < ApplicationController
	skip_before_filter :authenticate_restaurant!

  def new
		@restaurant = Restaurant.new
  end

  def create
  	puts params
  	@restaurant = Restaurant.new(restaurant_params)

  	if @restaurant.save
  		sign_in @restaurant
  		redirect_to root_path
  	end
  	# restaurant.update(name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])
  	# # p @restaurant
  	# if @restaurant.id
  	# 	sign_in @restaurant
  	# 	redirect_to root_path
  	# else
  	# 	render "devise/registrations/new"
  	# end
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(:name, :email, :password, :password_confirmation)
  end

 #  def create_restaurant_params
	# 	params.permit(:name,
	# 								:email,
	# 								:password,
	# 								:password_confirmation,
	# 						)
	# end
end
