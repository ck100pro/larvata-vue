class Org < ApplicationRecord

  def to_select
    { text: name, value: id }
  end
end