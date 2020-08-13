class Task < ApplicationRecord
  validates :dateToDo, presence: true
  belongs_to :user
end
