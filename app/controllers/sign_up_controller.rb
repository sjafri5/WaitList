class SignUpController < ApplicationController
	skip_before_filter :authenticate_restaurant!

  def new
		@restaurant = Restaurant.new
  end

  def create
  	@restaurant = Restaurant.new(restaurant_params)

    if unique_email(params[:restaurant][:email]) && matching_password(params[:restaurant]) #no_form_errors(params[:restaurant])
      @restaurant.save
      sign_in @restaurant
      redirect_to root_path
    elsif !unique_email(params[:restaurant][:email])
      redirect_to signup_path, alert: "That email has already been taken, please select a unique email."
    elsif !matching_password(params[:restaurant])
      redirect_to signup_path, alert: "Please make sure your passwords are matching."
  	end

  end

  private

  def unique_email(email)
    Restaurant.email_is_unique(email)
  end

  def matching_password(params)
    params[:password] == params[:password_confirmation]
  end

  def restaurant_params
    params.require(:restaurant).permit(:name, :email, :password, :password_confirmation)
  end

end
