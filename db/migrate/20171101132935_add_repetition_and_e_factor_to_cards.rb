class AddRepetitionAndEFactorToCards < ActiveRecord::Migration
  def change
    add_column :cards, :repetition, :integer, default: 0
    add_column :cards, :e_factor, :float, default: 2.5
  end
end
