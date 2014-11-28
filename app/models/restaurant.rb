class Restaurant < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable,
         :recoverable, :rememberable, :trackable

	has_many :parties

  def self.email_is_unique(email)
    where(email: email).count == 0
  end
end
