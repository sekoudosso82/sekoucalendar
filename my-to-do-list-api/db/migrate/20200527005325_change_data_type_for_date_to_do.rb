class ChangeDataTypeForDateToDo < ActiveRecord::Migration[6.0]
  def change
    # change_column :tasks, :dateToDo, :date
    def up
      change_column :tasks, :dateToDo, :date
    end
  
    def down
      change_column :tasks, :dateToDo, :string
    end
  end
end
