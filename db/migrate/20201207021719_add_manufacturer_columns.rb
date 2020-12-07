class AddManufacturerColumns < ActiveRecord::Migration[6.0]
  def change
    add_column :manufacturers, :tel, :string, default: ''
    add_column :manufacturers, :email, :string, default: ''
    add_column :manufacturers, :principal, :string, default: ''
    add_column :manufacturers, :account_day, :decimal, default: 1
    add_column :manufacturers, :code, :string, default: ''
  end
end
