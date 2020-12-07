class Api::ManufacturerController < ApplicationController

  def to_select
    render json: Manufacturer.select(:id, :name).map(&:to_select)
  end

end
