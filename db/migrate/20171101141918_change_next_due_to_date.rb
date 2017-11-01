class ChangeNextDueToDate < ActiveRecord::Migration
  def change
    change_column :cards, :next_due, :date
  end
end
