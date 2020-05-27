class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :tasks, :date, :dateToDo
  end
end
