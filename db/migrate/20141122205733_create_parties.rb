class CreateParties < ActiveRecord::Migration
  def change
    create_table :parties do |t|
    	t.string :name
    	t.string :party_count
    	t.string :phone

      t.timestamps
    end
  end
end
