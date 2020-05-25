class RemoveBoolean < ActiveRecord::Migration[6.0]
  def change
    remove_column :tasks, :boolean, :string
  end
end
