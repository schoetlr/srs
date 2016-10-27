class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.integer :deck_id, null: false
      t.text :front
      t.text :back
      t.boolean :cloze, default: false
      t.integer :user_id
      t.datetime :next_due

      t.timestamps null: false
    end
  end
end
