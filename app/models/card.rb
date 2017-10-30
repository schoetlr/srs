class Card < ActiveRecord::Base

  belongs_to :user
  belongs_to :deck



  def last_interval
    self.last_studied - DateTime.now

  end
end
