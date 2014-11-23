class Party < ActiveRecord::Base
	belongs_to :restaurant

	def self.create_new_instance(data)
	end


end
