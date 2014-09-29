require 'rails_helper'

RSpec.describe Employee, :type => :model do
	it "has a valid factory" do
  	expect(FactoryGirl.create(:employee)).to be_valid
  	# FactoryGirl.create(:building).should be_valid
  end
	
	before { @employee = FactoryGirl.create(:employee) }
  
  subject { @employee }

  it { should respond_to(:first_name) }
  it { should respond_to(:last_name) }
  it { should respond_to(:phone) }
  it { should respond_to(:email) }
  it { should respond_to(:address) }
  it { should respond_to(:employee_code) }
  it { should respond_to(:created_at) }
  it { should respond_to(:updated_at) }

  xit { should belong_to(:company) }
  xit { should have_many(:garages) }

end
