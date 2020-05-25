class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.string :date
      t.string :status
      t.string :boolean

      t.timestamps
    end
  end
end
