class Manufacturer < ApplicationRecord

  def to_select
    { text: name, value: id }
  end

  def to_datatable
    { id: id, name: name, created_at: created_at.strftime('%F %H:%M'), tel: tel, email: email,
      principal: principal, account_day: account_day, code: code }
  end
end