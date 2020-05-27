class RemoveDateToDoFromTasks < ActiveRecord::Migration[6.0]
  def change
    remove_column :tasks, :dateToDo, :string
  end
end
