class AddLastStudiedToCards < ActiveRecord::Migration
  def change
    add_column :cards, :last_studied, :datetime
  end
end
