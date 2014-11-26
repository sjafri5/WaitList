class SendTextController < ApplicationController
  def index
  end
 
  def send_text_message
    @party = Party.find(params[:id])
    @restaurant = @party.restaurant
    number_to_send_to = @party.phone
 
    twilio_sid = Rails.application.secrets.twilio_account_sid #ENV['twilio_sid']
    twilio_token = Rails.application.secrets.twilio_auth_token #ENV['twilio_auth_token']
    twilio_phone_number = "3317033062"
    
    @twilio_client = Twilio::REST::Client.new twilio_sid, twilio_token
  
    @twilio_client.account.sms.messages.create(
      :from => "+1#{twilio_phone_number}",
      :to => number_to_send_to,
      :body => "This is an automated message from #{@restaurant.name.capitalize}. Your table is now ready."
    )
    render :json => 'Success'
  end
end