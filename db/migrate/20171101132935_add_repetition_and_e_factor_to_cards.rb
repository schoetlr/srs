class AddRepetitionAndEFactorToCards < ActiveRecord::Migration
  def change
    add_column :cards, :repetition, :integer
    add_column :cards, :e_factor, :float
  end
end
