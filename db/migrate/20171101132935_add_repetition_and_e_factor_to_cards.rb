class AddRepetitionAndEFactorToCards < ActiveRecord::Migration
  def change
    add_column :cards, :repitition, :integer
    add_column :cards, :e_factor, :float
  end
end
