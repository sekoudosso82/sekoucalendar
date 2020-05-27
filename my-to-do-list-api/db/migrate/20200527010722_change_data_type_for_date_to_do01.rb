class ChangeDataTypeForDateToDo01 < ActiveRecord::Migration[6.0]
  def change
    def up
      change_column :tasks, :dateToDo, :datetime
    end
  
    def down
      change_column :tasks, :dateToDo, :string
    end
  end
end
