class AddDateToDoToTasks < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :dateToDo, :date
  end
end
